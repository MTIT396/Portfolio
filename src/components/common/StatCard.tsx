import { ArrowUpRight, LucideProps } from "lucide-react";
import { motion } from "framer-motion";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { flyInVariants } from "@/lib/variants-motion";

interface StatItem {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  value: number | string;
  title: string;
  subtitle: string;
}

export const StatCard = ({
  item,
  index,
}: {
  item: StatItem;
  index: number;
}) => {
  const Icon = item.icon;
  return (
    <motion.div
      custom={index}
      variants={flyInVariants}
      className="hover:scale-105 relative bg-[#13131f]/60 hover:drop-shadow-(--shadow-primary) backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-[0_0_40px_rgba(0,0,0,0.4)] duration-200"
    >
      <div className="flex items-center justify-between ">
        <div className="text-white/80 text-3xl bg-primary/30 p-3 rounded-full">
          <Icon size={20} />
        </div>
        <span className="text-white font-semibold text-3xl">{item.value}</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col mt-2">
          <p className="text-primary text-sm tracking-wide font-semibold uppercase">
            {item.title}
          </p>
          <p className="text-gray-200 text-xs mt-1">{item.subtitle}</p>
        </div>

        <ArrowUpRight className="text-white/40 mt-auto" size={20} />
      </div>
    </motion.div>
  );
};
