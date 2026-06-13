import React from "react";

const ProjectCard = ({ title, description, image, tech, demo, github }) => {
  return (
    <div
      className="
group
h-full
flex
flex-col
backdrop-blur-md
bg-dark-300/60
border border-white/10
rounded-2xl
overflow-hidden
transition-all duration-300
cursor-pointer
hover:-translate-y-2
hover:border-purple/40

"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((item) => (
            <span
              key={item}
              className="
text-xs px-3 py-1 rounded-full
bg-dark-400/40
text-gray-300
border border-white/10
"
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
