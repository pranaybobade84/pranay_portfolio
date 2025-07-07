import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Experience", to: "/experience" },
    { name: "Skills", to: "/skills" },
    { name: "Services", to: "/services" },
    { name: "Blog", to: "/blog" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f1117]/90 backdrop-blur-md shadow-md text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-lime-400 hover:scale-105 transition duration-300">
          Pranay.dev
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {links.slice(0, 5).map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="hover:text-lime-400 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-lime-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-lime-500 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(true)}
          className="block md:hidden text-white"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed inset-0 h-screen w-screen z-[999] bg-[#0f1117] transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white"
        >
          <X size={32} />
        </button>

        <nav className="h-full flex flex-col justify-center items-center gap-6 text-2xl font-semibold text-center">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="hover:text-lime-400 transition duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
