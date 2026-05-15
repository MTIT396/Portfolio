"use client";
import { SquareArrowOutUpRight, Mail, Sparkles } from "lucide-react";
import { ReactTyped } from "react-typed";
import Button from "../ui/button";
import { motion } from "framer-motion";
import { socialsLink } from "@/lib/data";
import SocialItem from "../common/SocialItem";
import {
  containerVariants,
  fadeInVariants,
  rightInVariants,
  staggerContainer,
} from "../../lib/variants-motion";
import SectionContainer from "../common/SectionContainer";
import { handleScrollToSection } from "@/lib/utils";
import OrbitingSkills from "../common/OrbitSkills";
import { SectionId } from "@/types/type.type";
export default function Hero() {
  return (
    <SectionContainer
      id="hero"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-0 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-4"
        >
          <span className="mt-14 sm:mt-0 cursor-default inline-flex gap-2 items-center text-xl font-medium px-6 py-1.5 rounded-full bg-white/10 text-purple-300 border border-purple-400/30">
            <Sparkles size={16} /> Le Minh Thien
          </span>

          <motion.h1
            variants={fadeInVariants}
            className="text-3xl text-nowrap md:text-6xl font-extrabold leading-tight drop-shadow-[0_4px_16px_#6965fb]"
          >
            <span className="text-white">Frontend</span>{" "}
            <span className="bg-linear-to-r from-[#6965fb] to-[#9f56f5] bg-clip-text text-transparent">
              Developer
            </span>
          </motion.h1>

          <motion.div variants={fadeInVariants} className="text-gray-300">
            <ReactTyped
              strings={["Second-year IT Student"]}
              typeSpeed={40}
              backSpeed={20}
              backDelay={4000}
              startDelay={300}
              loop
              smartBackspace={true}
              showCursor={true}
              cursorChar="|"
              className="sm:text-2xl text-xl font-semibold"
            />
            <motion.p
              variants={fadeInVariants}
              className="mt-2 sm:text-base text-sm text-gray-300"
            >
              I am a second-year Information Technology student passionate about
              web development, seeking an internship oppotunity to apply my
              technical skills and gain hands-on experience as a Frontend
              Developer. I aim to strengthen my technical and teamwork skills
              toward becoming a professional Software Engineer.
            </motion.p>
          </motion.div>

          {/* TECH TAGS */}
          <motion.div
            variants={fadeInVariants}
            className="flex flex-wrap gap-3 pt-2"
          >
            {["Next.js", "React", "Node.js", "Tailwind"].map((tech) => (
              <span
                key={tech}
                className="text-gray-200 cursor-default px-4 py-1.5 text-sm font-medium bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeInVariants} className="flex gap-4 pt-4">
            <Button
              onClick={() => handleScrollToSection(SectionId.PORTFOLIO)}
              size="lg"
              className="text-sm"
            >
              Projects
              <SquareArrowOutUpRight size={20} />
            </Button>
            <Button
              onClick={() => handleScrollToSection(SectionId.CONTACT)}
              size="lg"
              className="text-sm"
            >
              Contact
              <Mail size={20} />
            </Button>
          </motion.div>
          {/* SOCIAL ICONS */}
          <motion.div
            variants={fadeInVariants}
            className="flex gap-5 pt-1 text-gray-400"
          >
            {socialsLink.map((social) => (
              <SocialItem key={social.name} social={social} />
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="hidden sm:block"
        >
          <motion.div variants={rightInVariants}>
            <OrbitingSkills />
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
