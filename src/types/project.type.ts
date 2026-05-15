import { TechIcon } from "./type.type";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveDemoUrl: string;
  techs: TechIcon[];
  features: string[];
}
