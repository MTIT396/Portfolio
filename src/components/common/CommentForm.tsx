import TextareaFormField from "../shared/TextareaFormField";
import Button from "../ui/button";
import CommentCard from "./CommentCard";
import { Loader2, MessageCircle, Send } from "lucide-react";
import FormWrapper from "../shared/FormWrapper";
import TextFormField from "../shared/TextFormField";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FileUploadFormField from "../shared/FileUploadFormField";
import { createComment, getComments } from "@/apis/comment.api";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Comment } from "@/types/comment.type";

const commentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  message: z.string().min(6, "Message must be at least 6 characters long"),
  avatar: z
    .instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, "Max 5MB")
    .optional(),
});

type CommentRequest = z.infer<typeof commentSchema>;

const CommentForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  // Comments Form Management
  const commentsForm = useForm({
    resolver: zodResolver(commentSchema),
    mode: "onChange",
    defaultValues: { name: "", message: "", avatar: undefined },
  });
  // Handle Submit
  const handleSubmit = async (data: CommentRequest) => {
    try {
      setIsSubmit(true);
      const res = await createComment(data);
      if (res.success) {
        toast.success(res.message, {
          position: "top-center",
          duration: 3000,
        });
        // reset form state
        commentsForm.reset({
          name: "",
          message: "",
          avatar: undefined,
        });
        // update comments when submit
        const updatedComments = await getComments();
        setComments(updatedComments.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmit(false);
    }
  };
  // Fetch Comments
  useEffect(() => {
    const fetchComments = async () => {
      const comments = await getComments();
      setComments(comments.data);
    };
    fetchComments();
  }, []);
  return (
    <FormWrapper
      form={commentsForm}
      onSubmit={handleSubmit}
      className="rounded-2xl bg-[#110d20]/90 p-8 h-full"
    >
      {/* Main Comments */}
      <div className="bg-white/5 rounded-xl p-5 h-full">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-gray-700 pb-4">
          <span className="rounded-xl p-1 bg-primary/20 size-10 flex items-center justify-center">
            <MessageCircle size={20} className="text-primary" />
          </span>
          <h1 className="font-bold text-white text-xl">Comments</h1>
          <span className="text-primary">({comments.length})</span>
        </div>

        <div className="space-y-3 mt-4">
          <TextFormField
            name="name"
            type="text"
            label="Name"
            placeholder="Enter your name"
            className="py-1.5 bg-white/5 rounded-xl text-white border border-white/10"
            required
          />
          <TextareaFormField
            name="message"
            label="Message"
            placeholder="Write your message here..."
            className="min-h-[120px] border border-white/10 bg-white/5"
            required
          />
          <FileUploadFormField
            name="avatar"
            label="Profile Photo"
            optional
            maxSizeMB={5}
          />
        </div>

        <Button
          variant="secondary"
          className="font-semibold mt-6 rounded-xl py-3 w-full"
        >
          {isSubmit ? (
            <Loader2 size={20} className="animate-spin" />
          ) : (
            <>
              <Send size={20} />
              Post Message
            </>
          )}
        </Button>

        {/* Comments */}
        <div className="flex flex-col gap-4 mt-8">
          {comments.map((cmt) => (
            <CommentCard key={cmt._id} comment={cmt} />
          ))}
        </div>
      </div>
    </FormWrapper>
  );
};

export default CommentForm;
