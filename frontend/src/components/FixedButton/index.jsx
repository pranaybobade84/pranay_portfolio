import React from "react";
import { Plus } from "lucide-react";

const AddButton = ({ onClick, title = "Add Item" }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 md:bottom-6 md:right-8 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg text-xl z-50 transition-transform hover:scale-110"
      title={title}
    >
      <Plus />
    </button>
  );
};

export default AddButton;
