import {
  Github,
  Linkedin,
  Twitter,
  Globe,
  Mail,
  Phone,
  MapPin,
  FileText,
  GraduationCap,
} from "lucide-react";

const About = () => {
  const about = {
    name: "Pranay Bobade",
    title: "MERN Stack Developer & UI/UX Enthusiast",
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
    education: [
      {
        degree: "BCA - Bachelor of Computer Applications",
        year: "2022",
        institute: "XYZ University, Nagpur",
      },
    ],
  };

  return (
    <section className="bg-black text-white min-h-screen px-6 py-20 font-mono relative overflow-hidden">
      <div className="text-center z-10 relative mb-20">
        <p className="mt-4 text-xl md:text-2xl text-gray-400 tracking-widest uppercase">
          Building Experiences With JavaScript Power
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-12 z-10 text-lg md:text-xl text-gray-300">
        <div className="space-y-6 leading-relaxed">
          <h2 className="text-3xl font-bold text-white relative inline-block">
            <span>My Story</span>
            <svg
              className="absolute -bottom-2 left-0 w-full h-4"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M0 5 C20 10, 80 0, 100 5"
                stroke="red"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </h2>
          <p>
            Hello! I’m Pranay, a{" "}
            <span className="text-white font-semibold">
              MERN Stack Developer
            </span>{" "}
            from Nagpur. I specialize in building high-performance full-stack
            applications that are functional, scalable, and visually compelling.
          </p>
          <p>
            I started this journey with a deep curiosity about how things work
            on the internet — and over time, I turned that curiosity into a
            mission to build clean, modern apps that feel as good as they work.
          </p>
          <p>
            My tools of trade?{" "}
            <span className="text-white font-semibold">
              MongoDB, Express, React, Node
            </span>{" "}
            — the full MERN suite. I’m also passionate about UI/UX and
            continuously strive to enhance user interactions.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white relative inline-block">
            <span>Milestones</span>
            <svg
              className="absolute -bottom-2 left-0 w-full h-4"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M0 5 C30 0, 70 10, 100 5"
                stroke="lime"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </h2>
          <ul className="border-l-2 border-lime-400 pl-6 space-y-4">
            <li>
              <span className="text-lime-400 font-semibold">2019</span> — Began
              exploring HTML & CSS.
            </li>
            <li>
              <span className="text-lime-400 font-semibold">2020</span> —
              Learned JavaScript & built small apps.
            </li>
            <li>
              <span className="text-lime-400 font-semibold">2023</span> —
              Interned as a MERN Stack Dev on medical systems.
            </li>
            <li>
              <span className="text-lime-400 font-semibold">2025</span> —
              Focused on mastering full-stack and DSA daily.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
            <GraduationCap className="text-lime-400" /> Education
          </h2>
          <ul className="space-y-3">
            {about.education.map((edu, idx) => (
              <li key={idx}>
                <span className="font-semibold text-white">{edu.degree}</span> —{" "}
                {edu.institute} ({edu.year})
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-500" /> {about.location}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-red-500" /> {about.email}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-red-500" /> {about.phone}
            </p>
            <a
              href={about.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-red-400 hover:underline"
            >
              <FileText className="w-4 h-4" /> View Resume
            </a>
          </div>

          <div className="flex gap-5 text-xl">
            <a
              href={about.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition text-red-400"
            >
              <Github />
            </a>
            <a
              href={about.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition text-red-400"
            >
              <Linkedin />
            </a>
            <a
              href={about.socialLinks.twitter}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition text-red-400"
            >
              <Twitter />
            </a>
            <a
              href={about.socialLinks.portfolio}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition text-red-400"
            >
              <Globe />
            </a>
          </div>
        </div>
      </div>

      <svg
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[250px] h-6 opacity-30"
        viewBox="0 0 100 10"
        fill="none"
      >
        <path
          d="M0 5 C30 0, 70 10, 100 5"
          stroke="red"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </section>
  );
};

export default About;
