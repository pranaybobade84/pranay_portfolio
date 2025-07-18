import React from "react";
import SkillCard from "./Card/index";
import { useGetAllSkillsQuery } from "../../endpoints/skills/skillsEndpoint";
import NotFoundMessage from "../../components/NotFoundMessage";

const SkillsSection = () => {
  const {
    data: skills = [],
    isLoading,
    isError,
    error,
  } = useGetAllSkillsQuery();

  const sortedSkills = skills
    ?.filter((skill) => skill.isVisible)
    ?.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));

  if( !isLoading && !isError && sortedSkills?.length === 0){
    return (
        <NotFoundMessage message="SKILLS NOT FOUND" />
    )
  }
  return (
    <section className="min-h-screen text-white py-20 px-6 font-poppins relative overflow-hidden">
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
        {isLoading && (
          <div className="col-span-full text-center text-xl animate-pulse">
            Loading skills...
          </div>
        )}

        {isError && (
          <div className="col-span-full text-center text-red-500">
            {error?.data?.message ||
              "Something went wrong while fetching skills."}
          </div>
        )}

        {!isLoading &&
          !isError &&
          sortedSkills?.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
      </div>
    </section>
  );
};

export default SkillsSection;
