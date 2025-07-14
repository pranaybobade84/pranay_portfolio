import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="bg-black min-h-screen relative text-white overflow-hidden">
      <div className="pointer-events-none fixed top-[-100px] left-[-100px] w-[400px] h-[400px] bg-red-500 rounded-full opacity-30 blur-[100px] z-0" />
      <div className="pointer-events-none fixed bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-red-700 rounded-full opacity-40 blur-[80px] z-0" />

      <div className="relative z-10">
        <Navbar />
        <main className="min-h-[80vh] overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
