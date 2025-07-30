import React, { useEffect, useRef, useState } from "react";
import TextInput from "../../components/TextInput";
import CheckboxInput from "../../components/CheckBox";

const categoryOptions = [
  "Personal",
  "Freelance",
  "Internship",
  "Client",
  "Other",
];

const ProjectForm = ({
  onSubmit = () => {},
  formType = "create",
  defaultValues = {},
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: [],
    githubLink: "",
    liveLink: "",
    images: [],
    videoDemo: "",
    category: "Personal",
    isFeatured: false,
    isVisible: true,
  });

  const [imagePreviews, setImagePreviews] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (formType === "edit") {
      setFormData({ ...defaultValues });
      setImagePreviews(defaultValues.images || []);
    }
  }, [formType, defaultValues]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleTechStackChange = (e) => {
    const stack = e.target.value.split(",").map((item) => item.trim());
    setFormData((prev) => ({ ...prev, techStack: stack }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setFormData((prev) => ({ ...prev, images: files }));
    setImagePreviews(previews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("githubLink", formData.githubLink);
    data.append("liveLink", formData.liveLink);
    data.append("videoDemo", formData.videoDemo);
    data.append("category", formData.category);
    data.append("isFeatured", formData.isFeatured);
    data.append("isVisible", formData.isVisible);

    formData.techStack.forEach((item) => data.append("techStack[]", item));

    formData.images.forEach((file) => data.append("images", file));

    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto bg-[#111] p-6 md:p-8 rounded-2xl shadow-xl space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          type="select"
          options={categoryOptions}
        />
        <TextInput
          label="GitHub Link"
          name="githubLink"
          value={formData.githubLink}
          onChange={handleChange}
        />
        <TextInput
          label="Live Link"
          name="liveLink"
          value={formData.liveLink}
          onChange={handleChange}
        />
        <TextInput
          label="Tech Stack (comma separated)"
          name="techStack"
          value={formData.techStack.join(", ")}
          onChange={handleTechStackChange}
        />
        <TextInput
          label="Video Demo Link"
          name="videoDemo"
          value={formData.videoDemo}
          onChange={handleChange}
        />
      </div>

      <TextInput
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        textarea
        rows={4}
        required
      />

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Upload Images
        </label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          ref={fileInputRef}
          className="bg-gray-800 text-white p-2 rounded-md w-full"
        />
        {imagePreviews.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-4">
            {imagePreviews.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`preview-${idx}`}
                className="w-32 h-32 object-cover rounded-lg border"
              />
            ))}
          </div>
        )}
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
          {formType === "edit" ? "Update Project" : "Add Project"}
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
