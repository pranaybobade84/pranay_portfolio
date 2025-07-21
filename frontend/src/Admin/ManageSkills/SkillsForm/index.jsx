import React, { useEffect, useState } from "react";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import CheckboxInput from "../../components/CheckBox";

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
}) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "Frontend",
    level: "Intermediate",
    isVisible: true,
    isFeatured: false,
    progressPercent: 0,
    type: "tool",
    experienceInYears: 0,
  });

  useEffect(() => {
    if (formType === "edit") {
      setFormData(defaultValues);
    }
  }, [formType, defaultValues]);

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
      className="w-full mx-auto bg-[#111] p-6 md:p-8 rounded-2xl shadow-xl space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput
          label="Skill Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <SelectInput
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          options={categoryOptions}
        />
        <SelectInput
          label="Level"
          name="level"
          value={formData.level}
          onChange={handleChange}
          options={levelOptions}
        />
        <TextInput
          label="Progress (%)"
          name="progressPercent"
          value={formData.progressPercent}
          onChange={handleChange}
          type="number"
          min="0"
          max="100"
        />
        <SelectInput
          label="Type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          options={typeOptions}
        />
        <TextInput
          label="Experience (Years)"
          name="experienceInYears"
          value={formData.experienceInYears}
          onChange={handleChange}
          type="number"
          step="0.1"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <CheckboxInput
          label="Visible"
          name="isVisible"
          checked={formData.isVisible}
          onChange={handleChange}
        />
        <CheckboxInput
          label="Featured"
          name="isFeatured"
          checked={formData.isFeatured}
          onChange={handleChange}
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition font-medium"
        >
          {formType === "edit" ? "Update Skill" : "Add Skill"}
        </button>
      </div>
    </form>
  );
};

export default SkillForm;
