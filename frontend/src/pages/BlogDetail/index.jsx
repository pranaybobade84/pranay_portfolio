import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Heart, MessageSquare } from "lucide-react";

const dummyBlog = {
  title: "Mastering the MERN Stack in 2025",
  author: "Pranay",
  date: "2025-07-08",
  image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2d8ZW58MHx8MHx8fDA%3D",
  content: `## Why MERN?\nMERN is powerful because:\n\n- Full JavaScript stack\n- Scalable architecture\n- Huge community support\n\n**Code Sample:**\n\`\`\`js\nconst express = require('express');\nconst app = express();\napp.listen(3000);\n\`\`\`\n\n> The stack that made backend feel like frontend.`,
  likes: 12,
  comments: [
    { user: "DevUser99", text: "🔥 Loved the stack explanation!" },
    { user: "BugHunter", text: "Can confirm, MERN = caffeine + chaos ☕" },
  ],
};

const BlogDetailPage = () => {
  const [likes, setLikes] = useState(dummyBlog.likes);
  const [comments, setComments] = useState(dummyBlog.comments);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => setLikes((prev) => prev + 1);
  const handleComment = () => {
    if (!newComment.trim()) return;
    setComments([...comments, { user: "You", text: newComment }]);
    setNewComment("");
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 font-poppins relative overflow-hidden">
      {/* Ambient Blurs */}
      <div className="absolute w-[300px] h-[300px] bg-red-500 blur-[120px] opacity-30 rounded-full top-10 left-10" />
      <div className="absolute w-[200px] h-[200px] bg-red-700 blur-[100px] opacity-40 rounded-full bottom-10 right-10" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Blog Image */}
        <img
          src={dummyBlog.image}
          alt={dummyBlog.title}
          className="w-full h-64 md:h-96 object-cover rounded-xl mb-8 shadow-md"
        />

        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {dummyBlog.title}
        </h1>
        <p className="text-gray-400 text-sm mb-8">
          By {dummyBlog.author} • {new Date(dummyBlog.date).toDateString()}
        </p>

        {/* Markdown Content */}
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold my-4" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold my-3" {...props} />,
            p: ({ node, ...props }) => <p className="text-gray-300 my-2" {...props} />,
            code: ({ node, inline, className, children, ...props }) =>
              inline ? (
                <code className="bg-gray-800 px-1 py-0.5 rounded text-sm text-red-300" {...props}>
                  {children}
                </code>
              ) : (
                <pre className="bg-gray-900 p-4 rounded overflow-x-auto my-4">
                  <code {...props} className="text-sm text-red-300">
                    {children}
                  </code>
                </pre>
              ),
            blockquote: ({ node, ...props }) => (
              <blockquote
                className="border-l-4 border-red-500 pl-4 italic text-gray-400 my-4"
                {...props}
              />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc list-inside text-gray-300 my-2" {...props} />
            ),
            li: ({ node, ...props }) => <li className="my-1" {...props} />,
          }}
        >
          {dummyBlog.content}
        </ReactMarkdown>

        {/* Like & Comment Count */}
        <div className="flex items-center gap-6 mt-10">
          <button
            onClick={handleLike}
            className="flex items-center gap-2 text-red-400 hover:text-yellow-400"
          >
            <Heart size={20} /> {likes}
          </button>
          <div className="flex items-center gap-2 text-gray-400">
            <MessageSquare size={20} /> {comments.length}
          </div>
        </div>

        {/* Comments */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Comments</h2>
          <div className="space-y-4 mb-6">
            {comments.map((comment, i) => (
              <div
                key={i}
                className="bg-[#111] p-3 rounded-lg border border-red-500/10"
              >
                <p className="text-sm font-medium text-red-400">{comment.user}</p>
                <p className="text-gray-300 text-sm">{comment.text}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              className="bg-[#111] border border-red-500/30 px-4 py-2 rounded-lg flex-1 text-white"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              onClick={handleComment}
              className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailPage;
