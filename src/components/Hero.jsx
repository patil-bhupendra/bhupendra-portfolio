// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import StarfieldCanvas from "./StarfieldCanvas";
import resumePDF from "../assets/Bhupendra_Patil_Resume.pdf";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Star Background */}
      <StarfieldCanvas speed={0.15} starCount={180} />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(90deg, rgba(20,20,20,0.65) 0%, rgba(20,20,20,0.45) 50%, rgba(20,20,20,0.65) 100%)",
        }}
      />

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-14">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2"
          variants={textVariants}
          initial="hidden"
          animate="show"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
            Building Modern
            <br />
            <span className="text-purple">Full-Stack Web Applications</span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mb-8">
            I'm Bhupendra Patil, a Full Stack Developer specializing in
            React.js, Node.js, Express.js, and MongoDB. I enjoy building
            scalable web applications and solving real-world problems through
            clean, maintainable code.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "JavaScript",
              "Java",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full border border-purple/30 bg-purple/10 text-purple text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple text-white rounded-lg font-medium hover:bg-purple-700 transition-all duration-300 shadow-lg shadow-purple/20"
            >
              View Projects
            </a>

            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-purple text-purple rounded-lg font-medium hover:bg-purple/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-72 md:w-96">
            {/* Soft Glow */}
            <div className="absolute inset-0 bg-purple/30 blur-[100px] rounded-3xl"></div>

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl">
              <img
                src={assets.profileImg}
                alt="Bhupendra Patil"
                className="w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
