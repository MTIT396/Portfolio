"use client";
import React from "react";
import SectionContainer from "../common/SectionContainer";
import { motion } from "framer-motion";
import {
  containerVariants,
  fadeInVariants,
  flyInVariants,
} from "@/lib/variants-motion";
import MotionInView from "../ui/motion";
import GetInTouchForm from "../common/GetInTouchForm";

const Contact = () => {
  return (
    <SectionContainer id="contact">
      <MotionInView motionVariants={containerVariants}>
        <motion.div variants={fadeInVariants}>
          <h1 className="bg-linear-to-r from-[#6965fb] to-[#9f56f5] bg-clip-text text-transparent text-center text-4xl font-bold">
            Contact Me
          </h1>
          <span className="flex items-center justify-center mt-2">
            <h1 className="font-opensans text-gray-400 text-sm max-w-[600px] text-center">
              Got a question? Send me a message, and I will get back soon
            </h1>
          </span>
        </motion.div>
        <motion.div variants={containerVariants} className="flex gap-10 mt-10">
          {/* Get in Touch Form */}
          <motion.div
            custom={1}
            variants={flyInVariants}
            className="max-w-2xl mx-auto w-full shrink-0"
          >
            <GetInTouchForm />
          </motion.div>
          {/* Comments Form */}
          {/* <motion.div
            custom={2}
            variants={flyInVariants}
            className="w-full overflow-hidden"
          >
            <CommentForm />
          </motion.div> */}
        </motion.div>
      </MotionInView>
    </SectionContainer>
  );
};

export default Contact;
