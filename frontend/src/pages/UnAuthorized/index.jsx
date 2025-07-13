import React from "react";
import { LockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center text-white px-6">
      <div className="text-center max-w-2xl w-full space-y-10">
        {/* Glowing Lock Icon */}
        <div className="flex justify-center">
          <div className="p-6 rounded-full bg-black border-2 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]">
            <LockKeyhole className="w-14 h-14 text-purple-400 animate-pulse" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wider uppercase text-purple-400">
          Unauthorized Access
        </h1>

        {/* Sub Text */}
        <p className="text-lg sm:text-xl text-gray-300">
          You don’t have permission to view this page. Please login or return to the homepage.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            to="/"
            className="px-6 py-3 text-black bg-white rounded-full text-lg font-semibold hover:scale-105 transition shadow-lg"
          >
            Go Home
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 bg-purple-500 text-white rounded-full text-lg font-semibold hover:bg-purple-600 hover:scale-105 transition shadow-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Unauthorized;
