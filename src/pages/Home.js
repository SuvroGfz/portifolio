import React from "react";
import { Link } from "react-router-dom";
import CardComponent from "../components/Cards/ProjectCard";

// Dummy project data
const projects = [
  {
    id: 1,
    name: "Project One",
    description: "This is a description for Project One.",
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    badges: [
      { label: "GitHub", link: "https://github.com/project-one" },
      { label: "Demo", link: "https://demo.project-one.com" },
    ],
  },
  {
    id: 2,
    name: "Project Two",
    description: "This is a description for Project Two.",
    image: "https://img.daisyui.com/images/stock/photo-1606107568387-c8948d60c5f5.webp",
    badges: [
      { label: "GitHub", link: "https://github.com/project-two" },
      { label: "Demo", link: "https://demo.project-two.com" },
    ],
  },
];

const Home = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {/* {projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <CardComponent project={project} />
        </Link>
      ))} */}
    </div>
  );
};

export default Home;
