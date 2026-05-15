import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
const MotionInView = ({
  children,
  containerClassname,
  motionVariants,
}: {
  children: React.ReactNode;
  containerClassname?: string;
  motionVariants: Variants;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.2,
    once: true,
  });
  return (
    <motion.div
      ref={ref}
      viewport={{ once: true }}
      variants={motionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={containerClassname}
    >
      {children}
    </motion.div>
  );
};

export default MotionInView;
