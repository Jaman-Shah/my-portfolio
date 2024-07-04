import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectsCard = ({ project }) => {
  const {
    id,
    name,
    image,
    live,
    client,
    server,
    description,
    coreFeatures,
    technologiesUsed,
  } = project;

  console.log(name);
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="border p-4 rounded-lg">
          <h1 className="font-bold  text-2xl mb-2 text-center">{name}</h1>
          <p className="text-sm text-gray-600 mb-4 text-center">
            {description}
          </p>
          <div className="flex justify-center space-x-4">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
              >
                <FaExternalLinkAlt />
                <span>Live</span>
              </a>
            )}
            {client && (
              <a
                href={client}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
              >
                <FaGithub />
                <span>Client</span>
              </a>
            )}
            {server && (
              <a
                href={server}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
              >
                <FaGithub />
                <span>Server</span>
              </a>
            )}
          </div>
        </div>
        <div className="border p-4 rounded-lg">
          <h2 className="font-semibold mb-2 text-center">Features</h2>
          <ul className="list-disc ml-4">
            {coreFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="border p-4 rounded-lg">
          <h2 className="font-semibold mb-2 text-center">Technologies</h2>
          <ul className="list-disc ml-4">
            {technologiesUsed.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="border p-4 rounded-lg">
          <img src={image} alt={name} className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
