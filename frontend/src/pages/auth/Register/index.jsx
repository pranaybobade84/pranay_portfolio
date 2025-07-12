import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useRegisterMutation } from "../../../endpoints/auth/authEndpoint";
import { toast, ToastContainer } from "react-toastify";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.userName.trim()) errors.userName = "Username is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.password.trim()) errors.password = "Password is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await register(formData).unwrap();
      if (response?.user) {
        toast.success("🎉 Registration successful!");

        setFormData({
          userName: "",
          email: "",
          password: "",
        });
        setFormErrors({});
      }
    } catch (err) {
      const message =
        err?.data?.message || "Something went wrong. Please try again.";
      toast.error(`❌ ${message}`);
      console.error("Registration failed:", err);
    }
  };

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

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Username</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              placeholder="e.g. pranay_dev"
              className="w-full px-3 py-2 rounded bg-black border border-red-500/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
            {formErrors.userName && (
              <p className="text-xs text-red-400 mt-1">{formErrors.userName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-3 py-2 rounded bg-black border border-red-500/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
            {formErrors.email && (
              <p className="text-xs text-red-400 mt-1">{formErrors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
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
            {formErrors.password && (
              <p className="text-xs text-red-400 mt-1">{formErrors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-600 hover:bg-red-500 transition py-2 rounded text-sm font-semibold tracking-wide disabled:opacity-50"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Login Link */}
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
