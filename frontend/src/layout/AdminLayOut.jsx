import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Award,
  Briefcase,
  LogOut,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { name: "Blogs", path: "/admin/blogs", icon: FileText },
  { name: "Skills", path: "/admin/skills", icon: Award },
  { name: "Experience", path: "/admin/experience", icon: Briefcase },
];

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex bg-black text-white font-poppins">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111] border-r border-red-600/20 p-6 space-y-8 hidden md:block">
        <div className="text-2xl font-bold text-red-500">Admin Panel</div>

        <nav className="space-y-4">
          {navItems.map(({ name, path, icon: Icon }, index) => (
            <NavLink
              key={index}
              to={path}
              end
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
      <main className="flex-1 px-4 md:px-10 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
