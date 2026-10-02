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
        <div className="flex items-center gap-1 mb-4">
          <div className="text-brand-navy">{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p>{description}</p>
        <ul className="flex justify-center gap-2 mt-2">
          {technologies.map((tech) => (
            <TechChip key={tech} name={tech} variant="projects" />
          ))}
        </ul>
      </div>
    </div>
  );
}
