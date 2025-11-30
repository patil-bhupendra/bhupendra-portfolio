import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-300 py-14 relative">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 text-gray-300">
        {/* ABOUT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <h3 className="text-xl font-semibold text-white">About</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            A passionate MERN Stack Developer who loves building clean, modern,
            and scalable web applications with delightful user experiences.
          </p>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <div className="flex flex-col gap-2 text-sm">
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </motion.div>

        {/* SOCIALS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <h3 className="text-xl font-semibold text-white">Connect</h3>
          <div className="flex items-center gap-5 text-2xl">
            <a
              href="https://github.com/patil-bhupendra"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/patil-bhupendra"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:bhupendrarajput1232@gmail.com"
              className="hover:text-white transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>

      {/* COPYRIGHT */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center text-gray-500 text-sm mt-10"
      >
        © 2025 Bhupendra Patil. All Rights Reserved.
      </motion.p>

      {/* BACK TO TOP */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 
        text-white transition fixed right-6 bottom-6 shadow-lg"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer;
