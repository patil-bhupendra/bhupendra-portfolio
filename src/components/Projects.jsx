
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Stock Trading Platform",
    description:
      "Developed a full-stack MERN trading platform featuring holdings, watchlists, fund management, order placement, and real-time portfolio tracking.",
    image: "/stock.png",
    tech: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    demo: "https://stock-trading-platform-puce.vercel.app",
    github: "https://github.com/patil-bhupendra/Stock-Trading-Platform",
  },
  {
    title: "Readora - Bookstore Web Application",
    description:
      "Built a complete MERN e-commerce bookstore with JWT authentication, cart management, checkout flow, order tracking, and admin dashboard.",
    image: "/bookstore.png",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "RTK Query",
    ],
    demo: "https://book-store-camp.vercel.app/",
    github: "https://github.com/patil-bhupendra/bookStoreApp",
  },
  {
    title: "Wanderlust",
    description:
      "Designed an Airbnb-inspired travel platform with property listings, authentication, reviews, image uploads, and complete CRUD functionality.",
    image: "/wanderlust.png",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Bootstrap",
      "Cloudinary",
    ],
    demo: "https://wanderlust-hub.vercel.app/listings",
    github: "https://github.com/patil-bhupendra/Wanderlust-App",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-purple">Projects</span>
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          A showcase of full-stack web applications built using the MERN stack,
          demonstrating expertise in frontend development, backend
          architecture, authentication, database management, and deployment.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} alt={project.title} />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/patil-bhupendra?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              px-6 py-3
              border border-purple
              rounded-lg
              font-medium
              text-purple
              hover:bg-purple/20
              transition-all duration-300
            "
          >
            <span>Explore All Projects</span>
            <FaArrowRight />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
