import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isAuthenticated = true
  const isAdmin = true;

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Experience", to: "/experience" },
    { name: "Skills", to: "/skills" },
    { name: "Projects", to: "/projects" },
    { name: "Blog", to: "/blog" },
    { name: "Contact", to: "/contact" },
  ];

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
          <nav className="hidden lg:flex gap-6 text-sm font-medium uppercase tracking-wide">
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

            {/* Conditional Auth Button */}
            {!isAuthenticated ? (
              <Link
                to="/login"
                className="hover:text-red-500 transition duration-300"
              >
                Login
              </Link>
            ) : (
              <Link
                to={isAdmin ? "/admin" : "/dashboard"}
                className="hover:text-yellow-400 text-yellow-500 transition duration-300"
              >
                {isAdmin ? "Admin" : "Dashboard"}
              </Link>
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
            className="text-2xl font-semibold hover:text-red-500"
          >
            Login
          </Link>
        ) : (
          <Link
            to={isAdmin ? "/admin" : "/dashboard"}
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold hover:text-yellow-400"
          >
            {isAdmin ? "Admin" : "Dashboard"}
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
