import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Let's <span className="text-purple">Connect</span>
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
          I'm actively seeking Full Stack Developer opportunities and exciting
          projects. Feel free to reach out for collaborations, internships,
          freelance work, or professional discussions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="
                    w-full px-4 py-3
                    bg-dark-300
                    border border-dark-400
                    rounded-lg
                    outline-none
                    focus:border-purple
                    transition
                  "
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="
                    w-full px-4 py-3
                    bg-dark-300
                    border border-dark-400
                    rounded-lg
                    outline-none
                    focus:border-purple
                    transition
                  "
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>

                <textarea
                  name="message"
                  placeholder="Write your message..."
                  className="
                    w-full h-40
                    px-4 py-3
                    bg-dark-300
                    border border-dark-400
                    rounded-lg
                    outline-none
                    resize-none
                    focus:border-purple
                    transition
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  w-full
                  px-6 py-3
                  bg-purple
                  rounded-lg
                  font-medium
                  hover:bg-purple/80
                  transition-all duration-300
                "
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Intro Card */}
            <div className="p-6 rounded-xl bg-dark-300 border border-dark-400">
              <h3 className="text-xl font-semibold mb-3">
                Full Stack MERN Developer
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Passionate about building scalable, secure, and responsive web
                applications using React.js, Node.js, Express.js, and MongoDB.
                Open to Full Stack, Frontend, and Backend development
                opportunities.
              </p>

              <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">
                ● Available for Opportunities
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start">
              <div className="text-2xl text-purple mr-4">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-1">Location</h3>
                <p className="text-gray-400">Shirpur, Maharashtra, India</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="text-2xl text-purple mr-4">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-gray-400">bhupendrapatil1232@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <div className="text-2xl text-purple mr-4">
                <FaPhone />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p className="text-gray-400">+91 8378097953</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>

              <div className="flex gap-4">
                <a
                  href="https://github.com/patil-bhupendra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-12 h-12
                    rounded-full
                    bg-dark-300
                    flex items-center justify-center
                    hover:bg-purple
                    transition-all duration-300
                  "
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/patil-bhupendra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-12 h-12
                    rounded-full
                    bg-dark-300
                    flex items-center justify-center
                    hover:bg-purple
                    transition-all duration-300
                  "
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://x.com/BhupendraR97314"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-12 h-12
                    rounded-full
                    bg-dark-300
                    flex items-center justify-center
                    hover:bg-purple
                    transition-all duration-300
                  "
                >
                  <FaXTwitter />
                </a>
              </div>

              <a
                href="mailto:bhupendrapatil1232@gmail.com"
                className="
                  inline-flex items-center gap-2
                  mt-6
                  text-purple
                  hover:underline
                "
              >
                <FaEnvelope />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
