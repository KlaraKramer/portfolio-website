import React from 'react';
import { useParams } from 'react-router-dom';

const projectData = {
  1: { title: 'Project One', details: 'Detailed description of Project One', image: '/path/to/image1.jpg' },
  2: { title: 'Project Two', details: 'Detailed description of Project Two', image: '/path/to/image2.jpg' },
  // Add more projects as needed
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <p>{project.details}</p>
    </div>
  );
}

export default ProjectDetail;