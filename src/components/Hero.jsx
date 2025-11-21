// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import StarfieldCanvas from "./StarfieldCanvas";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  };

  /* ---------------------- TYPING EFFECT ---------------------- */
  const role = "Full Stack Developer";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = isDeleting ? 50 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // typing
        if (index < role.length) {
          setText(role.substring(0, index + 1));
          setIndex(index + 1);
        } else {
          // pause before delete
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // deleting
        if (index > 0) {
          setText(role.substring(0, index - 1));
          setIndex(index - 1);
        } else {
          // restart after delete
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  /* ------------------------------------------------------------ */

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* STARFIELD CANVAS */}
      <StarfieldCanvas speed={0.25} starCount={160} />

      {/* READABILITY GRADIENT */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(90deg, rgba(20,20,20,0.82) 0%, rgba(30,30,30,0.7) 50%, rgba(20,20,20,0.82) 100%)",
        }}
        aria-hidden="true"
      />

      {/* MAIN CONTENT */}
      <div className="container relative z-10 mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* LEFT TEXT */}
        <motion.div
          className="md:w-1/2"
          variants={textVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
            Hi, I'm <span className="text-purple">Bhupendra Patil</span>
          </h1>

          {/* ⭐ TYPING EFFECT WITH WHITE COLOR ⭐ */}
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-6 h-12">
            {text}
            <span className="border-r-2 border-white ml-1 animate-pulse"></span>
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-md">
            I build fast, responsive, and visually stunning web applications
            using modern technologies and clean design principles.
          </p>

          <div className="flex space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple text-white rounded-lg font-medium hover:bg-purple-700 transition duration-300 shadow-lg shadow-purple/30"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-purple text-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
          <div className="relative w-72 h-80 md:w-96 md:h-[420px] group">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple/40 via-pink/30 to-purple/40 blur-3xl opacity-80 group-hover:blur-[70px] transition-all duration-700"></div>

            {/* Gradient border wrapper */}
            <div className="relative rounded-3xl p-[3px] bg-gradient-to-br from-purple/70 via-pink/60 to-purple/70 shadow-2xl shadow-purple/30">
              {/* Actual Profile Image */}
              <motion.img
                animate={floatAnimation}
                src={assets.profileImg}
                alt="Profile"
                className="
                  rounded-3xl w-full h-full object-cover 
                  shadow-2xl 
                  group-hover:scale-[1.02] 
                  transition-all duration-500
                "
              />

              {/* Glass reflection overlay */}
              <div
                className="
                  absolute inset-0 rounded-3xl 
                  bg-gradient-to-t from-transparent via-white/5 to-white/20 
                  opacity-[0.1] pointer-events-none
                "
              ></div>
            </div>
          </div>
        </div>

        {/* END IMAGE */}
      </div>
    </section>
  );
};

export default Hero;
