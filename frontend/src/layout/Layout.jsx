import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <h1>footer</h1>
    </div>
  );
};

export default Layout;
