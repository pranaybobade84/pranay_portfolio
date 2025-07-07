import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Code2, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

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
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white border-b border-neutral-800 shadow-sm font-poppins">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
   <Link
  to="/"
  className="flex items-center gap-2 text-2xl font-extrabold tracking-wider text-red-500 hover:text-white  transition duration-300 font-poppins"
>
  &lt;pranay.dev /&gt;
</Link>  

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium uppercase tracking-wide">
          {links.slice(0, 5).map((link) => (
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
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-4 py-2 rounded border border-white text-white hover:bg-red-500 hover:border-black hover:text-black transition-all duration-300 font-semibold text-sm uppercase"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(true)}
          className="block md:hidden text-white"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
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
      </div>
    </header>
  );
};

export default Navbar;
