import React, { useState } from "react";
import { Pencil, Trash2, CheckCircle2, EyeOff, Plus } from "lucide-react";
import { toast } from "react-toastify";
import AddButton from "../../components/FixedButton";
import Modal from "../../components/Modal";
import SectionHeading from "../../components/Heading";
import ExperienceForm from "./ExperienceForm";
import {
  useGetAllExperienceQuery,
  useDeleteExperienceMutation,
} from "../../endpoints/Experience/experienceEndpoint";
// import Loader from "../../components/Loader";
// import ErrorMessage from "../../components/ErrorMessage";

const ManageExperience = () => {
  const { data, isLoading, isError } = useGetAllExperienceQuery();
  const [deleteExperience] = useDeleteExperienceMutation();
  const [editing, setEditing] = useState(null);
  const [showModal, setShowModal] = useState(false);
  console.log("eidt", editing);

  const handleDelete = async (id) => {
    try {
      await deleteExperience(id).unwrap();
      toast.success("Experience deleted");
    } catch (error) {
      toast.error("Failed to delete experience");
    }
  };

  // if (isLoading) return <Loader />;
  // if (isError) return <ErrorMessage message="Failed to load experiences" />;
  return (
    <div className="p-4 relative">
      <SectionHeading>Manage Experience</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data?.experiences?.map((exp) => (
          <div
            key={exp._id}
            className="bg-[#1a1a1a] text-white p-5 rounded-2xl border border-red-500/20 shadow hover:shadow-red-500/30 transition-shadow duration-300"
          >
            <div className="flex justify-between items-start flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-red-400">
                  {exp.position}
                </h3>
                <p className="text-sm text-gray-300 mb-1 truncate">
                  @ {exp.companyName}
                </p>
                <p className="text-sm text-gray-400">
                  {exp.startDate.slice(0, 10)} to{" "}
                  {exp.currentlyWorking ? "Present" : exp.endDate?.slice(0, 10)}
                </p>
                <p className="text-sm text-gray-400">
                  {exp.employmentType} - {exp.location}
                </p>
              </div>

              <div className="flex gap-3 shrink-0 self-start sm:self-auto">
                <button onClick={() => setEditing(exp)}>
                  <Pencil className="w-5 h-5 text-blue-400 hover:text-blue-500" />
                </button>
                <button onClick={() => handleDelete(exp._id)}>
                  <Trash2 className="w-5 h-5 text-red-400 hover:text-red-600" />
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-300 mt-3 line-clamp-4">
              {exp.description}
            </p>

            {exp.techStack?.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-200 mb-1">
                  Tech Stack:
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-red-600/20 text-red-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {exp.achievements?.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-200 mb-1">
                  Achievements:
                </p>
                <ul className="list-disc pl-5 text-xs text-green-400 space-y-1">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap justify-between items-center mt-4 gap-3">
              {exp.website && (
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-xs hover:underline break-all"
                >
                  {exp.website}
                </a>
              )}

              <button
                // onClick={() => handleToggleVisibility(exp._id, exp.isVisible)}
                className={`text-xs flex items-center gap-1 px-3 py-1 rounded-full transition-all duration-300 ${
                  exp.isVisible
                    ? "bg-green-700 hover:bg-green-800"
                    : "bg-gray-600 hover:bg-gray-700"
                }`}
              >
                {exp.isVisible ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" /> Visible
                  </>
                ) : (
                  <>
                    <EyeOff className="w-4 h-4" /> Hidden
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      <AddButton
        onClick={() => {
          setShowModal(true);
        }}
      />

      <Modal
        isOpen={showModal || !!editing}
        onClose={() => {
          setShowModal(false);
          setEditing(null);
        }}
        title={editing ? "Edit Experience" : "Add Experience"}
      >
        <ExperienceForm
          onClose={() => {
            setShowModal(false);
            setEditing(null);
          }}
          existingData={editing}
        />
      </Modal>
    </div>
  );
};

export default ManageExperience;
