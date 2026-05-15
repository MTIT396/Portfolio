import { techStacks } from "@/lib/data";
import Image from "next/image";
import React from "react";
import MotionInView from "../ui/motion";
import { containerVariants, flyInVariants } from "@/lib/variants-motion";
import { motion } from "framer-motion";

const TechStackList = () => {
  return (
    <MotionInView
      motionVariants={containerVariants}
      containerClassname="grid md:grid-cols-7 grid-cols-2 sm:grid-cols-3 gap-8 mt-10 w-fit mx-auto"
    >
      {techStacks.map((tech, index) => (
        <motion.div custom={index} variants={flyInVariants} key={tech.name}>
          <div className="hover:scale-105 cursor-default relative group shadow-md shadow-primary/10 transition-all duration-300 size-34 bg-[#101528]/80 backdrop-blur-md flex flex-col items-center justify-center rounded-xl overflow-hidden">
            {/* Gradient overlay khi hover */}
            <motion.div
              className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
            />

            {/* Content */}
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={tech.iconUrl}
                alt={tech.name}
                width={50}
                height={50}
              />
            </motion.div>

            <span className="relative z-10 text-white text-sm mt-3 font-medium transition-colors duration-300">
              {tech.name}
            </span>

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              style={{ transform: "skewX(-20deg)" }}
            />
          </div>
        </motion.div>
      ))}
    </MotionInView>
  );
};

export default TechStackList;
