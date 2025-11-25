import React from "react";

const ProjectCard = ({ title, description, image, tech, demo, github }) => {
  return (
    <div
      className="bg-dark-300 rounded-2xl overflow-hidden 
      transition-all duration-300 cursor-pointer border border-dark-100 
      hover:-translate-y-2 hover:shadow-xl hover:shadow-purple/10"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        loading="lazy" 
        className="w-full h-56 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((item) => (
            <span
              key={item}
              className="text-xs px-3 py-1 rounded-full 
              bg-dark-100 text-purple-300 
              border border-purple/20 
              shadow-sm shadow-purple/10"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${title}`}
            className="flex-1 text-center px-4 py-2 
            bg-purple rounded-lg font-medium 
            hover:bg-purple/80 
            transition duration-300"
          >
            View Demo
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code of ${title}`}
            className="flex-1 text-center px-4 py-2 
            border border-purple font-medium rounded-lg 
            hover:bg-purple/20 
            transition duration-300"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
