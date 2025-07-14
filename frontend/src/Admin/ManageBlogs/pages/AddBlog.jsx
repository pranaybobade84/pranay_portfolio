import React, { useState } from "react";
import { ArrowLeftCircle, Upload } from "lucide-react";
import { Link } from "react-router-dom";

const AddBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    slug: "",
    content: "",
    coverImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setBlog((prev) => ({ ...prev, coverImage: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Blog:", blog);
    // Handle API POST here
  };

  return (
    <section className="text-white font-poppins w-full max-w-3xl mx-auto bg-[#111] border border-red-600/20 p-8 rounded-xl shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Add New Blog</h2>
        <Link
          to="/admin/blogs"
          className="flex items-center gap-1 text-red-400 hover:text-red-300 transition text-sm"
        >
          <ArrowLeftCircle size={18} />
          Back to Blogs
        </Link>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">Blog Title</label>
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleChange}
            placeholder="Enter blog title"
            className="w-full bg-black border border-gray-600 text-white rounded-md px-4 py-2 focus:outline-none focus:border-red-500"
            required
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">Slug</label>
          <input
            type="text"
            name="slug"
            value={blog.slug}
            onChange={handleChange}
            placeholder="slug-example"
            className="w-full bg-black border border-gray-600 text-white rounded-md px-4 py-2 focus:outline-none focus:border-red-500"
            required
          />
        </div>

        {/* Content */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">Content</label>
          <textarea
            name="content"
            value={blog.content}
            onChange={handleChange}
            placeholder="Write your blog content here..."
            rows="6"
            className="w-full bg-black border border-gray-600 text-white rounded-md px-4 py-2 focus:outline-none focus:border-red-500"
            required
          ></textarea>
        </div>

        {/* Cover Image */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">Cover Image</label>
          <div className="flex items-center gap-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-red-600 file:text-white hover:file:bg-red-700 transition"
            />
            <Upload size={20} className="text-red-400" />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-2 rounded-md transition"
          >
            Publish Blog
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddBlog;
