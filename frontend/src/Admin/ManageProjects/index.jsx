import React, { useState } from "react";
import { Pencil, Trash2, ExternalLink, Github } from "lucide-react";
import AddButton from "../../components/FixedButton";
import SectionHeading from "../../components/Heading";

// Dummy Data – Replace with your actual API data
const dummyProjects = [
  {
    _id: "1",
    title: "Portfolio Website",
    description:
      "My personal developer portfolio built using React and Tailwind CSS.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/pranay/portfolio",
    liveLink: "https://pranaybobade.dev",
    images: [],
    videoDemo: "",
    category: "Personal",
    isFeatured: true,
    isVisible: true,
  },
  {
    _id: "2",
    title: "Student Management System API",
    description:
      "RESTful API for managing students and courses using Node.js, Express, and MongoDB.",
    techStack: ["Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/pranay/student-api",
    liveLink: "",
    category: "Internship",
    isFeatured: false,
    isVisible: true,
  },
];

const ManageProjects = () => {
  const [projects, setProjects] = useState(dummyProjects);
  const [editing, setEditing] = useState(null);

  const handleDelete = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (confirm) {
      setProjects((prev) => prev.filter((proj) => proj._id !== id));
    }
  };

  return (
    <div className="p-4 md:p-6">
      <SectionHeading>Manage Projects</SectionHeading>
      {projects.length === 0 ? (
        <div className="text-center text-gray-400 py-16">
          No projects found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-[#111] border border-red-600/20 rounded-xl p-4 shadow-md hover:shadow-red-500/40 transition-shadow flex flex-col"
            >
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-red-400 font-medium mb-2">
                  {project.category}
                </p>
                <p className="text-sm text-gray-300 line-clamp-3 mb-3">
                  {project.description}
                </p>

                {project.techStack?.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded bg-red-700/30 text-red-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-4 mt-auto text-sm">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-400 hover:underline"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-green-400 hover:underline"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setEditing(project)}
                  className="p-2 rounded hover:bg-red-700/20 transition-colors"
                >
                  <Pencil className="w-4 h-4 text-yellow-400" />
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="p-2 rounded hover:bg-red-700/20 transition-colors"
                >
                  <Trash2 className="w-4 h-4 text-red-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <AddButton title="Add Project" onClick={() => setEditing({})} />
    </div>
  );
};

export default ManageProjects;
