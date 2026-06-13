import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import resumePDF from "../assets/Bhupendra_Patil_Resume.pdf";
import StarfieldCanvas from "./StarfieldCanvas";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background */}
      <StarfieldCanvas speed={0.12} starCount={100} />

      {/* Dark overlay with depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90 z-[1]" />

      {/* Controlled spotlight */}
      <div className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-purple-500/15 blur-[160px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          I build{" "}
          <span className="text-white/80">scalable MERN applications</span>
          <br />
          that actually ship.
        </motion.h1>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="flex items-center justify-center gap-3 mt-10 text-lg text-gray-300"
        >
          <span>Hello, I'm</span>

          <img
            src={assets.profileImg}
            alt="Profile"
            className="w-12 h-12 rounded-full border border-white/20 shadow-md object-cover"
          />

          <span className="text-white font-semibold">Bhupendra Patil</span>

          <span>— Full Stack Developer</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto mt-6 text-lg text-gray-400 leading-relaxed"
        >
          MCA graduate specializing in the MERN stack. I design and develop
          responsive, scalable, and production-ready web applications with a
          focus on performance, clean architecture, and real-world usability.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          {/* Primary Button */}
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition shadow-lg"
          >
            View Projects
          </a>

          {/* Secondary Button */}
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
