import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center px-4">
      <div className="text-center max-w-xl animate-fade-in-down">
        <div className="flex justify-center mb-4">
          <AlertTriangle size={64} className="text-red-500 drop-shadow-lg" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
          404 - Page Not Found
        </h1>

        <p className="text-gray-400 text-base md:text-lg mb-6 px-2 md:px-0">
          The page you're looking for doesn’t exist, has been removed,
          or is temporarily unavailable.
        </p>

        <Link
          to="/"
          className="inline-block bg-red-600 hover:bg-red-700 transition duration-300 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg text-sm font-medium"
        >
          🔙 Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
