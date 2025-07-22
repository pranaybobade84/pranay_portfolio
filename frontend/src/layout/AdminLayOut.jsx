import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Info,
  FileText,
  Award,
  Briefcase,
  FolderGit2,
  MessageCircle,
  LogOut,
} from "lucide-react";
import { useLogoutMutation } from "../endpoints/auth/authEndpoint";
import { toast } from "react-toastify";

const navItems = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { name: "About", path: "/admin/about", icon: Info },
  { name: "Blogs", path: "/admin/blogs", icon: FileText },
  { name: "Skills", path: "/admin/skills", icon: Award },
  { name: "Experience", path: "/admin/experience", icon: Briefcase },
  { name: "Projects", path: "/admin/project", icon: FolderGit2 },
  { name: "Chats", path: "/admin/chats", icon: MessageCircle },
];

const AdminLayout = () => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout().unwrap();
      localStorage.clear();
      toast.success("Logged out ✅");
      navigate("/login");
    } catch (err) {
      toast.error("Logout failed");
    }
  };
  return (
    <div className=" text-white font-poppins flex">
      <aside className="fixed top-16 left-0 min-h-screen h-full w-16 md:w-64 bg-black/60 backdrop-blur-md border-r border-red-600/20 p-4 z-50 transition-all duration-300 flex flex-col items-center md:items-start pt-6 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <nav className="space-y-4 w-full">
          {navItems.map(({ name, path, icon: Icon }, index) => (
            <NavLink
              key={index}
              to={path}
              end
              title={name}
              className={({ isActive }) =>
                `group relative flex items-center md:justify-start justify-center gap-3 px-0 md:px-4 py-2 rounded-lg transition text-sm font-medium ${
                  isActive
                    ? "bg-red-600 text-white"
                    : "text-gray-400 hover:bg-red-800/20"
                }`
              }
            >
              <Icon size={20} />
              <span className="hidden md:inline">{name}</span>
            </NavLink>
          ))}
        </nav>

        <button
          title="Logout"
          className="mt-5 flex items-center md:justify-start justify-center gap-2 text-red-500 text-sm hover:text-yellow-400 w-full px-0 md:px-4 py-2 cursor-pointer"
          onClick={handleLogout}
        >
          <LogOut size={16} />
          <span className="hidden md:inline">Logout</span>
        </button>
      </aside>

      <div className="flex-1 h-full ml-16 md:ml-64 transition-all mt-[70px]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
