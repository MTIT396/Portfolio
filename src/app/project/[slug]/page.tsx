"use client";

import SectionContainer from "@/components/common/SectionContainer";
import TechItem from "@/components/common/TechItem";
import Button from "@/components/ui/button";
import { projects } from "@/lib/data";
import {
  ArrowLeft,
  Blocks,
  ChevronRight,
  CodeXml,
  Github,
  Layers,
  LucideProps,
  PencilLine,
  SquareArrowOutUpRight,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";

/* -------------------- Helper Components -------------------- */
interface StatCardProps {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  bg: string;
  value: number;
  label: string;
}
const StatCard = ({ icon: Icon, bg, value, label }: StatCardProps) => {
  return (
    <div className="bg-primary/5 rounded-md border border-primary/20 flex items-center gap-3 py-2.5 px-3">
      <span
        className={`size-10 flex items-center justify-center rounded-full ${bg}`}
      >
        <Icon size={20} className="text-white/80" />
      </span>
      <div className="flex flex-col">
        <span className="text-xl font-semibold text-white">{value}</span>
        <span className="text-xs text-gray-300">{label}</span>
      </div>
    </div>
  );
};

/* -------------------- Main Page -------------------- */

const ProjectPage = () => {
  const params = useParams();
  const router = useRouter();

  const project = projects.find((item) => item.id === params.slug);

  if (!project)
    return (
      <main className="flex items-center justify-center h-screen">
        <p className="text-primary text-xl">Project not found.</p>
      </main>
    );

  return (
    <main>
      <SectionContainer id="project">
        <div className="flex items-center gap-x-4">
          <Button onClick={() => router.back()} variant="secondary" size="sm">
            <ArrowLeft size={16} />
            Back
          </Button>

          <div className="flex items-center gap-x-1 text-gray-400 ml-4">
            <Link href="/">
              <span className="text-sm cursor-pointer hover:text-white transition">
                Projects
              </span>
            </Link>
            <ChevronRight size={16} />
            <span className="text-sm cursor-pointer text-white font-medium">
              {project.title}
            </span>
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-2 gap-10 mt-10">
          {/* ---------------- Left ---------------- */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <h1 className="text-4xl font-bold text-white">{project.title}</h1>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 p-4 rounded-md bg-white/5 backdrop-blur-xl">
              <StatCard
                icon={CodeXml}
                bg="bg-blue-800"
                value={project.techs.length}
                label="Total Technologies"
              />
              <StatCard
                icon={Layers}
                bg="bg-purple-900"
                value={project.features.length}
                label="Key Features"
              />
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <Link
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  className="text-sm rounded-lg"
                  size="lg"
                >
                  <SquareArrowOutUpRight size={18} />
                  Live Demo
                </Button>
              </Link>

              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="text-sm rounded-lg"
                  size="lg"
                >
                  <Github size={18} />
                  Github
                </Button>
              </Link>
            </div>

            {/* Tech */}
            <div className="mt-10 p-6 rounded-lg space-y-10">
              <h1 className="text-2xl font-semibold text-white flex items-center gap-x-3">
                <Blocks size={20} className="text-primary" />
                Technologies Used
              </h1>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                {project.techs.map((item) => (
                  <TechItem key={item.name} item={item} />
                ))}
              </div>
            </div>
          </div>
          {/* ---------------- Right ---------------- */}
          <div className="space-y-6 max-w-120 w-full ml-auto">
            <div className="h-60 relative rounded-md overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>

            <ul className="flex flex-col gap-6 p-6 border border-primary/20 rounded-xl bg-[#0e0c1f] backdrop-blur-xl">
              <h1 className="text-xl font-semibold text-white flex items-center gap-2 mb-2">
                <Star size={20} className="text-yellow-500" />
                Key Features
              </h1>

              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-gray-300 text-sm flex gap-3 items-center leading-relaxed"
                >
                  <span className="shrink-0 mt-1">
                    <PencilLine size={14} className="text-gray-400" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
};

export default ProjectPage;
