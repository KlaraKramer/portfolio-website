import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { id: 1, title: 'Project One', summary: 'A short description of Project One', image: '/path/to/image1.jpg' },
  { id: 2, title: 'Project Two', summary: 'A short description of Project Two', image: '/path/to/image2.jpg' },
  // Add more projects as needed
];

function Projects() {
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