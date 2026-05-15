import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import MotionInView from "../ui/motion";
import { containerVariants, flyInVariants } from "@/lib/variants-motion";
const ProjectList = () => {
  return (
    <MotionInView
      motionVariants={containerVariants}
      containerClassname="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6"
    >
      {projects.map((project, index) => (
        <motion.div key={index} variants={flyInVariants} custom={index}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </MotionInView>
  );
};

export default ProjectList;
