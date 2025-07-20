import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  useAddExperienceMutation,
  useEditExperienceMutation,
} from "../../../endpoints/Experience/experienceEndpoint";

const TextInput = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  ...rest
}) => (
  <div>
    <label className="text-sm text-gray-300">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-zinc-900 text-white p-3 rounded-lg border border-gray-700 focus:ring-1 focus:ring-red-600"
      {...rest}
    />
  </div>
);

const TextAreaInput = ({ label, name, value, onChange }) => (
  <div>
    <label className="text-sm text-gray-300">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={3}
      className="w-full bg-zinc-900 text-white p-3 rounded-lg border border-gray-700"
    />
  </div>
);

const SelectInput = ({ label, name, value, onChange, options }) => (
  <div>
    <label className="text-sm text-gray-300">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-zinc-900 text-white p-3 rounded-lg border border-gray-700"
    >
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const CheckboxInput = ({ label, name, checked, onChange }) => (
  <div className="flex items-center space-x-2">
    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      className="accent-red-600"
    />
    <label className="text-sm text-gray-300">{label}</label>
  </div>
);

const initialState = {
  companyName: "",
  position: "",
  employmentType: "Full-time",
  location: "",
  industry: "",
  startDate: "",
  endDate: "",
  currentlyWorking: false,
  description: "",
  techStack: [],
  achievements: [],
  website: "",
  isVisible: true,
};

const employmentOptions = ["Internship", "Full-time", "Part-time", "Contract"];

const ExperienceForm = ({ existingData = null, onClose } = {}) => {
  const [formData, setFormData] = useState(initialState);
  const [addExperience] = useAddExperienceMutation();
  const [editExperience] = useEditExperienceMutation();
  useEffect(() => {
    if (existingData) {
      setFormData({
        ...existingData,
        startDate: existingData.startDate?.slice(0, 10),
        endDate: existingData.endDate?.slice(0, 10),
      });
    }
  }, [existingData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleArrayChange = (e, key) => {
    const items = e.target.value.split(",").map((item) => item.trim());
    setFormData((prev) => ({ ...prev, [key]: items }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (existingData) {
        await editExperience({ id: existingData._id, ...formData }).unwrap();
        toast.success("Experience updated!");
      } else {
        await addExperience(formData).unwrap();
        toast.success("Experience added!");
      }
      onClose?.();
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto bg-[#111]   p-6 md:p-8 rounded-2xl shadow-xl space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
        />
        <SelectInput
          label="Employment Type"
          name="employmentType"
          value={formData.employmentType}
          onChange={handleChange}
          options={employmentOptions}
        />
        <TextInput
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <TextInput
          label="Industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
        />
        <TextInput
          label="Start Date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          type="date"
          required
        />
        <TextInput
          label="End Date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          type="date"
          disabled={formData.currentlyWorking}
        />
      </div>

      <CheckboxInput
        label="Currently Working"
        name="currentlyWorking"
        checked={formData.currentlyWorking}
        onChange={handleChange}
      />

      <TextAreaInput
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput
          label="Tech Stack (comma separated)"
          name="techStack"
          value={formData.techStack.join(", ")}
          onChange={(e) => handleArrayChange(e, "techStack")}
        />
        <TextInput
          label="Achievements (comma separated)"
          name="achievements"
          value={formData.achievements.join(", ")}
          onChange={(e) => handleArrayChange(e, "achievements")}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <TextInput
          label="Company Website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          type="url"
        />
        <CheckboxInput
          label="Visible on Profile"
          name="isVisible"
          checked={formData.isVisible}
          onChange={handleChange}
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition font-medium"
        >
          {existingData ? "Update Experience" : "Add Experience"}
        </button>
      </div>
    </form>
  );
};

export default ExperienceForm;
