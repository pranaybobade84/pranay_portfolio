import {
  Github,
  Linkedin,
  Twitter,
  Globe,
  Mail,
  Phone,
  MapPin,
  FileText,
} from "lucide-react";

const About = () => {
  const about = {
    name: "Pranay Bobade",
    title: "MERN Stack Developer & UI/UX Enthusiast",
    bio: "I build full-stack web apps that are fast, responsive, and intuitive. With a strong foundation in JavaScript and a passion for clean interfaces, I create solutions that not only work — they impress.",
    profileImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    location: "Nagpur, India",
    email: "pranay.dev@example.com",
    phone: "+91 9876543210",
    resumeLink: "https://example.com/resume.pdf",
    socialLinks: {
      github: "https://github.com/pranaybobade",
      linkedin: "https://linkedin.com/in/pranaybobade",
      twitter: "https://twitter.com/pranaybobade",
      portfolio: "https://pranay.dev",
    },
    isVisible: true,
  };

  const fallbackImage =
    "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  if (!about?.isVisible) return null;

  return (
    <section className="bg-[#0f1117] text-white px-6 py-20 min-h-screen">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-6xl sm:text-7xl font-extrabold text-gray-800 opacity-10 tracking-widest uppercase">
          About Me
        </h2>
        <p className="mt-2 text-3xl sm:text-4xl font-bold text-lime-400 z-10 relative">
          Who am I?
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        {about.profileImage && (
          <img
            src={about.profileImage || fallbackImage}
            alt={about.name}
            className="rounded-xl shadow-lg w-56 h-56 object-cover mx-auto md:mx-0"
          />
        )}

        {/* Info Section */}
        <div>
          <h2 className="text-4xl font-bold text-lime-400 mb-2">{about.name}</h2>
          <p className="text-xl text-gray-300 font-semibold mb-4">
            {about.title}
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">{about.bio}</p>

          <div className="space-y-2 text-sm sm:text-base text-gray-400">
            {about.location && (
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-lime-400" /> {about.location}
              </p>
            )}
            {about.email && (
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-lime-400" /> {about.email}
              </p>
            )}
            {about.phone && (
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-lime-400" /> {about.phone}
              </p>
            )}
            {about.resumeLink && (
              <a
                href={about.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lime-400 font-medium hover:underline"
              >
                <FileText className="w-4 h-4" /> View Resume
              </a>
            )}
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6 text-lime-400 text-xl">
            {about.socialLinks.github && (
              <a
                href={about.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                <Github />
              </a>
            )}
            {about.socialLinks.linkedin && (
              <a
                href={about.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                <Linkedin />
              </a>
            )}
            {about.socialLinks.twitter && (
              <a
                href={about.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                <Twitter />
              </a>
            )}
            {about.socialLinks.portfolio && (
              <a
                href={about.socialLinks.portfolio}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                <Globe />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
