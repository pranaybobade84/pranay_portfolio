import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    companyName: "TechNova Labs",
    position: "MERN Stack Intern",
    employmentType: "Internship",
    location: "Remote",
    industry: "Software Development",
    startDate: "2024-01-01",
    endDate: "2024-06-01",
    currentlyWorking: false,
    description:
      "Worked on scalable features including real-time notifications and modular UI systems. Collaborated on clean architecture and refactored multiple modules.",
    techStack: ["React", "Node.js", "MongoDB", "Socket.IO", "TailwindCSS"],
    achievements: [
      "Built a real-time notification system",
      "Reduced bundle size by 25%",
    ],
    website: "https://technova.io",
  },
  {
    companyName: "TechNova Labs",
    position: "MERN Stack Intern",
    employmentType: "Internship",
    location: "Remote",
    industry: "Software Development",
    startDate: "2024-01-01",
    endDate: "2024-06-01",
    currentlyWorking: false,
    description:
      "Worked on scalable features including real-time notifications and modular UI systems. Collaborated on clean architecture and refactored multiple modules.",
    techStack: ["React", "Node.js", "MongoDB", "Socket.IO", "TailwindCSS"],
    achievements: [
      "Built a real-time notification system",
      "Reduced bundle size by 25%",
    ],
    website: "https://technova.io",
  },
  {
    companyName: "TechNova Labs",
    position: "MERN Stack Intern",
    employmentType: "Internship",
    location: "Remote",
    industry: "Software Development",
    startDate: "2024-01-01",
    endDate: "2024-06-01",
    currentlyWorking: false,
    description:
      "Worked on scalable features including real-time notifications and modular UI systems. Collaborated on clean architecture and refactored multiple modules.",
    techStack: ["React", "Node.js", "MongoDB", "Socket.IO", "TailwindCSS"],
    achievements: [
      "Built a real-time notification system",
      "Reduced bundle size by 25%",
    ],
    website: "https://technova.io",
  },
  {
    companyName: "TechNova Labs",
    position: "MERN Stack Intern",
    employmentType: "Internship",
    location: "Remote",
    industry: "Software Development",
    startDate: "2024-01-01",
    endDate: "2024-06-01",
    currentlyWorking: false,
    description:
      "Worked on scalable features including real-time notifications and modular UI systems. Collaborated on clean architecture and refactored multiple modules.",
    techStack: ["React", "Node.js", "MongoDB", "Socket.IO", "TailwindCSS"],
    achievements: [
      "Built a real-time notification system",
      "Reduced bundle size by 25%",
    ],
    website: "https://technova.io",
  },
];

const ExperienceSection = () => {
  const quotes = [
  "Started with console.log(), now we here.",
  "I don’t always test my code, but when I do... I do it in production.",
  "Why fix it properly when you can just restart the server?",
  "Semicolon? Optional. Sanity? Not so much.",
  "Commented-out code is just future regret.",
  "CSS is just black magic with curly braces.",
  "My code works… I have no idea why.",
  "Let’s just pretend that bug is a feature.",
  "I debug like I’m Sherlock Holmes, but sleep-deprived.",
  "It’s not a bug, it’s a surprise feature!",
  "Weekend plans? npm install and chill.",
  "Real devs don’t Google — they *Stack Overflow*.",
  "Keyboard warrior by day, bug hunter by night.",
  "Will refactor later (narrator: he never did).",
  "Turns coffee into infinite loops.",
  "Deploying on Friday — because I love chaos.",
];


  return (
    <section className="min-h-screen  text-white py-20 px-6 font-poppins relative overflow-hidden">
      <div className="absolute w-[300px] h-[300px] bg-red-500 blur-[120px] opacity-30 rounded-full top-10 left-10"></div>
      <div className="absolute w-[200px] h-[200px] bg-red-700 blur-[100px] opacity-40 rounded-full bottom-10 right-10"></div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase inline-block relative">
          Experience
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-red-600 via-red-400 to-yellow-400 rounded-full"></span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto italic">
          From  <code className="text-red-500">console.log(‘Hello World’)</code>  to crying over merge conflicts — what a journey.”
        </p>
      </div>

      <div className="flex flex-col gap-20 max-w-6xl mx-auto relative z-10">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={`flex flex-col lg:flex-row items-center gap-10 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
          >
            {/* Quote Block */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <blockquote className="text-lg italic text-gray-400 text-center p-6 border-l-4 border-red-600">
                “{quotes[Math.floor(Math.random() * quotes.length)]}”
              </blockquote>
            </div>

            {/* Experience Card */}
            <div className="w-full lg:w-1/2 bg-[#111] border border-red-600/30 rounded-xl shadow-xl p-6 hover:shadow-red-500/40 transition-shadow duration-300">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-semibold text-white">{exp.position}</h3>
                {exp.website && (
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:underline flex items-center gap-1 text-sm"
                  >
                    Visit <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-400">
                {exp.companyName} — {exp.employmentType}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                {new Date(exp.startDate).toLocaleDateString("en-IN", {
                  month: "short",
                  year: "numeric",
                })} - {exp.currentlyWorking
                  ? "Present"
                  : new Date(exp.endDate).toLocaleDateString("en-IN", {
                      month: "short",
                      year: "numeric",
                    })}
              </p>
              <p className="mb-4 text-gray-300">{exp.description}</p>

              <div className="flex flex-wrap gap-2 text-sm text-gray-200">
                {exp.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-red-800/30 border border-red-600 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {exp.achievements.length > 0 && (
                <ul className="mt-4 list-disc pl-5 text-gray-400">
                  {exp.achievements.map((ach, index) => (
                    <li key={index}>{ach}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;