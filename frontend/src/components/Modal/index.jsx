import React, { useEffect } from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, children, width = "max-w-lg" }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center px-4">
      <div
        className={`bg-[#111] w-full ${width} rounded-lg shadow-xl border border-red-600/30 relative`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-red-600/20 px-6 py-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-400 transition"
          >
            <X size={22} />
          </button>
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
