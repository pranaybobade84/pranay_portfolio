import React, { useState } from "react";

const SkillForm = ({ onSubmit=()=>{} }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "Frontend",
    level: "Intermediate",
    isVisible: true,
    isFeatured: false,
    progressPercent: 70,
    type: "tool",
    experienceInYears: 0,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#111] p-6 rounded-xl border "
    >
      <div>
        <label className="block text-sm text-gray-400 mb-1">Skill Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-black border border-red-500/30 text-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-black border border-red-500/30 text-white"
        >
          <option>Frontend</option>
          <option>Backend</option>
          <option>Database</option>
          <option>DevOps</option>
          <option>Tools</option>
          <option>Others</option>
        </select>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Level</label>
        <select
          name="level"
          value={formData.level}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-black border border-red-500/30 text-white"
        >
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
          <option>Expert</option>
        </select>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Progress (%)</label>
        <input
          type="number"
          name="progressPercent"
          min="0"
          max="100"
          value={formData.progressPercent}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-black border border-red-500/30 text-white"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Type</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-black border border-red-500/30 text-white"
        >
          <option>language</option>
          <option>framework</option>
          <option>library</option>
          <option>tool</option>
          <option>other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1">Experience (Years)</label>
        <input
          type="number"
          step="0.1"
          name="experienceInYears"
          value={formData.experienceInYears}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-black border border-red-500/30 text-white"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="isVisible"
          checked={formData.isVisible}
          onChange={handleChange}
          className="accent-red-600"
        />
        <label className="text-sm text-gray-300">Visible</label>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="isFeatured"
          checked={formData.isFeatured}
          onChange={handleChange}
          className="accent-red-600"
        />
        <label className="text-sm text-gray-300">Featured</label>
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-500 px-6 py-2 rounded-md font-semibold text-white"
        >
          Save Skill
        </button>
      </div>
    </form>
  );
};

export default SkillForm;
