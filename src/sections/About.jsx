import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "Product Design",
    "Video Editer",
    "Motion Graphics",
    "Social Media Design",
    "UX/UI Design",
    "Creative Direction",
  ];

  const stats = [
    { number: "100+", label: "Projects" },
    { number: "10+", label: "Brands" },
    { number: "1+", label: "Years" },
  ];

  return (
    <section
      id="about"
      className="relative bg-black text-white py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-500/10 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-pink-400 text-sm mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
            Creating visual experiences that connect brands with people.
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-400 leading-relaxed">
              I'm a Graphic Designer and Visual Artist passionate about
              branding, motion graphics, and 3D design. My goal is to create
              visuals that are both meaningful and memorable.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed mt-6">
              I enjoy transforming ideas into compelling visual stories through
              design, animation, and creative problem-solving.
            </p>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-3 gap-6"
          >
            {stats.map((item) => (
              <div
                key={item.label}
                className="border border-gray-800 rounded-2xl p-6 text-center"
              >
                <h3
                  className="text-3xl md:text-4xl font-bold"
                  style={{
                    WebkitTextStroke: "1px #ff4da6",
                    textShadow:
                      "0 0 10px rgba(255,77,166,.5)",
                  }}
                >
                  {item.number}
                </h3>

                <p className="text-gray-500 mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-24 flex flex-wrap gap-4"
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="
                px-5 py-3
                rounded-full
                border border-gray-800
                bg-gray-900/50
                text-gray-300
                hover:border-pink-500/50
                transition
              "
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}