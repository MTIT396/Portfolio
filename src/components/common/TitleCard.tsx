"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface TiltCardProps {
  range?: number;
  depth?: number;
  containerClassName?: string;
  children: React.ReactNode;
}

const TiltCard = ({
  range = 32,
  depth = 80,
  containerClassName,
  children,
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const z = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 20 });
  const zSpring = useSpring(z, { stiffness: 200, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * range;
    const mouseY = (e.clientY - rect.top) * range;

    const rotationX = (mouseY / height - range / 2) * -1;
    const rotationY = mouseX / width - range / 2;

    x.set(rotationX);
    y.set(rotationY);
  };

  const handleMouseEnter = () => {
    z.set(depth);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    z.set(3);
  };

  const shadow = useTransform(
    zSpring,
    (z) => `0 ${z / 2}px ${z}px rgba(0, 0, 0, 0.15)`
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      style={{
        transformStyle: "preserve-3d",
        rotateX: xSpring,
        rotateY: ySpring,
      }}
      className="relative shadow-[0_0_25px_0_#6965fb] w-70 h-90 rounded-3xl bg-primary/10 border-2 border-primary"
    >
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          translateZ: zSpring,
          boxShadow: shadow,
        }}
        className={cn(
          "absolute inset-2 rounded-2xl border border-primary/50 overflow-hidden transform-3d will-change-transform",
          containerClassName
        )}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
export default TiltCard;
