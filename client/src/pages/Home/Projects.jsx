import React from "react";
import ProjectsCard from "../../components/ProjectsCard";

const Projects = () => {
  // projects data
  const projects = [
    {
      id: 1,
      name: "BD Tour",
      image: "/images/projects/bd-tour.png",
      live: "https://tourist-guide-jaman-shah.web.app",
      client: "https://github.com/Jaman-Shah/bd-tour-client",
      server: "https://github.com/Jaman-Shah/bd-tour-server",
      description:
        "BD Tour provides world best tours from Bangladesh. A tourist can book a tour under a guide and enjoy their tour from Bangladesh.",
      coreFeatures: [
        "A Tourist can book tour.",
        "This website have Dashboard for 3 roles. Tourist, Guide and Admin.",
        "Tourist can pay with the help of Stripe.",
      ],
      technologiesUsed: [
        "React",
        "Node.js",
        "TailwindCSS",
        "MongoDB",
        "Express.js",
      ],
    },
    {
      id: 2,
      name: "Tastify",
      image: "/images/projects/tastify.png",
      live: "https://tastify-da963.web.app",
      client: "https://github.com/Jaman-Shah/tastify-client",
      server: "https://github.com/Jaman-Shah/tastify-server",
      description:
        "Tastify Website is a food selling website. Here people can buy tasty foods and order foods.",
      coreFeatures: [
        "A user can order food.",
        "A user can add a food item.",
        "There is a search functionality in the all food section.",
      ],
      technologiesUsed: [
        "React",
        "Node.js",
        "TailwindCSS",
        "MongoDB",
        "Express.js",
      ],
    },
    {
      id: 3,
      name: "Artisan Space",
      image: "/images/projects/artisan-space.png",
      live: "https://artisan-space.web.app",
      client: "https://github.com/Jaman-Shah/artisan-space-client",
      server: "https://github.com/Jaman-Shah/artisan-space-server",
      description: "Artisan Space provides best arts and crafts of the world.",
      coreFeatures: [
        "A user can add arts and crafts.",
        "A user can toggle dark and light mode to whole website.",
        "A user can operate CRUD operations.",
      ],
      technologiesUsed: [
        "React",
        "Node.js",
        "TailwindCSS",
        "MongoDB",
        "Express.js",
      ],
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h1 className="font-thin text-[50px]"> My Recent Projects </h1>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {projects &&
          projects.map((project) => {
            return <ProjectsCard key={project.id} project={project} />;
          })}
      </div>
    </div>
  );
};

export default Projects;
