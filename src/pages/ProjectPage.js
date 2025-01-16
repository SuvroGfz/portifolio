import React from "react";
import { useParams, Link } from "react-router-dom";

import { projects } from "../data/data";
const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(projectId));

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="">
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary"
                onClick={() => window.location.href=`/`}
            >Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
