import React from "react";
import TechChip from "./tech-chip";

type ProjectCardProps = {
  imageUrl: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string[];
};

export default function ProjectCard({
  imageUrl,
  icon,
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        {icon}
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{description}</p>
        <ul className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <TechChip key={tech} name={tech} variant="projects" />
          ))}
        </ul>
      </div>
    </div>
  );
}
