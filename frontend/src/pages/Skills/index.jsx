import React from "react";
import SkillCard from "./Card/index";

const skills = [
  {
    name: "JavaScript",
    category: "Frontend",
    level: "Expert",
    progressPercent: 90,
  },
  {
    name: "React",
    category: "Frontend",
    level: "Advanced",
    progressPercent: 85,
  },
  {
    name: "Node.js",
    category: "Backend",
    level: "Advanced",
    progressPercent: 80,
  },
  {
    name: "MongoDB",
    category: "Database",
    level: "Intermediate",
    progressPercent: 75,
  },
  { name: "Git", category: "Tools", level: "Advanced", progressPercent: 88 },
  {
    name: "Docker",
    category: "DevOps",
    level: "Beginner",
    progressPercent: 40,
  },
];

const SkillsSection = () => {
  return (
    <section className="min-h-screen  text-white py-20 px-6 font-poppins relative overflow-hidden">

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase inline-block relative">
          Skills
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-red-600 via-red-400 to-yellow-400 rounded-full"></span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto italic">
          Not just tools — these are my weapons of choice.
        </p>
      </div>

      <div className="grid gap-10 max-w-6xl mx-auto relative z-10 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
