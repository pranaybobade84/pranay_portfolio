import React, { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import Modal from "../../components/Modal";
import SkillForm from "./SkillsForm";
import {
  useAddSkillMutation,
  useDeleteSkillMutation,
  useGetAllSkillsQuery,
  useUpdateSkillMutation,
} from "../../endpoints/skills/skillsEndpoint";
import { toast } from "react-toastify";
import AddButton from "../../components/FixedButton";
import SectionHeading from "../../components/Heading";
import { ShimmerLoader } from "../../components/Loader";
import NotFoundMessage from "../../components/NotFoundMessage";

const ManageSkills = () => {
  const [formType, setFormType] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [addSkills] = useAddSkillMutation();
  const [deleteSkill] = useDeleteSkillMutation();
  const [updateSkill] = useUpdateSkillMutation();

  const {
    data: skills = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useGetAllSkillsQuery();

  const handleDelete = async (id) => {
    if (!id) return;

    try {
      const res = await deleteSkill(id).unwrap();
      toast.success(res?.message || "Skill deleted successfully");
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || "Failed to delete skill.");
    }
  };

  const handleSubmit = async (formData) => {
    try {
      let res;
      if (formType === "edit" && selectedSkill?._id) {
        res = await updateSkill({
          id: selectedSkill?._id,
          ...formData,
        }).unwrap();
      } else {
        res = await addSkills(formData).unwrap();
      }

      if (res?.skill) {
        toast.success(res?.message || "Success");
        setShowModal(false);
        setSelectedSkill(null);
        refetch();
      }
    } catch (err) {
      toast.error(err?.data?.message || "Failed to submit skill.");
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
  if (isError) return <NotFoundMessage message="Failed to load experiences" />;

  return (
    <section className="p-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading>Manage Skills</SectionHeading>

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
                      <button
                        className="text-blue-400 hover:text-white cursor-pointer"
                        onClick={() => {
                          setFormType("edit");
                          setSelectedSkill(skill);
                          setShowModal(true);
                        }}
                      >
                        <Pencil size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(skill._id || skill.id)}
                        className="text-red-500 hover:text-white cursor-pointer"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    {skill.category} • {skill.level} • {skill.progressPercent}%
                    • {skill.experienceInYears} yrs
                  </p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
      <AddButton
        onClick={() => {
          setShowModal(true);
          setFormType("add");
        }}
      />
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setSelectedSkill(null);
        }}
        title={formType === "edit" ? "Edit Skill" : "Add New Skill"}
      >
        <SkillForm
          onSubmit={handleSubmit}
          formType={formType}
          defaultValues={selectedSkill}
        />
      </Modal>
    </section>
  );
};

export default ManageSkills;
