import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import SectionHeading from "../../components/Heading";

const InfoItem = ({ label, value, isLink = false }) => {
  if (!value) return null;

  return (
    <p>
      <span className="font-medium text-white">{label}:</span>{" "}
      {isLink ? (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 underline"
        >
          {value}
        </a>
      ) : (
        <span className="text-gray-300">{value}</span>
      )}
    </p>
  );
};

const dummyAbout = {
  name: "Pranay Bobade",
  title: "MERN Stack Developer",
  bio: "I’m passionate about building full-stack web apps.",
  profileImage: "https://images.unsplash.com/photo-1667599397812-ebaaf8a2ce6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D",
  location: "India",
  email: "pranaybobade84@gmail.com",
  phone: "+91 9284117783",
  resumeLink: "https://example.com/resume.pdf",
  socialLinks: {
    github: "https://github.com/pranaybobade",
    linkedin: "https://linkedin.com/in/pranaybobade",
    twitter: "https://twitter.com/pranaybobade",
    portfolio: "https://pranayportfolio.com",
  },
};

const ManageAbout = () => {
  return (
    <div className="p-4 md:p-6 relative">
      <SectionHeading>Manage About</SectionHeading>

      <div className="bg-[#111] border border-red-600/20 p-6 rou    nded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div>
          <img
            src={dummyAbout.profileImage}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-red-600 mx-auto md:mx-0"
          />
        </div>

        <div className="space-y-2">
          <InfoItem label="Name" value={dummyAbout.name} />
          <InfoItem label="Title" value={dummyAbout.title} />
          <InfoItem label="Bio" value={dummyAbout.bio} />
          <InfoItem label="Location" value={dummyAbout.location} />
          <InfoItem label="Email" value={dummyAbout.email} />
          <InfoItem label="Phone" value={dummyAbout.phone} />
          <InfoItem label="Resume" value={dummyAbout.resumeLink} isLink />
        </div>

        <div className="md:col-span-2 mt-4">
          <h3 className="text-xl font-semibold text-white mb-2">
            Social Links
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {Object.entries(dummyAbout.socialLinks).map(([platform, url]) =>
              url ? (
                <li key={platform}>
                  <InfoItem
                    label={platform.charAt(0).toUpperCase() + platform.slice(1)}
                    value={url}
                    isLink
                  />
                </li>
              ) : null
            )}
          </ul>
        </div>

        <div className="md:col-span-2 flex justify-end gap-4 mt-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition">
            <Pencil size={18} /> Edit
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition">
            <Trash2 size={18} /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageAbout;
