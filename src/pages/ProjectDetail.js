import React from 'react';
import { useParams } from 'react-router-dom';
import './Projects.css';

const projectData = {
  1: { title: "AtRoom - An Indoor Navigation Solution", summary: "An innovative indoor navigation application, which is available under https://www.atroom.at. AtRoom allows easily accessible and comprehensive navigation in spaces such as hospitals, museums, university campuses, shopping malls and the like. It is designed to optimise the path to the desired destination, and takes into account many accessibility issues a user may face in an unknown physical environment.", image: "/atroom_logo.png", details: 'Detailed description of Project One' },
  2: { title: "TIANE - An Open-Source Smart-Home Voice Assistant", summary: "An entirely transparent and trustworthy smart-home assistant that is able to operate an infinite number of rooms within one household. Additional features such as facial recognition allow TIANE to stand out from competitors by allowing users to converse with her even while they are in the process of walking from room to room.", image: "/smartHome.png", details: 'Detailed description of Project Two' },
  3: { title: "Creation of a DynamicReporting Toolfor a New Automated Warehouse", summary: "A real-time reporting system to optimise operations in a newly constructed automated warehouse. The system aimed to address inefficiencies such as material flow bottlenecks, system errors, and lack of real-time visibility by integrating data from various sources, including automation systems and stock management databases. Using Power BI, comprehensive KPIs were created to provide actionable insights for the warehouse control team, enabling data-driven decisions to enhance performance.", image: "/reporting_tool.png", details: 'Description' },
  4: { title: "Analysis of Processes and Potentials within a Technology Retailer’s Logistical Ecosystem", summary: "An extensive analysis of the logistics processes of a technology retailer to identify opportunities for efficiency improvements. Using data from their warehouse management system, several analyses were performed, including stock distribution, order activity patterns, and warehouse bottlenecks. The findings led to 25 actionable improvement suggestions, which were presented to the client to optimise their warehouse operations.", image: "/warehouse.png", details: "Description" },
  5: { title: "Comparative Analysis of Document-Level Embedding Methods for Similarity Scoring", summary: "A comparative study on different embedding methods for document similarity scoring. Assessing document similarity is essential in NLP applications like recommendation systems, where it helps match content to user preferences. This study compares three document embedding methods on complex datasets of Shakespeare sonnets and Taylor Swift lyrics to evaluate each method's reliability, adaptability, and robustness across contrasting text genres.", image: "/nlp.png", details: "Description" }
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
      <img src={project.image} alt={project.title} className="detail-image"/>
      <p><b>{project.summary}</b></p>
      <p>{project.details}</p>
    </div>
  );
}

export default ProjectDetail;