import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import ProjectCard from "./ProjectCard";

// Project Data (can be moved to /src/data/projects.js if you want)
const projects = [
  {
    title: "Stock Trading Platform",
    description:
      "A full-stack MERN virtual trading platform with orders, funds, watchlist, and charts.",
    image: "/stock.png",
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "Redux"],
    demo: "https://stock-trading-platform-puce.vercel.app",
    github: "https://github.com/bhupendrapatil123/Stock-Trading-Platform",
  },
  {
    title: "Bookstore Web App",
    description:
      "MERN bookstore app with authentication, cart, checkout, and admin dashboard.",
    image: "/bookstore.png",
    tech: ["React", "Express", "MongoDB", "JWT", "Redux"],
    demo: "https://book-store-camp.vercel.app/",
    github: "https://github.com/bhupendrapatil123/bookStoreApp",
  },
  {
    title: "Wanderlust",
    description:
      "Travel listing website inspired by Airbnb with full CRUD and authentication.",
    image: "/wanderlust.png",
    tech: ["HTML", "CSS", "Node.js", "Express", "MongoDB"],
    demo: "https://wanderlust-hub.vercel.app/listings",
    github: "https://github.com/bhupendrapatil123/Wanderlust-App",
  },
];

const Projects = () => {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Projects</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A selection of my recent work
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
            >
              <ProjectCard {...project} alt={project.title} />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/patil-bhupendra?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300 text-purple"
          >
            <span>View More Projects</span>
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
