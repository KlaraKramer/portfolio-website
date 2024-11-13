import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
  const projects = [
    { id: 1, title: "Project 1", summary: "Summary of Project 1", image: "/path/to/image1.jpg" },
    { id: 2, title: "Project 2", summary: "Summary of Project 2", image: "/path/to/image2.jpg" },
    { id: 3, title: "Project 3", summary: "Summary of Project 3", image: "/path/to/image3.jpg" },
    // Add more projects as needed
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`}>
            <div className="project-tile">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;