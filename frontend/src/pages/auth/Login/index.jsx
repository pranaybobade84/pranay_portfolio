import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="min-h-screen bg-black text-white font-poppins flex items-center justify-center px-4 relative">
      <div className="absolute w-[300px] h-[300px] bg-red-500 blur-[120px] opacity-30 rounded-full top-10 left-10" />
      <div className="absolute w-[200px] h-[200px] bg-red-700 blur-[100px] opacity-40 rounded-full bottom-10 right-10" />

      <div className="bg-[#111] border border-red-600/30 rounded-xl shadow-lg w-full max-w-md p-8 z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-2">Welcome Back</h2>
        <p className="text-sm text-gray-400 text-center mb-8">
          Ready to conquer more code?
        </p>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded bg-black border border-red-500/20 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded bg-black border border-red-500/20 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-500 transition py-2 rounded text-sm font-semibold"
          >
            Login
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
