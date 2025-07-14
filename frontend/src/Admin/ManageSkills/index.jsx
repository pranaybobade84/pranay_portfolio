import React, { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";

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
  const [formData, setFormData] = useState({
    name: "",
    category: "Frontend",
    level: "Intermediate",
    progressPercent: 70,
    experienceInYears: 0,
    type: "tool",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    const newSkill = {
      id: Date.now(),
      ...formData,
    };
    setSkills([...skills, newSkill]);
    setFormData({
      name: "",
      category: "Frontend",
      level: "Intermediate",
      progressPercent: 70,
      experienceInYears: 0,
      type: "tool",
    });
  };

  const handleDelete = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 font-poppins relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-red-500">Manage Skills</h2>

        <form
          onSubmit={handleAddSkill}
          className="bg-[#111] border border-red-600/20 p-6 rounded-xl shadow-md mb-10 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Skill Name"
              className="bg-black border border-red-500/30 px-4 py-2 rounded text-white"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <select
              name="category"
              className="bg-black border border-red-500/30 px-4 py-2 rounded text-white"
              value={formData.category}
              onChange={handleChange}
            >
              <option>Frontend</option>
              <option>Backend</option>
              <option>Database</option>
              <option>DevOps</option>
              <option>Tools</option>
              <option>Others</option>
            </select>

            <select
              name="level"
              className="bg-black border border-red-500/30 px-4 py-2 rounded text-white"
              value={formData.level}
              onChange={handleChange}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>Expert</option>
            </select>

            <select
              name="type"
              className="bg-black border border-red-500/30 px-4 py-2 rounded text-white"
              value={formData.type}
              onChange={handleChange}
            >
              <option>language</option>
              <option>framework</option>
              <option>library</option>
              <option>tool</option>
              <option>other</option>
            </select>

            <input
              type="number"
              name="progressPercent"
              min="0"
              max="100"
              placeholder="Progress %"
              className="bg-black border border-red-500/30 px-4 py-2 rounded text-white"
              value={formData.progressPercent}
              onChange={handleChange}
            />

            <input
              type="number"
              step="0.1"
              name="experienceInYears"
              placeholder="Experience in Years"
              className="bg-black border border-red-500/30 px-4 py-2 rounded text-white"
              value={formData.experienceInYears}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-500 px-6 py-2 rounded-md font-semibold"
          >
            Add Skill
          </button>
        </form>

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
    </section>
  );
};

export default ManageSkills;
