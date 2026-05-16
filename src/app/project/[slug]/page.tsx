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
  Layers3,
  PencilLine,
  Sparkles,
  SquareArrowOutUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";

interface StatCardProps {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  value: number;
}

const StatCard = ({ icon: Icon, title, value }: StatCardProps) => {
  return (
    <div className="group backdrop-blur-2xl relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-5 transition-all duration-300 hover:border-primary/40 hover:bg-white/5">
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative flex items-center gap-4">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/15 border border-primary/20">
          <Icon className="text-primary" size={24} />
        </div>

        <div className="flex flex-col">
          <span className="text-2xl font-bold text-white">{value}</span>
          <span className="text-sm text-gray-400">{title}</span>
        </div>
      </div>
    </div>
  );
};

const ProjectPage = () => {
  const params = useParams();
  const router = useRouter();

  const project = projects.find((item) => item.id === params.slug);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4">
        <div className="rounded-2xl border border-white/10 bg-white/3 px-8 py-10 text-center backdrop-blur-xl">
          <h1 className="text-2xl font-semibold text-white">
            Project not found
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            The project you are looking for does not exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative overflow-hidden text-white">
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[120px]" />

      <SectionContainer id="project">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-3">
          <Button
            onClick={() => router.back()}
            variant="secondary"
            size="sm"
            className="rounded-xl border border-white/10 bg-white/3 hover:bg-white/6"
          >
            <ArrowLeft size={16} />
            Back
          </Button>

          <div className="flex ml-10 items-center gap-1 text-sm text-gray-500">
            <Link href="/" className="transition hover:text-white">
              Projects
            </Link>

            <ChevronRight size={16} />

            <span className="font-medium text-white">{project.title}</span>
          </div>
        </div>

        {/* Hero */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT */}
          <div className="space-y-8">
            {/* Title */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
                <Sparkles size={14} />
                Featured Project
              </div>

              <h1 className="max-w-3xl text-3xl font-black leading-tight tracking-wide md:text-5xl">
                {project.title}
              </h1>

              <p className="max-w-2xl text-sm leading-8 text-gray-400 md:text-base">
                {project.description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-md text-sm px-8 shadow-[0_0_40px_rgba(139,92,246,0.25)]"
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
                  size="lg"
                  className="rounded-md text-sm border-white/10 bg-white/3 px-8 hover:bg-white/6"
                >
                  <Github size={18} />
                  Github
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <StatCard
                icon={CodeXml}
                title="Technologies"
                value={project.techs.length}
              />

              <StatCard
                icon={Layers3}
                title="Key Features"
                value={project.features.length}
              />
            </div>

            {/* Technologies */}
            <div className="rounded-3xl border border-white/10 bg-white/3 p-6 backdrop-blur-xl md:p-8">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/15 border border-primary/20">
                  <Blocks size={20} className="text-primary" />
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    Technologies
                  </h2>
                  <p className="text-sm text-gray-500">
                    Tools and technologies used in this project
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.techs.map((item) => (
                  <TechItem key={item.name} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            {/* Preview Image */}
            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/3 backdrop-blur-2xl">
              {/* Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-60" />

              {/* Browser Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-5 py-4">
                {/* Dots */}
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-red-400" />
                  <span className="size-3 rounded-full bg-yellow-400" />
                  <span className="size-3 rounded-full bg-green-400" />
                </div>

                {/* Fake URL */}
                <div className="hidden md:flex items-center rounded-full border border-white/10 bg-black/20 px-4 py-1.5 text-xs text-gray-400">
                  {project.liveDemoUrl.replace("https://", "")}
                </div>

                <div className="w-10" />
              </div>

              {/* Image Container */}
              <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden p-4">
                {/* Background Blur */}
                <div className="absolute inset-0 bg-linear-to-b from-white/2 to-transparent" />

                {/* Decorative Blur */}
                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />

                {/* Main Image */}
                <div className="relative z-10 h-full w-full">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={1400}
                    height={900}
                    priority
                    className="
          h-full
          w-full
          object-contain
          rounded-2xl
          border
          border-white/10
          shadow-2xl
          transition-all
          duration-700
          group-hover:scale-[1.02]
        "
                  />
                </div>
              </div>

              {/* Bottom Gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/30 to-transparent" />
            </div>

            {/* Features */}
            <div className="rounded-3xl border border-white/10 bg-white/3 p-6 backdrop-blur-xl md:p-8">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-yellow-500/10 border border-yellow-500/20">
                  <Sparkles size={20} className="text-yellow-400" />
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    Key Features
                  </h2>
                  <p className="text-sm text-gray-500">
                    Main highlights of the project
                  </p>
                </div>
              </div>

              <ul className="space-y-5">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="group flex gap-4 rounded-2xl border border-transparent p-4 transition hover:border-white/10 hover:bg-white/3"
                  >
                    <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                      <PencilLine size={15} className="text-primary" />
                    </div>

                    <p className="text-sm leading-7 text-gray-300">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
};

export default ProjectPage;
