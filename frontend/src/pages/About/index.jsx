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
import EducationImg from "../../assets/education.avif";
import MilestoneImg from "../../assets/milestone.avif";
import StoryImg from "../../assets/story.avif";

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
    <section className=" text-white min-h-screen px-6 py-20 font-mono relative overflow-hidden">
      <div className="text-center z-10 relative mb-20">
        <p className="mt-4 text-xl md:text-2xl text-gray-400 tracking-widest uppercase italic font-poppins">
          {` < Building Experiences With JavaScript Power />`}
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-12 z-10 text-lg md:text-3xl text-gray-300 ">
        <div className="w-full h-[60vh] overflow-hidden relative group">
          <img
            src={StoryImg}
            alt="Story Visual"
            className="w-full h-full object-cover transform transition-transform duration-[3000ms] ease-in-out group-hover:scale-110"
          />
        </div>

        <div className="space-y-6 leading-relaxed">
          <h2 className="text-[36px] sm:text-[56px] md:text-[72px] lg:text-[88px] font-extrabold uppercase leading-none tracking-tight font-poppins relative  inline-block">
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
            My name is <span className="text-white font-semibold">Pranay</span>,
            and I live in{" "}
            <span className="text-white font-semibold">Nagpur, India</span>.
            Most days, you’ll find me learning, building, and trying to grow —
            both as a developer and as a person.
          </p>
          <p>
            I come from a humble background. My{" "}
            <span className="text-white font-semibold">
              father was a farmer
            </span>{" "}
            who worked hard to give us everything he could before he passed
            away. My{" "}
            <span className="text-white font-semibold">
              mother is a housewife
            </span>
            , and her strength and love have shaped who I am today.
          </p>
          <p>
            I don’t have any medical conditions. I'm healthy, grateful, and
            fully present in the life I’m working to build.
          </p>
          <p>
            I love creating things — especially with{" "}
            <span className="text-white font-semibold">
              JavaScript and the MERN stack
            </span>
            . Clean code, good design, and meaningful impact motivate me more
            than titles or buzzwords. I'm passionate about solving problems and
            bringing ideas to life with technology.
          </p>
          <p>
            I believe in staying consistent, learning every day, and building a
            future that reflects both skill and character. This isn’t just a
            career path for me — it’s a journey of growth, purpose, and
            persistence.
          </p>
        </div>

        <hr className="border-t border-gray-600 my-10" />
        <div className="w-full h-[60vh] overflow-hidden relative group">
          <img
            src={MilestoneImg}
            alt="Milestone Journey"
            className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* Milestones */}
        <div className="space-y-6">
          <h2 className="text-[36px] sm:text-[56px] md:text-[72px] lg:text-[88px] font-extrabold uppercase leading-none tracking-tight font-poppins relative  inline-block">
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

        <hr className="border-t border-gray-600 my-10" />
        <div className="w-full h-[60vh] overflow-hidden relative group">
          <img
            src={EducationImg}
            alt="Graduation"
            className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
          />
        </div>
        {/* Education */}
        <div>
          <h2 className="text-[36px] sm:text-[56px] md:text-[72px] lg:text-[88px] font-extrabold uppercase leading-none tracking-tight font-poppins relative  inline-block">
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
        <hr className="border-t border-gray-600 mt-10 mb-5" />

        {/* Contact */}
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

          {/* Social Links */}
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
