"use client";
import React from "react";
import { motion } from "framer-motion";
import MotionInView from "../ui/motion";
import ShowcaseBar from "../common/ShowcaseBar";
import ProjectList from "../common/ProjectList";
import { showcases } from "@/lib/data";
import SectionContainer from "../common/SectionContainer";
import TechStackList from "../common/TechStackList";
import { fadeInVariants } from "@/lib/variants-motion";
import AchievementsList from "../common/AchievementsList";
const Porfolio = () => {
  const [selectedShowcase, setSelectedShowcase] = React.useState<number>(
    showcases[0].id
  );
  const menus = [
    {
      id: 1,
      component: <ProjectList />,
    },
    {
      id: 2,
      component: <AchievementsList />,
    },
    {
      id: 3,
      component: <TechStackList />,
    },
  ];
  const ActiveComponent = menus.find(
    (menu) => menu.id === selectedShowcase
  )?.component;
  return (
    <SectionContainer id="portfolio">
      <MotionInView motionVariants={fadeInVariants}>
        <motion.div variants={fadeInVariants}>
          <h1 className="bg-linear-to-r from-[#6965fb] to-[#9f56f5] bg-clip-text text-transparent text-center text-4xl font-bold">
            Portfolio Showcase
          </h1>
          <span className="flex items-center justify-center mt-2">
            <h1 className="font-opensans text-gray-400 text-sm max-w-[600px] text-center">
              Explore my journey through diverse projects and technical
              expertise. Each section represents a milestone in my continuous
              learning path
            </h1>
          </span>
        </motion.div>

        <ShowcaseBar
          selectedShowcase={selectedShowcase}
          setSelectedShowcase={setSelectedShowcase}
        />

        {ActiveComponent}
      </MotionInView>
    </SectionContainer>
  );
};

export default Porfolio;
