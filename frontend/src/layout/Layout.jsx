import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="bg-black min-h-screen relative text-white overflow-hidden">
      <div
        className="
    pointer-events-none fixed 
    top-[-80px] left-[-80px] 
    w-[250px] h-[250px] 
    sm:w-[300px] sm:h-[300px] 
    md:w-[400px] md:h-[400px] 
    bg-red-500 rounded-full 
    opacity-30 blur-[80px] 
    sm:blur-[100px] 
    z-0
  "
      />
      <div
        className="
    pointer-events-none fixed 
    bottom-[-80px] right-[-80px] 
    w-[200px] h-[200px] 
    sm:w-[250px] sm:h-[250px] 
    md:w-[300px] md:h-[300px] 
    bg-red-700 rounded-full 
    opacity-40 blur-[60px] 
    sm:blur-[80px] 
    z-0
  "
      />

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
