import Image from "next/image";
import { cn } from "@/lib/utils";
import { Comment } from "@/types/comment.type";
import { timeFromNow } from "@/lib/time";

interface CommentCardProps {
  comment: Comment;
  className?: string;
}
const CommentCard = ({ comment, className }: CommentCardProps) => {
  return (
    <div
      className={cn(
        "w-full rounded-lg p-4 bg-linear-to-r from-white/5 to-white/0 border border-white/10 backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="h-10 w-10 overflow-hidden shrink-0 rounded-full border border-white/20 bg-white/10">
          <Image
            src={comment.avatarUrl || "/default-avt.avif"}
            alt={comment.name}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between gap-2">
            <p className="font-semibold text-white font-inter">
              {comment.name}
            </p>
            <span className="text-xs text-white/40">
              {timeFromNow(comment.createdAt)}
            </span>
          </div>

          <p className="text-sm text-white/80 leading-tight font-opensans break-all">
            {comment.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
