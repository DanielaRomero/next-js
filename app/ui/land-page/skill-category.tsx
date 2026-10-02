import React from "react";
import TechChip from "./tech-chip";

type SkillCategoryProps = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
};

export default function SkillCategory({
  title,
  icon,
  skills,
}: SkillCategoryProps) {
  return (
    <div>
      <div className="flex items-center gap-1 mb-4">
        <div className="text-brand-teal">{icon}</div>
        <h3 className="text-lg font-bold text-gray-800 md:text-xl my-4">
          {title}
        </h3>
      </div>
      <span className="block h-1 w-1/2 bg-brand-teal my-2"></span>
      <ul className="grid grid-cols-1 gap-2 xl:grid-cols-2 md:gap-4">
        {skills.map((skill) => (
          <TechChip key={skill} name={skill} variant="skills" />
        ))}
      </ul>
    </div>
  );
}
