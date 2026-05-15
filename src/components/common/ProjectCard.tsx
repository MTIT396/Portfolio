"use client";

import { ArrowRight, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Button from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Avatars from "./Avatars";
import { Project } from "@/types/project.type";

const ProjectCard = ({ project }: { project: Project }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/project/${project.id}`)}
      className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col cursor-pointer hover:-translate-y-2 duration-300"
    >
      <div className="h-46 w-full relative rounded-lg overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          className="object-cover hover:scale-105 transition-transform duration-300"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="space-y-2">
        <h1 className="text-lg font-semibold mt-4 text-white">
          {project.title}
        </h1>

        <p className="font-opensans line-clamp-2 text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>

        <Avatars items={project.techs} />
      </div>

      <div className="flex items-center justify-between mt-4">
        {/* Live Demo */}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={project.liveDemoUrl}
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center text-blue-400 hover:text-blue-500 transition text-sm gap-x-2"
        >
          Live Demo
          <SquareArrowOutUpRight size={16} />
        </Link>

        {/* Details */}
        <Link
          href={`/project/${project.id}`}
          onClick={(e) => e.stopPropagation()}
        >
          <Button variant="thirdary" size="md" className="text-sm">
            Details
            <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
