import React, { useEffect } from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className={`bg-[#111] w-full  max-h-[90vh] rounded-xl shadow-xl border border-red-600/30 relative flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
      
        <div className="flex items-center justify-between border-b border-red-600/20 px-6 py-4 sticky top-0 bg-[#111] z-10">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-400 transition"
          >
            <X size={22} />
          </button>
        </div>
        <div className="overflow-y-auto p-6 custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
