import React from "react";
import { Pencil, Trash2, Eye, Plus } from "lucide-react";

const dummyBlogs = [
  {
    id: 1,
    title: "Mastering the MERN Stack in 2025",
    author: "Pranay",
    date: "2025-07-08",
    slug: "mastering-mern-2025",
  },
  {
    id: 2,
    title: "Building Real-Time Apps with Socket.IO",
    author: "Pranay",
    date: "2025-07-01",
    slug: "realtime-apps-socketio",
  },
];

const ManageBlogs = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 font-poppins relative overflow-hidden">
      {/* Ambient Blurs */}
      <div className="absolute w-[300px] h-[300px] bg-red-600 blur-[120px] opacity-30 rounded-full top-10 left-10" />
      <div className="absolute w-[200px] h-[200px] bg-red-700 blur-[100px] opacity-40 rounded-full bottom-10 right-10" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight relative inline-block">
              Manage Blogs
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-red-600 to-yellow-400 rounded-full" />
            </h2>
            <p className="text-gray-400 mt-2 text-sm italic">
              Edit, view, or delete your published content.
            </p>
          </div>

          <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-sm px-5 py-2.5 rounded-md font-semibold flex items-center gap-2 shadow-md transition">
            <Plus size={18} />
            Add Blog
          </button>
        </div>

        {/* Table Scroll Container */}
        <div className="rounded-lg border border-red-600/20 bg-[#111] shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm text-left text-gray-300">
              <thead className="uppercase text-red-400 text-xs border-b border-red-600/20 bg-[#111] sticky top-0 z-10">
                <tr>
                  <th className="px-4 py-3 whitespace-nowrap">Title</th>
                  <th className="px-4 py-3 whitespace-nowrap">Author</th>
                  <th className="px-4 py-3 whitespace-nowrap">Date</th>
                  <th className="px-4 py-3 whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                {dummyBlogs.map((blog) => (
                  <tr
                    key={blog.id}
                    className="border-b border-red-600/10 hover:bg-red-600/10 transition"
                  >
                    <td className="px-4 py-3 max-w-[200px] truncate">{blog.title}</td>
                    <td className="px-4 py-3">{blog.author}</td>
                    <td className="px-4 py-3">
                      {new Date(blog.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-3">
                        <button
                          title="View"
                          className="text-yellow-400 hover:text-white transition"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          title="Edit"
                          className="text-blue-400 hover:text-white transition"
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          title="Delete"
                          className="text-red-500 hover:text-white transition"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {dummyBlogs.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center text-gray-500 py-6 italic">
                      No blogs found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageBlogs;
  