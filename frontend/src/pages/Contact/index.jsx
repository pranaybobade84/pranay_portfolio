import React, { useState } from "react";
import ContactFormModal from "./ContactFormModel";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <section className="min-h-screen bg-black text-white font-poppins flex flex-col  items-center px-4 sm:px-6 justify-center text-center">
      <span className="flex">
        {" Contact.".split("").map((ch, i) => (
          <h2
            key={i}
            className="text-[18vw] sm:text-[16vw] md:text-[18vw] lg:text-[20vw] font-bold leading-none tracking-wider w-full italic hover:text-red-500 transition-colors duration-200 cursor-context-menu"
            style={{ letterSpacing: "0.05em" }}
          >
            {ch}
          </h2>
        ))}
      </span>

      <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-base sm:text-lg md:text-3xl">
        <a
          href="mailto:pranay.dev@example.com"
          className="underline hover:text-red-500 transition duration-300 underline-offset-8"
        >
          Email
        </a>{" "}
        .
        <a
          href="https://www.linkedin.com/in/pranaybobade"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-red-500 transition duration-300 underline-offset-8"
        >
          LinkedIn
        </a>
        .
        <a
          href="https://www.instagram.com/pranay.bobade"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-red-500 transition duration-300 underline-offset-8"
        >
          Instagram
        </a>
        <button
          className=" inline-block border border-white text-white px-6 py-3 rounded-md font-semibold tracking-wider uppercase text-sm hover:bg-white hover:text-black transition duration-300 cursor-pointer"
          onClick={() => setShowForm(true)}
        >
          Or Send Message
        </button>
      </div>
      {showForm && <ContactFormModal onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default Contact;
