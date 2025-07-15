import React, { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import Modal from "../../components/Modal";
import SkillForm from "./SkillsForm";

const dummySkills = [
  {
    id: 1,
    name: "React",
    category: "Frontend",
    level: "Advanced",
    type: "library",
    progressPercent: 85,
    experienceInYears: 2,
  },
  {
    id: 2,
    name: "Node.js",
    category: "Backend",
    level: "Intermediate",
    type: "runtime",
    progressPercent: 70,
    experienceInYears: 1.5,
  },
];

const ManageSkills = () => {
  const [skills, setSkills] = useState(dummySkills);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  return (
    <section className="min-h-screen  text-white py-20 px-6 font-poppins relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-red-500">Manage Skills</h2>

        {/* Skills List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-[#111] p-4 rounded-xl border border-red-600/20 shadow-md"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-red-400">{skill.name}</h3>
                <div className="flex gap-2">
                  <button className="text-blue-400 hover:text-white">
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(skill.id)}
                    className="text-red-500 hover:text-white"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                {skill.category} • {skill.level} • {skill.progressPercent}% •{" "}
                {skill.experienceInYears} yrs
              </p>
            </div>
          ))}
        </div>
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
        <SkillForm />
      </Modal>
    </section>
  );
};

export default ManageSkills;
