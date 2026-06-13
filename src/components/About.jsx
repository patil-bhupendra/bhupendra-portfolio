import React from "react";
import { FaLaptopCode, FaCode, FaLightbulb } from "react-icons/fa";
import { assets } from "../assets/assets";

const aboutInfo = [
  {
    icon: FaLaptopCode,
    title: "Full Stack Developer",
    description:
      "Building modern web applications from frontend interfaces to backend APIs.",
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
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-dark-200 to-dark-300 overflow-hidden"
    >
      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About</h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          MCA graduate and Full Stack Developer focused on building scalable,
          responsive, and production-ready web applications.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-14">
          {/* Profile Image */}
          <div className="md:w-[45%] h-[500px] relative rounded-3xl overflow-hidden border border-white/10 shadow-xl">
            <img
              src={assets.profileImg7}
              alt="About Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:w-[60%]">
            <div className="rounded-3xl p-8 bg-dark-400/60 backdrop-blur-sm shadow-2xl border border-white/10">
              <p className="text-gray-200 mb-6 text-lg leading-relaxed">
                I'm a Full Stack Developer with hands-on experience building
                modern web applications using the MERN stack. I enjoy
                transforming ideas into real-world solutions through clean,
                maintainable code and intuitive user experiences.
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
                  <p className="text-sm text-gray-400">Production Projects</p>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-purple-400">
                    Full Stack
                  </h3>
                  <p className="text-sm text-gray-400">Development</p>
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
                    className="bg-dark-300
rounded-2xl
p-6
border border-white/10
hover:border-purple/40
transition-all duration-300"
                  >
                    <div className="text-white text-3xl mb-4">
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
