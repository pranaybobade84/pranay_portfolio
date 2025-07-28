import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { toast } from "react-toastify";
import { useLogoutMutation } from "../../endpoints/auth/authEndpoint";

const Navbar = () => {
  const { isTokenValid, userRole } = useAuthCheck();
  const [logout] = useLogoutMutation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isAuthenticated = isTokenValid;
  const isAdmin = userRole === "admin";

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Experience", to: "/experience" },
    { name: "Skills", to: "/skills" },
    { name: "Projects", to: "/projects" },
    { name: "Blog", to: "/blog" },
    { name: "Contact", to: "/contact" },
  ];

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      localStorage.clear();
      toast.success("Logged out ✅");
      navigate("/login");
     window.location.reload()
    } catch (err) {
      toast.error("Logout failed");
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white border-b border-neutral-800 shadow-sm font-poppins">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold tracking-wider text-white hover:text-red-500 transition duration-300"
        >
          &lt;pranay.dev /&gt;
        </Link>

        <div className="flex items-center gap-6">
          {/* Desktop Links */}
          <nav className="hidden lg:flex gap-6 text-sm font-medium uppercase tracking-wide items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`hover:text-red-500 transition duration-300 ${
                  pathname === link.to ? "text-red-500 font-bold" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {!isAuthenticated ? (
              <Link
                to="/login"
                className="hover:text-red-500 transition duration-300"
              >
                Login
              </Link>
            ) : isAdmin ? (
              <Link
                to="/admin"
                className="hover:text-yellow-400 text-yellow-500 transition duration-300"
              >
                Admin
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="text-sm uppercase font-medium tracking-wide text-white hover:text-red-500 transition duration-300"
              >
                Logout
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="block lg:hidden text-white"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 bg-black z-[999] flex flex-col justify-center items-center space-y-8 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white"
        >
          <X size={32} />
        </button>

        {links.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold hover:text-red-500 transition duration-300"
          >
            {link.name}
          </Link>
        ))}

        {!isAuthenticated ? (
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold hover:text-red-500 transition duration-300"
          >
            Login
          </Link>
        ) : isAdmin ? (
          <Link
            to="/admin"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold text-yellow-500 hover:text-yellow-400 transition duration-300"
          >
            Admin
          </Link>
        ) : (
          <button
            onClick={() => {
              setMenuOpen(false);
              handleLogout();
            }}
            className="text-2xl font-semibold text-white hover:text-red-500 transition duration-300"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
