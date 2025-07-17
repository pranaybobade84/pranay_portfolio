import React, { useEffect, useState } from "react";

const categoryOptions = [
  "Frontend",
  "Backend",
  "Database",
  "DevOps",
  "Tools",
  "Others",
];
const levelOptions = ["Beginner", "Intermediate", "Advanced", "Expert"];
const typeOptions = ["language", "framework", "library", "tool", "other"];

const SkillForm = ({
  onSubmit = () => {},
  formType = "",
  defaultValues = {},
} = {}) => {
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

  useEffect(() => {
    if (formType === "edit") {
      setFormData(defaultValues);
    }
  }, [formType, defaultValues]);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#111] py-4 rounded-xl "
    >
      <div>
        <label className="block text-xs text-gray-400 mb-1">Skill Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-1.5 rounded bg-black border border-red-500/30 text-white text-sm"
          required
        />
      </div>

      <div>
        <label className="block text-xs text-gray-400 mb-1">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-3 py-1.5 rounded bg-black border border-red-500/30 text-white text-sm"
        >
          {categoryOptions.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs text-gray-400 mb-1">Level</label>
        <select
          name="level"
          value={formData.level}
          onChange={handleChange}
          className="w-full px-3 py-1.5 rounded bg-black border border-red-500/30 text-white text-sm"
        >
          {levelOptions.map((lvl) => (
            <option key={lvl} value={lvl}>
              {lvl}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-xs text-gray-400 mb-1">Progress (%)</label>
        <input
          type="number"
          name="progressPercent"
          min="0"
          max="100"
          value={formData.progressPercent}
          onChange={handleChange}
          className="w-full px-3 py-1.5 rounded bg-black border border-red-500/30 text-white text-sm"
        />
      </div>

      <div>
        <label className="block text-xs text-gray-400 mb-1">Type</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full px-3 py-1.5 rounded bg-black border border-red-500/30 text-white text-sm"
        >
          {typeOptions.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs text-gray-400 mb-1">
          Experience (Years)
        </label>
        <input
          type="number"
          step="0.1"
          name="experienceInYears"
          value={formData.experienceInYears}
          onChange={handleChange}
          className="w-full px-3 py-1.5 rounded bg-black border border-red-500/30 text-white text-sm"
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
          className="w-full bg-red-600 hover:bg-red-500 px-6 py-2 rounded-md font-semibold text-white transition"
        >
          Save Skill
        </button>
      </div>
    </form>
  );
};

export default SkillForm;
