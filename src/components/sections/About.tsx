"use client";
import { BookText, Code, Sparkles } from "lucide-react";
import Button from "../ui/button";
import Image from "next/image";
import TitleCard from "../common/TitleCard";
import { StatCard } from "../common/StatCard";
import { statsData } from "@/lib/data";
import MotionInView from "../ui/motion";
import { motion } from "framer-motion";
import {
  containerVariants,
  fadeInVariants,
  rightInVariants,
} from "../../lib/variants-motion";
import SectionContainer from "../common/SectionContainer";
import { handleScrollToSection } from "@/lib/utils";
import { SectionId } from "@/types/type.type";
const About = () => {
  return (
    <SectionContainer id="about">
      <MotionInView
        motionVariants={containerVariants}
        containerClassname="flex flex-col gap-1 items-center justify-center"
      >
        <motion.div variants={fadeInVariants}>
          <h1 className="bg-linear-to-r from-[#6965fb] to-[#9f56f5] bg-clip-text text-transparent text-center text-4xl font-bold">
            About me
          </h1>
          <span className="flex items-center gap-x-2">
            <h1 className="font-opensans flex gap-1 text-gray-400 text-sm text-pretty">
              <Sparkles className="text-primary" size={20} />
              Transforming ideas into digital experiences
              <Sparkles className="text-primary" size={20} />
            </h1>
          </span>
        </motion.div>

        <div className="container relative z-10 flex sm:flex-nowrap flex-wrap gap-10 justify-center items-center mt-12">
          {/* Left Content */}
          <MotionInView
            motionVariants={containerVariants}
            containerClassname="space-y-6 sm:max-w-1/2 "
          >
            <div className="space-y-2">
              <motion.h2
                variants={fadeInVariants}
                className="tracking-wide text-3xl font-bold bg-linear-to-r from-[#6965fb] to-[#9f56f5] bg-clip-text text-transparent"
              >
                Hello, I&#39;m{" "}
              </motion.h2>
              <motion.h2
                variants={fadeInVariants}
                className="text-4xl font-bold text-white tracking-wide"
              >
                Le Minh Thien
              </motion.h2>
            </div>
            <motion.p
              variants={fadeInVariants}
              className="text-gray-300 text-sm leading-relaxed"
            >
              I am a second-year Information Technology student passionate about
              web development, seeking an internship oppotunity to apply my
              technical skills and gain hands-on experience as a Frontend
              Developer. I aim to strengthen my technical and teamwork skills
              toward becoming a professional Software Engineer.
            </motion.p>
            <motion.div
              variants={fadeInVariants}
              className="flex items-center gap-4"
            >
              <Button size="lg" variant="secondary" className="text-sm ">
                <BookText size={20} />
                View CV
              </Button>
              <Button
                onClick={() => handleScrollToSection(SectionId.PORTFOLIO)}
                variant="outline"
                size="lg"
                className="text-sm"
              >
                <Code size={20} />
                View Projects
              </Button>
            </motion.div>
          </MotionInView>

          {/* Right Content */}
          <MotionInView
            motionVariants={rightInVariants}
            containerClassname="flex w-full justify-center sm:justify-end"
          >
            <TitleCard>
              <Image
                src="/my-avt.png"
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="avt"
                fill
                className="object-cover"
              />
            </TitleCard>
          </MotionInView>
        </div>

        {/* Stats Cards */}
        <MotionInView
          motionVariants={containerVariants}
          containerClassname="grid grid-cols-1 md:grid-cols-3 gap-6 w-full py-12"
        >
          {statsData.map((item, index) => (
            <StatCard key={index} item={item} index={index} />
          ))}
        </MotionInView>
      </MotionInView>
    </SectionContainer>
  );
};

export default About;
