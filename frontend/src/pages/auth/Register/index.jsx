import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen bg-black text-white font-poppins flex items-center justify-center px-4 relative overflow-hidden mt-5">
      <div className="absolute w-[250px] h-[250px] bg-red-500 blur-[100px] opacity-30 rounded-full top-12 left-12" />
      <div className="absolute w-[180px] h-[180px] bg-red-700 blur-[90px] opacity-40 rounded-full bottom-12 right-12" />

      <div className="bg-[#111] border border-red-600/30 rounded-xl shadow-lg w-full max-w-sm p-6 z-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 tracking-tight">
          Create Account
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 text-center mb-6">
          Join the squad of night owls and bug slayers
        </p>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Name</label>
            <input
              type="text"
              placeholder="e.g. pranay_dev"
              className="w-full px-3 py-2 rounded bg-black border border-red-500/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 rounded bg-black border border-red-500/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-3 py-2 rounded bg-black border border-red-500/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-500 transition py-2 rounded text-sm font-semibold tracking-wide"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-red-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
