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
    <div className="text-white font-poppins">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold">Manage Blogs</h2>
        <button className="bg-red-600 hover:bg-red-500 text-sm px-4 py-2 rounded-md font-semibold flex items-center gap-2">
          <Plus size={18} />
          Add Blog
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-red-600/20 text-sm">
          <thead className="bg-[#111] text-red-400 uppercase">
            <tr>
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">Author</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyBlogs.map((blog) => (
              <tr key={blog.id} className="border-t border-red-600/10 hover:bg-[#111]">
                <td className="px-4 py-2">{blog.title}</td>
                <td className="px-4 py-2">{blog.author}</td>
                <td className="px-4 py-2">
                  {new Date(blog.date).toLocaleDateString("en-IN")}
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <button className="text-yellow-400 hover:text-white">
                    <Eye size={18} />
                  </button>
                  <button className="text-blue-400 hover:text-white">
                    <Pencil size={18} />
                  </button>
                  <button className="text-red-500 hover:text-white">
                    <Trash2 size={18} />
                  </button>
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
