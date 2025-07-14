import React, { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";

const blogs = [
  {
    title: "Mastering the MERN Stack in 2025",
    author: "Pranay",
    tags: ["MERN", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60",
    date: "2025-07-08",
    slug: "mastering-mern-2025",
  },
  {
    title: "Building Real-Time Apps with Socket.IO",
    author: "Pranay",
    tags: ["Socket.IO", "Real-time"],
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60",
    date: "2025-07-01",
    slug: "realtime-apps-socketio",
  },
];

const BlogMainPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="min-h-screen  text-white py-20 px-6 font-poppins relative overflow-hidden">
     

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase inline-block relative">
          Dev Blogs
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-red-600 via-red-400 to-yellow-400 rounded-full" />
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto italic">
          Real code, real struggle, real growth — welcome to my dev journal.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {blogs.map((blog, i) => (
          <div
            key={i}
            className="bg-[#111] border border-red-600/20 rounded-xl overflow-hidden shadow-lg hover:shadow-red-600/30 transition-shadow flex flex-col"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-52 w-full object-cover"
            />
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <p className="text-xs text-red-500 uppercase">
                  {blog.tags.join(", ")}
                </p>
                <h3 className="text-xl font-semibold text-white">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500">
                  By {blog.author} — {new Date(blog.date).toDateString()}
                </p>
              </div>
              <Link
                to={`/blog/${blog.slug}`}
                className="mt-4 text-red-400 hover:text-yellow-400 inline-flex items-center gap-1 text-sm font-medium"
              >
                Read More <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-500 text-white p-4 rounded-full shadow-lg transition duration-300 flex items-center justify-center"
        title="Add Blog"
      >
        <Plus size={24} />
      </button>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Add New Blog"
      >
        <h1>FORM</h1>
      </Modal>
    </section>
  );
};

export default BlogMainPage;
