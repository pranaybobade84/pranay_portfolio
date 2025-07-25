import { AlertTriangle } from "lucide-react";

const NotFoundMessage = ({
  message = "No data found.",
  height = "h-screen",
}) => {
  return (
    <div className={`${height} flex items-center justify-center px-4`}>
      <div className="text-center text-gray-400  rounded-2xl p-8 shadow-md transition-opacity duration-500 ease-out animate-fade-in">
        <AlertTriangle className="w-12 h-12 text-yellow-500 mb-4 mx-auto animate-pulse" />
        <h3 className="text-2xl font-semibold text-white">{message}</h3>
        <p className="text-sm mt-2 text-gray-500">
          Try refreshing the page or check back later.
        </p>
      </div>
    </div>
  );
};

export default NotFoundMessage;
