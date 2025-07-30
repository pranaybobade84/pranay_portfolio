import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import ProjectForm from "./ProjectForm";

import { toast } from "react-toastify";
import AddButton from "../../components/FixedButton";
import SectionHeading from "../../components/Heading";
import { ShimmerLoader } from "../../components/Loader";
import NotFoundMessage from "../../components/NotFoundMessage";
import {
  useAddProjectMutation,
  useDeleteProjectMutation,
  useGetAllProjectsQuery,
  useUpdateProjectMutation,
} from "../../endpoints/projects/projectEndpoint";
import Modal from "../../components/Modal";

const ManageProjects = () => {
  const [formType, setFormType] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [addProject] = useAddProjectMutation();
  const [deleteProject] = useDeleteProjectMutation();
  const [updateProject] = useUpdateProjectMutation();

  const {
    data: projects = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useGetAllProjectsQuery();

  const handleDelete = async (id) => {
    if (!id) return;

    try {
      const res = await deleteProject(id).unwrap();
      toast.success(res?.message || "Project deleted successfully");
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || "Failed to delete project.");
    }
  };

  const handleSubmit = async (formData) => {
    try {
      let res;
      if (formType === "edit" && selectedProject?._id) {
        res = await updateProject({
          id: selectedProject?._id,
        data:formData,
        }).unwrap();
      } else {
        res = await addProject(formData).unwrap();
      }

      if (res?.project) {
        toast.success(res?.message || "Success");
        setShowModal(false);
        setSelectedProject(null);
        refetch();
      }
    } catch (err) {
      toast.error(err?.data?.message || "Failed to submit project.");
    }
  };

  if (isLoading)
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {[...Array(4)].map((_, index) => (
          <ShimmerLoader key={index} />
        ))}
      </div>
    );
  // if (isError) return <NotFoundMessage message="Failed to load projects" />;

  return (
    <section className="p-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading>Manage Projects</SectionHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.length === 0 ? (
            <p className="text-gray-400">No projects added yet.</p>
          ) : (
            projects?.map((project) => (
              <div
                key={project._id || project.id}
                className="bg-[#111] p-4 rounded-xl border border-green-600/20 shadow-md"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold text-green-400">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <button
                      className="text-blue-400 hover:text-white cursor-pointer"
                      onClick={() => {
                        setFormType("edit");
                        setSelectedProject(project);
                        setShowModal(true);
                      }}
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(project._id || project.id)}
                      className="text-red-500 hover:text-white cursor-pointer"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-2">
                  {project.category} • {project.techStack?.join(", ")} •
                  {project.isFeatured ? " Featured" : ""}
                </p>
                {project.images?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Project ${idx}`}
                        className="w-16 h-16 object-cover rounded"
                      />
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
      <AddButton
        onClick={() => {
          setShowModal(true);
          setFormType("add");
          setSelectedProject(null);
        }}
      />

      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setSelectedProject(null);
        }}
        title={formType === "edit" ? "Edit Project" : "Add New Project"}
      >
        <ProjectForm
          onSubmit={handleSubmit}
          formType={formType}
          defaultValues={selectedProject}
        />
      </Modal>
    </section>
  );
};

export default ManageProjects;
