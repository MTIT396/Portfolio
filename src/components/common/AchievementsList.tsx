import React from "react";
import ScholarshipCard from "./ScholarshipCard";
import MotionInView from "../ui/motion";
import { containerVariants, fadeInVariants } from "@/lib/variants-motion";
import { motion } from "framer-motion";
const AchievementsList = () => {
  return (
    <div className="mt-6">
      <MotionInView motionVariants={containerVariants}>
        <motion.div custom={1} variants={fadeInVariants}>
          <ScholarshipCard
            amount="$ 430"
            title="Academic Encouragement Scholarship (2024-2025)"
            provider="Posts & Telecommunications Institue of Technology"
            date="25/7/2025"
          />
        </motion.div>
      </MotionInView>
    </div>
  );
};

export default AchievementsList;
