import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";
import Link from "next/link";

type SocialItemProps = {
  href: string;
  name: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

const SocialItem = ({ social }: { social: SocialItemProps }) => {
  const Icon = social.icon;
  return (
    <Link
      href={social.href}
      className="border border-primary hover:bg-primary text-white transition-all duration-300 p-3 rounded-full bg-primary/20 flex items-center justify-center drop-shadow-(--shadow-primary)"
    >
      <Icon size={20} />
    </Link>
  );
};

export default SocialItem;
