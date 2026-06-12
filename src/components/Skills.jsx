import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaServer, FaDatabase, FaTools, FaCode } from "react-icons/fa";

const skills = [
  {
    icon: FaReact,
    title: "Frontend Development",
    description:
      "Building modern, responsive, and user-friendly web applications with React and modern frontend technologies.",
    tags: [
      "React.js",
      "JavaScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    icon: FaServer,
    title: "Backend Development",
    description:
      "Creating secure and scalable RESTful APIs with authentication, authorization, and business logic implementation.",
    tags: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "Authentication",
      "Authorization",
    ],
  },
  {
    icon: FaDatabase,
    title: "Database Management",
    description:
      "Designing and managing efficient databases for full-stack applications with optimized data handling.",
    tags: ["MongoDB", "Mongoose", "Database Design", "CRUD Operations"],
  },
  {
    icon: FaCode,
    title: "Programming & Problem Solving",
    description:
      "Applying strong programming fundamentals and problem-solving skills to build reliable software solutions.",
    tags: [
      "Java",
      "JavaScript",
      "Data Structures",
      "Algorithms",
      "OOP",
      "Problem Solving",
    ],
  },
  {
    icon: FaTools,
    title: "Tools & Deployment",
    description:
      "Using modern development tools, version control systems, and deployment platforms for efficient workflows.",
    tags: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render"],
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Technical <span className="text-purple">Skills</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Technologies and tools I use to build scalable full-stack web
          applications with the MERN stack.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-purple">5+</h3>
            <p className="text-gray-400">Major Projects</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-purple">15+</h3>
            <p className="text-gray-400">Technologies</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-purple">MERN</h3>
            <p className="text-gray-400">Specialization</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-purple">Full Stack</h3>
            <p className="text-gray-400">Developer</p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="
                backdrop-blur-md
                bg-dark-300/40
                border border-white/10
                rounded-2xl
                p-6
                shadow-lg
                hover:border-purple/40
                hover:shadow-purple/20
                transition-all duration-300
                cursor-pointer
              "
            >
              {/* Icon & Title */}
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-dark-400/60 border border-white/10 mr-4">
                  <skill.icon className="w-6 h-6 text-purple" />
                </div>

                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-5">
                {skill.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-3 py-1
                      text-sm
                      text-gray-300
                      bg-dark-400/40
                      border border-white/10
                      rounded-md
                      hover:bg-purple/20
                      hover:text-white
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
