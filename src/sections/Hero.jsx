import { motion } from "framer-motion";
import Typewriter from "../components/Typewriter";
// import profileImage from "../assets/profiile/AI_profile.png";
import profileImage from "../assets/profile/profile2.png";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] md:min-h-screen flex items-center justify-center px-6 py-20 md:py-0 overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-black opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-12 md:gap-16">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left max-w-2xl">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                         font-extrabold tracking-tight leading-tight mb-6"
            >
              Hello,
              <br />
              I'm{" "}

              {/* First Name */}
              <motion.span
                animate={{
                  scale: [1, 1.03, 1],
                  opacity: [0.92, 1, 0.92],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
    relative inline-block font-extrabold text-white
    text-4xl sm:text-7xl md:text-7xl
    leading-none tracking-tight
    [text-shadow:0_0_8px_rgba(255,77,166,0.4)]
    sm:[text-shadow:0_0_20px_rgba(255,77,166,0.6)]
    md:[text-shadow:0_0_30px_rgba(255,77,166,0.7)]
    [-webkit-text-stroke:0px]
    sm:[-webkit-text-stroke:1px_#ff4da6]
  "
              >
                Cattttt
              </motion.span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-10"
            >
              <Typewriter
                text="Graphic Designer & Visual Artist"
                speed={80}
                delay={2500}
              />
            </motion.div>

            {/* Buttons */}
            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
            >
              {/* About Button */}
              <a
                href="#about"
                className="
      group relative overflow-hidden
      w-full sm:w-auto
      px-8 py-4
      rounded-full
      border border-pink-500/40
      bg-white/5 backdrop-blur-sm
      text-white text-base sm:text-lg font-medium
      transition-all duration-300
      hover:scale-105
      hover:border-pink-400
      hover:shadow-[0_0_25px_rgba(255,77,166,0.35)]
    "
              >
                <span className="relative z-10">
                  About Me
                </span>

                <div
                  className="
        absolute inset-0
        bg-pink-500/10
        opacity-0
        group-hover:opacity-100
        transition-opacity duration-300
      "
                />
              </a>

              {/* Portfolio Button */}
              <a
                href="#portfolio"
                className="
      group relative overflow-hidden
      w-full sm:w-auto
      px-8 py-4
      rounded-full
      text-base sm:text-lg
      font-semibold
      text-white
      transition-all duration-300
      hover:scale-105
      bg-gradient-to-r
      from-pink-500
      via-fuchsia-500
      to-purple-600
      shadow-[0_0_25px_rgba(255,77,166,0.45)]
      hover:shadow-[0_0_45px_rgba(255,77,166,0.7)]
    "
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  See Projects
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

                <div
                  className="
        absolute inset-0
        bg-white/10
        opacity-0
        group-hover:opacity-100
        transition-opacity duration-300
      "
                />
              </a>
            </motion.div>
          </div>
          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="relative flex items-center justify-center"
          >

            {/* ORBIT WRAPPER (BEHIND PROFILE) */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 z-0">

              {/* ROTATING ORBIT LAYER */}
              <motion.div
                className="absolute inset-0 rounded-full z-0"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >

                <OrbitIcon label="Ps" className="top-0 left-1/2 -translate-x-1/2 text-blue-400" />
                <OrbitIcon label="Ai" className="top-1/2 right-0 -translate-y-1/2 text-orange-400" />
                <OrbitIcon label="Ae" className="bottom-0 left-1/2 -translate-x-1/2 text-purple-400" />
                <OrbitIcon label="Pr" className="top-1/2 left-0 -translate-y-1/2 text-pink-400" />
                <OrbitIcon label="Fg" className="top-8 right-8 text-red-400" />
                <OrbitIcon label="Capcut" className="bottom-8 left-8 text-white" />

              </motion.div>
            </div>

            {/* PROFILE IMAGE (FORCED FRONT) */}
            <img
              src={profileImage}
              alt="Profile"
              className="
      absolute z-20
      w-44 h-56 sm:w-56 sm:h-72 md:w-64 md:h-80
      object-cover rounded-3xl shadow-2xl
    "
            />

          </motion.div>

        </div>
      </div>
    </section>
  );
}

const OrbitIcon = ({ label, className }) => {
  return (
    <div className={`absolute ${className}`}>
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          w-10 h-10 sm:w-12 sm:h-12
          flex items-center justify-center
          rounded-full
          bg-white/10 backdrop-blur-md
          border border-white/20
          text-sm font-bold
          shadow-lg
        "
      >
        {label}
      </motion.div>
    </div>
  );
};
