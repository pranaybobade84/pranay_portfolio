import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useGetAllProjectsQuery } from "../../endpoints/projects/projectEndpoint";

const ProjectsSection = () => {
  const { data = [] } = useGetAllProjectsQuery();
  return (
    <section className=" text-white py-28 px-6 font-poppins relative overflow-hidden">
      <div className="text-center mb-28">
        <h2 className="text-5xl md:text-7xl font-extrabold uppercase relative inline-block">
          Projects
          <span className="block w-full h-1 bg-gradient-to-r from-red-600 via-yellow-500 to-orange-400 mt-2 rounded-full"></span>
        </h2>
        <p className="text-gray-400 text-lg mt-4 italic">
          Clean code. Crazy deadlines. Some caffeine. All mine.
        </p>
      </div>

      <div className="flex flex-col gap-28 max-w-6xl mx-auto">
        {data?.map((project, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-10 group`}
          >
            <div className="relative w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg">
              <img
                src={project?.images?.[0]}
                alt={project.title}
                className="w-full h-72 md:h-96 object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end space-y-3">
                <div className="text-sm text-red-400 uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-white/10 border border-white/10 px-3 py-1 rounded-full text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center md:text-left w-full md:w-1/2">
              <h3 className="text-3xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex gap-6 justify-center md:justify-start mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-400 hover:text-yellow-400 text-sm flex items-center gap-1"
                  >
                    Code <ArrowUpRight size={16} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-400 hover:text-yellow-400 text-sm flex items-center gap-1"
                  >
                    Live <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
