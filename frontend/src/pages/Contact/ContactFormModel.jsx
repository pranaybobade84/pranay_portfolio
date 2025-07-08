// components/ContactFormModal.jsx
import React from "react";

const ContactFormModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white text-black p-6 rounded-md w-full max-w-md relative font-poppins">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-black text-xl hover:text-red-500"
        >
          ×
        </button>

        <h3 className="text-xl font-bold mb-4 text-center">Send a Message</h3>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500 resize-none"
          />
          <button
            type="submit"
            className="w-full bg-red-500 text-white font-semibold py-2 rounded hover:bg-black hover:text-white transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;
