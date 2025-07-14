import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className=" text-white min-h-screen flex flex-col justify-between px-6 py-14 font-mono relative overflow-hidden ">
      <div className="z-10 relative w-full space-y-6 px-4 md:px-10">
        <div className="w-full">
          <h1 className="text-[48px] sm:text-[72px] md:text-[100px] lg:text-[120px] font-extrabold uppercase leading-none tracking-tight font-poppins text-left mt-3">
            I AM PRANAY
          </h1>
        </div>

        <div className="w-full text-right relative">
          <div className="inline-block relative">
            <h2 className="text-[36px] sm:text-[56px] md:text-[72px] lg:text-[88px] font-extrabold uppercase leading-none tracking-tighter font-poppins text-right">
              <span  className="text-red-500">MERN</span> Stack Developer
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mt-10 text-gray-400 text-base md:text-lg leading-relaxed z-10 uppercase">
        <p>
          Passionate about building fast, scalable, and visually polished web
          applications using the MERN stack. I combine backend logic with
          elegant frontend experiences to craft powerful digital products.
        </p>

        <Link
          to="/contact"
          className="mt-6 inline-block border border-white text-white px-6 py-3 rounded-md font-semibold tracking-wider uppercase text-sm hover:bg-white hover:text-black transition duration-300"
        >
          Let's Talk <span className="animate-pulse">👋</span>
        </Link>
      </div>

      <div className="text-right mt-10 text-xs md:text-sm uppercase tracking-widest text-gray-600 z-10 relative pr-1">
        <div className="flex justify-end items-center gap-2">
          <MapPin className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
          <p>Based in Nagpur, India</p>
        </div>

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

      <div className="absolute bottom-3 right-6 text-xs md:text-sm italic text-gray-500 tracking-wide max-w-xs text-right z-10 ">
        "Building today, better than yesterday — one line at a time."
      </div>
    </section>
  );
};

export default Home;
