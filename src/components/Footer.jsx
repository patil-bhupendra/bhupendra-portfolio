import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-dark-300 border-t border-white/10 py-14 relative">
      {" "}
      <div className="container mx-auto px-6">
        {" "}
        <div className="grid md:grid-cols-3 gap-10 text-gray-300">
          {" "}
          {/* ABOUT */}{" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {" "}
            <h3 className="text-xl font-semibold text-white">
              {" "}
              Bhupendra Patil{" "}
            </h3>{" "}
            <p className="text-purple font-medium">
              {" "}
              Full Stack MERN Developer{" "}
            </p>{" "}
            <p className="text-gray-400 leading-relaxed text-sm">
              {" "}
              Passionate about building scalable, secure, and modern web
              applications using React.js, Node.js, Express.js, and MongoDB.
              Focused on creating impactful digital experiences and solving
              real-world problems through technology.{" "}
            </p>{" "}
          </motion.div>{" "}
          {/* QUICK LINKS */}{" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {" "}
            <h3 className="text-xl font-semibold text-white">
              {" "}
              Quick Links{" "}
            </h3>{" "}
            <div className="flex flex-col gap-3 text-sm">
              {" "}
              <a href="#home" className="hover:text-purple transition">
                {" "}
                Home{" "}
              </a>{" "}
              <a href="#about" className="hover:text-purple transition">
                {" "}
                About{" "}
              </a>{" "}
              <a href="#skills" className="hover:text-purple transition">
                {" "}
                Skills{" "}
              </a>{" "}
              <a href="#projects" className="hover:text-purple transition">
                {" "}
                Projects{" "}
              </a>{" "}
              <a href="#contact" className="hover:text-purple transition">
                {" "}
                Contact{" "}
              </a>{" "}
            </div>{" "}
          </motion.div>{" "}
          {/* CONNECT */}{" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {" "}
            <h3 className="text-xl font-semibold text-white">
              {" "}
              Connect With Me{" "}
            </h3>{" "}
            <p className="text-gray-400 text-sm">
              {" "}
              Open to internships, freelance projects, and full-time
              opportunities.{" "}
            </p>{" "}
            <div className="flex items-center gap-5 text-2xl">
              {" "}
              <a
                href="https://github.com/patil-bhupendra"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple transition"
              >
                {" "}
                <FaGithub />{" "}
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/patil-bhupendra"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple transition"
              >
                {" "}
                <FaLinkedin />{" "}
              </a>{" "}
              <a
                href="https://x.com/BhupendraR97314"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple transition"
              >
                {" "}
                <FaXTwitter />{" "}
              </a>{" "}
              <a
                href="mailto:bhupendrarajput1232@gmail.com"
                className="hover:text-purple transition"
              >
                {" "}
                <FaEnvelope />{" "}
              </a>{" "}
            </div>{" "}
            <p className="text-sm text-gray-400">
              {" "}
              bhupendrarajput1232@gmail.com{" "}
            </p>{" "}
          </motion.div>{" "}
        </div>{" "}
        {/* Divider */}{" "}
        <div className="border-t border-white/10 mt-10 pt-6">
          {" "}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-gray-500 text-sm"
          >
            {" "}
            © {new Date().getFullYear()} Bhupendra Patil. Built with React,
            Tailwind CSS, and Framer Motion.{" "}
          </motion.p>{" "}
        </div>{" "}
      </div>{" "}
      {/* Back To Top */}{" "}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className=" fixed bottom-6 right-6 p-3 rounded-full bg-purple text-white shadow-lg hover:bg-purple/80 transition-all duration-300 z-50 "
      >
        {" "}
        <FaArrowUp />{" "}
      </motion.button>{" "}
    </footer>
  );
};
export default Footer;
