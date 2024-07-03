import React from "react";

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
    <div className="border p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <h1 className="font-bold text-lg mb-2">{name}</h1>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div>
          <h2 className="font-semibold">Features</h2>
          <ul className="list-disc ml-4">
            {coreFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold">Technologies</h2>
          <ul className="list-disc ml-4">
            {technologiesUsed.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold">Image</h2>
          <img src={image} alt={name} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
