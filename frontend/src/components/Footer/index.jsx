import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-500 py-4 mt-10 border-t">
      <div className="max-w-7xl mx-auto px-4">
        <p>
          &copy; {new Date().getFullYear()} Pranay Bobade. All rights reserved.
        </p>

        <div className="mt-2 flex justify-center space-x-4">
          {/* Internal Routes */}
          <Link to="/projects" className="hover:text-indigo-600 transition">
            Projects
          </Link>
          <Link to="/about" className="hover:text-indigo-600 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-indigo-600 transition">
            Contact
          </Link>

          {/* External Links */}
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
