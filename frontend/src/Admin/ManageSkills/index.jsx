import React, { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import Modal from "../../components/Modal";
import SkillForm from "./SkillsForm";
import {
  useAddSkillMutation,
  useGetAllSkillsQuery,
} from "../../endpoints/skills/skillsEndpoint";
import { toast } from "react-toastify";

const ManageSkills = () => {
  const [showModal, setShowModal] = useState(false);
  const [addSkills] = useAddSkillMutation();

  const {
    data:skills=[],
    isLoading,
    isError,
    error,
    refetch,
  } = useGetAllSkillsQuery();


  const handleDelete = (id) => {
  };

  const handleSubmit = async (formData) => {
    try {
      const res = await addSkills(formData).unwrap();
      if (res?.skill) {
        toast.success(res?.message || "Added successfully");
        setShowModal(false);
      }
    } catch (err) {
      toast.error(err?.data?.message || "Failed to add skill.");
    }
  };

  return (
    <section className="min-h-screen text-white py-20 px-6 font-poppins relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-red-500">Manage Skills</h2>

        {isLoading && (
          <p className="text-gray-300 text-center py-10">Loading skills...</p>
        )}

        {isError && (
          <div className="text-center text-red-500 py-10">
            <p>Error loading skills: {error?.data?.message || error?.error}</p>
            <button
              onClick={refetch}
              className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded"
            >
              Retry
            </button>
          </div>
        )}

        {!isLoading && !isError && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills?.length === 0 ? (
              <p className="text-gray-400">No skills added yet.</p>
            ) : (
              skills?.map((skill) => (
                <div
                  key={skill._id || skill.id}
                  className="bg-[#111] p-4 rounded-xl border border-red-600/20 shadow-md"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-red-400">
                      {skill.name}
                    </h3>
                    <div className="flex gap-2">
                      <button className="text-blue-400 hover:text-white">
                        <Pencil size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(skill._id || skill.id)}
                        className="text-red-500 hover:text-white"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    {skill.category} • {skill.level} •{" "}
                    {skill.progressPercent}% • {skill.experienceInYears} yrs
                  </p>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-500 text-white p-4 rounded-full shadow-xl z-50"
        title="Add Skill"
      >
        <Plus />
      </button>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Add New Skill"
      >
        <SkillForm onSubmit={handleSubmit} />
      </Modal>
    </section>
  );
};

export default ManageSkills;
