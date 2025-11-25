import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaServer,
  FaDatabase,
  FaCloud,
  FaTools,
} from "react-icons/fa";

const skills = [
  {
    icon: FaReact,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React.js", "Redux"],
  },
  {
    icon: FaServer,
    title: "Backend Development",
    description:
      "Developing scalable backend systems and RESTful APIs for web applications.",
    tags: ["Node.js", "Express", "REST API"],
  },
  {
    icon: FaDatabase,
    title: "Database Management",
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    icon: FaCloud,
    title: "Cloud & DevOps",
    description:
      "Deploying and managing cloud applications and infrastructure.",
    tags: ["AWS", "Docker", "CI/CD"],
  },
  {
    icon: FaTools,
    title: "Tools & Technologies",
    description:
      "Using essential tools to improve development efficiency and workflow.",
    tags: ["Git", "GitHub", "Figma", "Webpack"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Skills</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies I work with to bring ideas to life
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="
                backdrop-blur-xl bg-dark-300/40 
                border border-white/10 
                shadow-lg rounded-2xl p-6
                hover:shadow-purple/30 hover:border-purple/30
                transition-all duration-300 cursor-pointer
              "
            >
              {/* Icon + Title */}
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-dark-400/60 border border-white/10 mr-4">
                  <skill.icon className="w-7 h-7 text-purple" />
                </div>
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-5 leading-relaxed">
                {skill.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-3 py-1 text-sm text-gray-300
                      bg-dark-400/40 border border-white/10
                      rounded-md backdrop-blur-md
                      hover:bg-purple/20 hover:text-white
                      transition-all duration-200
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
