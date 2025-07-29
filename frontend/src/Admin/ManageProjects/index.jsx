import React, { useState } from "react";
import { Pencil, Trash2, Github, ExternalLink } from "lucide-react";
import SectionHeading from "../../components/Heading";
import AddButton from "../../components/FixedButton";
import Modal from "../../components/Modal";
import ProjectForm from "./ProjectForm";
import {
  useGetAllProjectsQuery,
  useDeleteProjectMutation,
} from "../../endpoints/projects/projectEndpoint";

const ManageProjects = () => {
  const { data: projects = [], isLoading } = useGetAllProjectsQuery();
  const [deleteProject] = useDeleteProjectMutation();

  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) {
      try {
        await deleteProject(id).unwrap();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="p-4 md:p-6">
      <SectionHeading>Manage Projects</SectionHeading>

      {isLoading ? (
        <p className="text-gray-300 text-center">Loading...</p>
      ) : projects.length === 0 ? (
        <div className="text-center text-gray-400 py-16">
          No projects found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-[#111] border border-red-600/20 rounded-xl p-4 shadow-md"
            >
              <h3 className="text-lg font-semibold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-xs text-red-400 mb-2">{project.category}</p>
              <p className="text-sm text-gray-300 line-clamp-3 mb-3">
                {project.description}
              </p>
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
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => {
                    setEditing(project);
                    setShowModal(true);
                  }}
                  className="p-2 rounded hover:bg-red-700/20"
                >
                  <Pencil className="w-4 h-4 text-yellow-400" />
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="p-2 rounded hover:bg-red-700/20"
                >
                  <Trash2 className="w-4 h-4 text-red-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <AddButton
        title="Add Project"
        onClick={() => {
          setEditing(null);
          setShowModal(true);
        }}
      />

      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setEditing(null);
        }}
        title={editing ? "Edit Project" : "Add New Project"}
      >
        <ProjectForm onClose={() => setShowModal(false)} editing={editing} />
      </Modal>
    </div>
  );
};

export default ManageProjects;
