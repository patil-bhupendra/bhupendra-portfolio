import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaLaptopCode, FaCode, FaLightbulb } from "react-icons/fa";
import { assets } from "../assets/assets";

// About info data
const aboutInfo = [
  {
    icon: FaUserTie,
    title: "Professional",
    description: "I have over 5 years of experience building web apps.",
  },
  {
    icon: FaLaptopCode,
    title: "Full-Stack Developer",
    description: "I specialize in MERN stack and modern web technologies.",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description: "I write scalable and maintainable code.",
  },
  {
    icon: FaLightbulb,
    title: "Innovative",
    description: "I enjoy solving complex problems creatively.",
  },
];

// Animation variants
const cardContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};
const cardItem = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

// Floating orb animation
const orbAnimation = {
  y: [0, -20, 10, 0],
  x: [0, 10, -10, 0],
  rotate: [0, 15, -15, 0],
  scale: [1, 1.05, 0.95, 1],
  background: [
    "linear-gradient(135deg, #8b5cf6, #c084fc)",
    "linear-gradient(135deg, #c084fc, #8b5cf6)",
    "linear-gradient(135deg, #8b5cf6, #a78bfa)",
    "linear-gradient(135deg, #a78bfa, #8b5cf6)",
  ],
  transition: { duration: 12, repeat: Infinity, ease: "easeInOut" },
};

// Generate lightweight particles
const generateParticles = (count = 30) =>
  Array.from({ length: count }).map(() => ({
    size: Math.random() * 3 + 2, // 2–5px
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    delay: Math.random() * 5,
  }));

const About = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles] = useState(generateParticles());

  const handleMouseMove = (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    setMousePos({
      x: (e.clientX - centerX) / 50,
      y: (e.clientY - centerY) / 50,
    });
  };

  const orbs = [
    { size: "w-40 h-40", top: "top-10", left: "left-10", depth: 1.5 },
    { size: "w-32 h-32", top: "top-60", left: "right-20", depth: 1 },
    { size: "w-48 h-48", top: "bottom-20", left: "left-1/3", depth: 0.6 },
  ];

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="relative py-20 bg-dark-200 overflow-hidden"
    >
      {/* Orb + particle layer */}
      <motion.div
        style={{ perspective: 1000 }}
        animate={{
          rotateY: mousePos.x * 0.5,
          rotateX: -mousePos.y * 0.5,
          transition: { type: "spring", stiffness: 50, damping: 20 },
        }}
        className="absolute inset-0"
      >
        {/* Floating orbs */}
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            className={`${orb.size} absolute rounded-full ${orb.top} ${orb.left}`}
            animate={orbAnimation}
            style={{
              zIndex: 0,
              filter: "blur(25px)",
              opacity: 0.4,
              transform: `translate(${mousePos.x * orb.depth}px, ${
                mousePos.y * orb.depth
              }px)`,
            }}
          />
        ))}

        {/* Particle sparks */}
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-60"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              top: p.top,
              left: p.left,
              zIndex: 0,
              filter: "blur(1px)",
            }}
            animate={{
              y: ["0%", "-10%", "0%"],
              x: ["0%", "5%", "-5%", "0%"],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "mirror",
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-purple">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:w-1/2 relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-transparent to-transparent opacity-30 z-10 rounded-2xl" />
            <img
              src={assets.profileImg}
              alt="Profile"
              className="w-full h-full object-cover rounded-2xl relative z-20"
            />
          </motion.div>

          {/* Text + Cards */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6">
                I am a passionate full-stack developer, creating innovative
                digital solutions for businesses worldwide.
              </p>
              <p className="text-gray-300 mb-12">
                When I'm not coding, I explore new technologies, contribute to
                open-source, and write tech blogs.
              </p>

              {/* Cards */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={cardContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {aboutInfo.map((data, i) => (
                  <motion.div
                    key={i}
                    variants={cardItem}
                    whileHover={{
                      y: -8,
                      scale: 1.05,
                      boxShadow:
                        "0 0 25px rgba(139,92,246,0.6), 0 0 50px rgba(139,92,246,0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-dark-300 rounded-2xl p-6 cursor-pointer"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        rotate: 10,
                        textShadow:
                          "0 0 10px rgba(139,92,246,0.8), 0 0 20px rgba(139,92,246,0.5)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="text-purple text-4xl mb-4"
                    >
                      <data.icon />
                    </motion.div>

                    <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                    <p className="text-gray-400">{data.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
