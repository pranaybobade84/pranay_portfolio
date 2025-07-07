import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="bg-[#0f1117] min-h-screen">
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
