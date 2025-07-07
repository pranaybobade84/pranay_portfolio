import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col justify-between px-6 py-16 font-mono relative overflow-hidden ">
      {/* Heading Section */}
      <div className="space-y-4 z-10 relative">
        <h1 className="text-[80px] md:text-[120px] lg:text-[140px] font-extrabold uppercase leading-none tracking-tight font-poppins">
          I AM PRANAY
        </h1>

        {/* Fancy Subheading with Curve and Icon */}
        <div className="relative inline-block">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-wide text-white bg-gradient-to-r from-red-400 via-pink-500 to-red-400 bg-clip-text text-transparent z-10 relative">
            MERN Stack Developer
          </h2>

          {/* Curvy underline SVG */}
          <svg
            className="absolute -bottom-2 left-0 w-full h-4 md:h-6"
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
        </div>
      </div>

      {/* Description */}
      <div className="max-w-2xl mt-10 text-gray-400 text-base md:text-lg leading-relaxed z-10 uppercase">
        <p>
          Passionate about building fast, scalable, and visually polished web
          applications using the MERN stack. I combine backend logic with
          elegant frontend experiences to craft powerful digital products.
        </p>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="mt-6 inline-block border border-white text-white px-6 py-3 rounded-md font-semibold tracking-wider uppercase text-sm hover:bg-white hover:text-black transition duration-300"
        >
          Let's Talk <span className="animate-pulse">👋</span>
        </Link>
      </div>

      {/* Location */}
      <div className="text-right mt-10 text-xs md:text-sm uppercase tracking-widest text-gray-600 z-10 relative pr-1">
        <div className="flex justify-end items-center gap-2">
          <MapPin className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
          <p>Based in Nagpur, India</p>
        </div>

        {/* Curvy decorative line */}
        <svg
          className="absolute -bottom-3 right-0 w-32 h-4 md:h-5"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 5 C30 10, 70 0, 100 5"
            stroke="red"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Right-side Circle Visual */}
      <div className="absolute top-60 right-40 hidden lg:block">
        <div className="relative w-44 h-44 rounded-full flex items-center justify-center border-1 border-white">
          {/* Inner Border */}
          <div className="absolute w-28 h-28 rounded-full border-2 border-gray-500 z-0"></div>

          {/* Center Text */}
          <span className="z-10 text-white font-extrabold text-sm tracking-wider uppercase">
            MERN Stack
          </span>

          {/* Rotating Text Circle */}
          <svg
            viewBox="0 0 100 100"
            className="absolute w-full h-full animate-spin-slow"
          >
            <defs>
              <path
                id="techCircle"
                d="M 50, 50
              m -40, 0
              a 40,40 0 1,1 80,0
              a 40,40 0 1,1 -80,0"
              />
            </defs>
            <text fill="white" fontSize="10" fontWeight="900" letterSpacing="2">
              <textPath xlinkHref="#techCircle" startOffset="0%">
                MongoDB • Express • React • Node •
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3 right-6 text-xs md:text-sm italic text-gray-500 tracking-wide max-w-xs text-right z-10 ">
        "Building today, better than yesterday — one line at a time."
      </div>
    </section>
  );
};

export default Home;
