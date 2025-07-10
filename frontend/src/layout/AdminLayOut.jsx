import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Award,
  Briefcase,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { name: "About", path: "/admin/about", icon: LayoutDashboard },
  { name: "Blogs", path: "/admin/blogs", icon: FileText },
  { name: "Skills", path: "/admin/skills", icon: Award },
  { name: "Experience", path: "/admin/experience", icon: Briefcase },
  { name: "Projects", path: "/admin/project", icon: Briefcase },
  { name: "Chats", path: "/admin/chats", icon: Briefcase },
];

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-poppins">
      {/* Mobile Hamburger */}
      <div className="md:hidden flex justify-between items-center p-4 border-b border-red-600/20">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white"
        >
          {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#111] border-r border-red-600/20 p-6 space-y-8 z-50 transition-transform duration-300 transform
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="text-2xl font-bold text-red-500 hidden md:block">
          Admin Panel
        </div>

        {/* Close on mobile */}
        <div className="flex justify-between items-center md:hidden">
          <div className="text-2xl font-bold text-red-500">Admin Panel</div>
          <button onClick={() => setSidebarOpen(false)} className="text-white">
            <X size={24} />
          </button>
        </div>

        <nav className="space-y-4">
          {navItems.map(({ name, path, icon: Icon }, index) => (
            <NavLink
              key={index}
              to={path}
              end
              onClick={() => setSidebarOpen(false)} // auto-close on nav in mobile
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-red-600 text-white"
                    : "text-gray-400 hover:bg-red-800/20"
                }`
              }
            >
              <Icon size={18} />
              {name}
            </NavLink>
          ))}
        </nav>

        <button className="flex items-center gap-3 text-red-500 text-sm hover:text-yellow-400 mt-8">
          <LogOut size={16} />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 px-4 md:px-10 py-6 transition-all">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
