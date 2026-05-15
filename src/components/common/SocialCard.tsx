import { cn } from "@/lib/utils";
import { Social } from "@/types/type.type";
import Image from "next/image";
import Link from "next/link";
interface SocialCardProps extends Social {
  classname?: string;
}
const SocialCard = ({
  title,
  subtitle,
  iconUrl,
  href,
  classname,
}: SocialCardProps) => {
  return (
    <Link target="_blank" rel="noopener noreferrer" href={href}>
      <div
        className={cn(
          "flex items-center gap-3 border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300 cursor-pointer rounded-md px-4 py-3",
          classname,
        )}
      >
        <div className="relative size-10 shrink-0">
          <Image alt={title} src={iconUrl} className="object-cover" fill />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-white font-semibold leading-tight">{title}</h1>
          <span className="text-gray-400 text-xs leading-tight">
            {subtitle}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SocialCard;
