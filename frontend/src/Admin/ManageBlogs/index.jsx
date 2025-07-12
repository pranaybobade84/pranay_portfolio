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
    <div className="text-white font-poppins p-4 max-w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Manage Blogs</h2>
        <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-sm px-4 py-2 rounded-md font-semibold flex items-center gap-2 shadow-md transition">
          <Plus size={18} />
          Add Blog
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-red-600/20 bg-[#111] shadow-md">
        <table className="w-full min-w-[500px] text-sm text-left text-gray-300">
          <thead className="uppercase text-red-400 text-xs border-b border-red-600/20 sticky top-0 bg-[#111] z-10">
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
                <td className="px-4 py-3 whitespace-nowrap">{blog.author}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {new Date(blog.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex flex-wrap gap-3 items-center">
                    <button title="View" className="text-yellow-400 hover:text-white transition">
                      <Eye size={18} />
                    </button>
                    <button title="Edit" className="text-blue-400 hover:text-white transition">
                      <Pencil size={18} />
                    </button>
                    <button title="Delete" className="text-red-500 hover:text-white transition">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBlogs;
