const Home = () => {
  return (
    <section className="relative bg-[#0f1117] text-white min-h-screen px-6 py-20 overflow-hidden">
      {/* Background Watermark Text */}
      <h1 className="absolute top-20 left-1/2 transform -translate-x-1/2 text-[150px] sm:text-[200px] lg:text-[260px] font-extrabold text-gray-800 opacity-10 select-none pointer-events-none whitespace-nowrap z-0">
        MERN STACK
      </h1>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] font-extrabold leading-tight tracking-tight uppercase text-gray-100">
          I’M A{" "}
          <span className="text-lime-400 hover:tracking-wider hover:text-lime-300 transition-all duration-300">
            MERN STACK
          </span>{" "}
          DEVELOPER
        </h1>

        {/* Labels */}
        <div className="mt-6 space-x-4">
          <span className="inline-block bg-yellow-400 text-black px-4 py-1 font-semibold text-sm sm:text-base rounded-sm rotate-[-2deg]">
            INTERACTION & MOTION DESIGN
          </span>
          <span className="inline-block bg-blue-500 text-white px-4 py-1 font-semibold text-sm sm:text-base rounded-sm rotate-[2deg]">
            UI & FRONTEND ENGINEERING
          </span>
        </div>

        {/* Description */}
        <p className="mt-8 text-gray-400 text-lg sm:text-xl max-w-3xl">
          I craft scalable, performant, and responsive full-stack applications
          using the MERN stack. Passionate about clean UI and user-centered
          experiences.
        </p>

        {/* CTA Button */}
        <a
          href="/contact"
          className="mt-10 inline-block bg-white text-black px-6 py-3 rounded hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-300 font-medium"
        >
          Let’s talk 👋
        </a>
      </div>
      <div className="absolute bottom-20 right-20 z-50 w-40 h-40 rounded-full border-2 border-lime-400 flex items-center justify-center shadow-xl">
        {/* Inner Icon Circle with Border */}
        <div className="w-24 h-24 rounded-full border-2 border-lime-400 flex items-center justify-center z-10">
          <span className="text-4xl font-extrabold text-lime-400">🎯</span>
        </div>

        {/* Rotating text around the border */}
        <svg viewBox="0 0 100 100" className="absolute w-full h-full ">
          <defs>
            <path
              id="circlePath"
              d="M 50, 50
           m -40, 0
           a 40,40 0 1,1 80,0
           a 40,40 0 1,1 -80,0"
            />
          </defs>
          <text fill="#84cc16" fontSize="9" fontWeight="900" letterSpacing="2">
            <textPath xlinkHref="#circlePath">
              USER EXPERIENCE • USER EXPERIENCE •
            </textPath>
          </text>
        </svg>
      </div>
    </section>
  );
};

export default Home;
