import React, { useState } from "react";
import { FaLaptopCode, FaCode, FaLightbulb } from "react-icons/fa";
import { assets } from "../assets/assets";

const aboutInfo = [
  {
    icon: FaLaptopCode,
    title: "MERN Stack Developer",
    description:
      "Building full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
  },
  {
    icon: FaCode,
    title: "Problem Solver",
    description:
      "Strong foundation in JavaScript, Java, Data Structures, and OOP.",
  },
  {
    icon: FaLightbulb,
    title: "Continuous Learner",
    description:
      "Passionate about learning new technologies and industry best practices.",
  },
  {
    icon: FaLaptopCode,
    title: "Project Experience",
    description:
      "Built Stock Trading Platform, Readora Bookstore, and Wanderlust.",
  },
];

const About = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    setMousePos({
      x: (e.clientX - centerX) / 120,
      y: (e.clientY - centerY) / 120,
    });
  };

  const orbs = [
    {
      size: "w-44 h-44",
      top: "top-10",
      left: "left-10",
      bg: "bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-400 opacity-25",
    },
    {
      size: "w-32 h-32",
      top: "top-60",
      left: "right-20",
      bg: "bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500 opacity-20",
    },
    {
      size: "w-52 h-52",
      top: "bottom-20",
      left: "left-1/3",
      bg: "bg-gradient-to-tl from-indigo-600 via-purple-500 to-pink-400 opacity-15",
    },
  ];

  return (
    <section
      id="about"
      onMouseMove={handleMouseMove}
      className="relative py-28 bg-gradient-to-b from-dark-200 to-dark-300 overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0">
        {orbs.map((orb, i) => (
          <div
            key={i}
            className={`absolute ${orb.size} ${orb.top} ${orb.left} ${orb.bg} rounded-full blur-3xl`}
            style={{
              transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white tracking-wide">
          About <span className="text-purple-400">Me</span>
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-24 text-lg md:text-xl">
          MCA graduate and Full Stack MERN Developer with a passion for building
          scalable, responsive, and user-friendly web applications.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-20">
          {/* Profile Image */}
          <div className="md:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-400 opacity-30 blur-3xl z-0" />

            <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-transparent to-transparent opacity-25 rounded-3xl z-10" />

            <img
              src={assets.profileImg7}
              alt="About Profile"
              className="relative z-20 w-full h-full object-cover rounded-3xl shadow-inner border border-purple-500/20"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2">
            <div className="rounded-3xl p-10 bg-dark-400/70 backdrop-blur-md shadow-2xl border border-purple-500/10">
              <p className="text-gray-200 mb-6 text-lg leading-relaxed">
                I'm a Full Stack MERN Developer with hands-on experience
                building modern web applications using React.js, Node.js,
                Express.js, and MongoDB. I enjoy transforming ideas into
                real-world solutions through clean code and intuitive user
                experiences.
              </p>

              <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                My notable projects include a Stock Trading Platform, a MERN
                Bookstore Application, and Wanderlust — an Airbnb-inspired
                travel platform. I'm passionate about learning new technologies,
                solving challenging problems, and contributing to impactful
                software products.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-purple-400">3+</h3>
                  <p className="text-sm text-gray-400">Major Projects</p>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-purple-400">MERN</h3>
                  <p className="text-sm text-gray-400">Specialization</p>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-purple-400">MCA</h3>
                  <p className="text-sm text-gray-400">Graduate</p>
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, i) => (
                  <div
                    key={i}
                    className="
                      bg-dark-300
                      rounded-2xl
                      p-6
                      cursor-pointer
                      border border-purple-400/20
                      shadow-lg
                      hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]
                      hover:-translate-y-1
                      transition-all
                      duration-300
                    "
                  >
                    <div className="text-white text-4xl mb-4">
                      <data.icon />
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {data.title}
                    </h3>

                    <p className="text-gray-400">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
