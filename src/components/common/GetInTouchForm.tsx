import React, { useState } from "react";
import FormWrapper from "../shared/FormWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import {
  Loader2,
  Mail,
  MessageSquare,
  Send,
  Share2,
  Sparkles,
  User,
} from "lucide-react";
import TextFormField from "../shared/TextFormField";
import TextareaFormField from "../shared/TextareaFormField";
import Button from "../ui/button";
import SocialCard from "./SocialCard";
import { socialsConnection } from "@/lib/data";
import toast from "react-hot-toast";
import { createMessage } from "@/apis/message.api";

const getInTouchSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid Email"),
  message: z.string().min(6, "Message must be at least 6 characters long"),
});

type GetInTouchRequest = z.infer<typeof getInTouchSchema>;

const GetInTouchForm = () => {
  const getInTouchForm = useForm({
    resolver: zodResolver(getInTouchSchema),
    mode: "onChange",
    defaultValues: { name: "", email: "", message: "" },
  });

  const [isSubmit, setIsSubmit] = useState(false);

  // Handle Submit
  const handleSubmit = async (data: GetInTouchRequest) => {
    try {
      setIsSubmit(true);
      const res = await createMessage(data);
      if (res.success) {
        toast.success("Your message has been received!", {
          position: "top-center",
          duration: 3000,
        });
        // reset form state
        getInTouchForm.reset({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmit(false);
    }
  };

  return (
    <FormWrapper
      form={getInTouchForm}
      onSubmit={handleSubmit}
      className="rounded-2xl bg-[#110d20]/90 p-8"
    >
      {/* Title */}
      <div>
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl bg-linear-to-r from-[#6965fb] to-[#9f56f5] bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <Share2 className="text-primary" />
        </div>
        <p className="text-gray-400 text-sm mt-2 text-pretty">
          Have something to discuss? Send me a message and let&#39;s talk
        </p>
      </div>
      {/* Form Field */}
      <div className="space-y-5 mt-4">
        <TextFormField
          name="name"
          type="text"
          placeholder="Your Name"
          leftAddon={<User size={20} className="text-gray-300" />}
          className="py-1.5 bg-white/5 rounded-xl text-white border border-white/10"
          required
        />
        <TextFormField
          name="email"
          type="email"
          placeholder="Your Email"
          leftAddon={<Mail size={20} className="text-gray-300" />}
          className="py-1.5 bg-white/5 rounded-xl text-white border border-white/10"
          required
        />
        <TextareaFormField
          name="message"
          placeholder="Your Message"
          leftAddon={<MessageSquare size={16} className="text-gray-300" />}
          className="min-h-[120px] bg-white/5 rounded-xl border border-white/10"
        />
      </div>

      <Button
        variant="secondary"
        disabled={isSubmit}
        className="font-semibold rounded-xl mt-4 py-3"
      >
        {isSubmit ? (
          <Loader2 size={20} className="animate-spin" />
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </Button>

      {/* Contact Social Media */}
      <div className="rounded-xl p-6 bg-white/5  w-full mt-6">
        <div className="flex items-center gap-3">
          <div className="bg-primary w-8 h-0.5 rounded-full drop-shadow-(--shadow-primary)"></div>
          <Sparkles className="text-primary" size={20} />
          <h1 className="text-xl text-white font-bold text-nowrap">
            Connect with me
          </h1>
        </div>
        <SocialCard
          title="Let's Connect"
          subtitle="on Facebook"
          iconUrl="/media/fb.svg"
          href="https://www.facebook.com/minh.thien.0392006"
          classname="mt-6 mb-3"
        />
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
          {socialsConnection.map((social, i) => (
            <SocialCard
              key={i}
              iconUrl={social.iconUrl}
              title={social.title}
              subtitle={social.subtitle}
              href={social.href}
            />
          ))}
        </div>
      </div>
    </FormWrapper>
  );
};

export default GetInTouchForm;
