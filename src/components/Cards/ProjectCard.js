import React from "react";
import { useState } from "react";

const CardComponent = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const wordLimit = 10; // Limit the number of words displayed initially

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  // Split the description into words
  const words = project.description.split(" ");
  const limitedDescription = words.slice(0, wordLimit).join(" ");
  const fullDescription = project.description;

  return (
    <div className="card bg-base-300 border-secondary border shadow-secondary w-full h-96 shadow-xl">
      <figure>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body h-40">
        <h2 className="card-title">
          {project.name}
          <div className="badge badge-secondary ml-2">NEW</div>
        </h2>
        <p className="text-sm mt-2">
          {isExpanded ? fullDescription : limitedDescription}
          {words.length > wordLimit && (
            <span
              onClick={toggleDescription}
              className="text-primary cursor-pointer ml-2"
            >
              {isExpanded ? "See Less" : "See More"}
            </span>
          )}
        </p>{" "}
        <div className="card-actions justify-end mt-4">
          {project.badges.map((badge, index) => (
            <a
              key={index}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              className="badge badge-outline cursor-pointer"
            >
              {badge.label}
            </a>
          ))}
          <button className="badge badge-primary hover:badge-outline"
            onClick={() => window.location.href=`/projects/${project.id}`}
            
          >View Project</button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
