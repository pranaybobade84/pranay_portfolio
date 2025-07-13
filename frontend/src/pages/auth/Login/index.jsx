import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useLoginMutation } from "../../../endpoints/auth/authEndpoint";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCredientials } from "../../../features/auth/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    userNameOrEmail: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.userNameOrEmail.trim())
      errors.userNameOrEmail = "Username or Email is required";
    if (!formData.password.trim()) errors.password = "Password is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await login(formData).unwrap();
      toast.success("🎉 Login successful");
      localStorage.setItem("accessToken", res.accessToken);
      dispatch(
        setCredientials({
          user: res?.user,
        })
      );
      if (res?.user?.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      toast.error(err?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <section className="min-h-screen bg-black text-white font-poppins flex items-center justify-center px-4 relative">
      {/* Blur Circles */}
      <div className="absolute w-[300px] h-[300px] bg-red-500 blur-[120px] opacity-30 rounded-full top-10 left-10" />
      <div className="absolute w-[200px] h-[200px] bg-red-700 blur-[100px] opacity-40 rounded-full bottom-10 right-10" />

      <div className="bg-[#111] border border-red-600/30 rounded-xl shadow-lg w-full max-w-md p-6 sm:p-8 z-10">
        <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>
        <p className="text-sm text-gray-400 text-center mb-6">
          Ready to conquer more code?
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm text-gray-300">
              Username or Email
            </label>
            <input
              type="text"
              name="userNameOrEmail"
              value={formData.userNameOrEmail}
              onChange={handleChange}
              placeholder="e.g. pranay_dev or pranay@email.com"
              className="w-full px-4 py-2 rounded bg-black border border-red-500/20 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {formErrors.userNameOrEmail && (
              <p className="text-xs text-red-400 mt-1">
                {formErrors.userNameOrEmail}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded bg-black border border-red-500/20 text-white focus:outline-none focus:ring-2 focus:ring-red-500 pr-10"
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

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-600 hover:bg-red-500 transition py-2 rounded text-sm font-semibold tracking-wide disabled:opacity-50"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          New here?{" "}
          <Link to="/register" className="text-red-400 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
