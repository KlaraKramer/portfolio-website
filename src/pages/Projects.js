import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
  const projects = [
  { id: 1,
    title: "AtRoom - An Indoor Navigation Solution", 
    summary: "An innovative indoor navigation application, which is available under https://www.atroom.at. AtRoom allows easily accessible and comprehensive navigation in spaces such as hospitals, museums, university campuses, shopping malls and the like. It is designed to optimise the path to the desired destination, and takes into account many accessibility issues a user may face in an unknown physical environment.", 
    image: "/atroom_logo.png", 
    details: 'AtRoom provides an indoor navigation solution designed to improve accessibility and streamline navigation in large or complex indoor environments. It eliminates the need for hardware installation, using a web-based platform where floorplans can be uploaded. Artificial intelligence processes these plans to create a navigational system, which can guide users to their destinations efficiently. This system caters to various needs, including accessibility for people with disabilities, such as wheelchair-friendly routes and audio instructions for visually impaired individuals. AtRoom’s ease of setup, affordability, and flexibility make it an excellent choice for institutions like hospitals, universities, hotels, and museums.', 
    keywords: "indoor navigation | artificial intelligence | web-development" },
  { id: 2,
    title: "TIANE - An Open-Source Smart-Home Voice Assistant", 
    summary: "An entirely transparent and trustworthy smart-home assistant that is able to operate an infinite number of rooms within one household. Additional features such as facial recognition allow TIANE to stand out from competitors by allowing users to converse with her even while they are in the process of walking from room to room.", 
    image: "/smartHome.png", 
    details: 'At the age of 17, I created a digital assistant to address the growing concerns around data security and surveillance together with my brother. While commercial smart–home voice assistants have made everyday tasks more convenient, such as playing specific music or dimming the lights with a simple voice command, we noticed an increasing number of users expressing unease about being "listened to" by these devices. The idea of being constantly monitored by proprietary systems, with little visibility into what data was being collected and how it was used, fueled our desire to develop an alternative solution. With this in mind, we designed TIANE—our own voice-activated assistant that prioritises both functionality and privacy. The core of TIANE’s design lies in its transparency and openness. Unlike commercial voice assistants, we made the decision to release the software as an open-source code. This means that the underlying programming of TIANE is available for anyone to inspect, ensuring transparency and accountability. This approach not only gives users confidence that their data is being handled responsibly, but it also encourages collaboration and further development by the broader tech community. In terms of functionality, TIANE is far more advanced than a typical voice assistant. While she can recognise voices to differentiate between different users in the household, she also incorporates small cameras that enable facial recognition. This feature allows TIANE to accurately identify people throughout the house, enabling it to respond to individuals by name and perform tasks tailored specifically to each person’s preferences. TIANE’s ability to identify both voices and faces provides a level of personalised interaction that enhances the user experience while maintaining a strong commitment to user privacy through its open-source approach.', 
    keywords: "smart-home | natural language processing | speech recognition | open-source development" },
  { id: 3, 
    title: "Creation of a Dynamic Reporting Tool for a New Automated Warehouse", 
    summary: "A real-time reporting system to optimise operations in a newly constructed automated warehouse. The system aimed to address inefficiencies such as material flow bottlenecks, system errors, and lack of real-time visibility by integrating data from various sources, including automation systems and stock management databases. Using Power BI, comprehensive KPIs were created to provide actionable insights for the warehouse control team, enabling data-driven decisions to enhance performance.", 
    image: "/reporting_tool.png", 
    details: 'For a client, I developed a real-time reporting tool to optimise logistics operations at a newly constructed, fully automated warehouse. The warehouse, featuring advanced automation systems and four specialised storage halls, faced significant operational inefficiencies, including bottlenecks, system errors, and poor material flow, all contributing to lower throughput levels. The project aimed to address these challenges by creating a comprehensive reporting system within Power BI, enabling the warehouse control team to access real-time insights into key performance indicators (KPIs) such as throughput, utilization rates, and error occurrences. To accomplish this, I analyzed data from diverse sources, including automation systems, SAP extended warehouse management (EWM) databases, sensor networks, and stock inventories, integrating them into a unified Power BI report. I overcame challenges such as the complexity of the data, language barriers with the customer’s IT team, and the need for automated data updates to ensure the timeliness and relevance of the reports. Through collaboration with the IT team, I established data pipelines, performed data cleaning and transformation, and ultimately created a reporting tool that empowered the warehouse team to make data-driven decisions, improving operational efficiency and system reliability.', 
    keywords: "Power BI | data analytics | real-time reporting system | data source integration and engineering" },
  { id: 4,
    title: "Analysis of Processes and Potentials within a Technology Retailer’s Logistical Ecosystem", 
    summary: "An extensive analysis of the logistics processes of a technology retailer to identify opportunities for efficiency improvements. Using data from their warehouse management system, several analyses were performed, including stock distribution, order activity patterns, and warehouse bottlenecks. The findings led to 25 actionable improvement suggestions, which were presented to the client to optimise their warehouse operations.", 
    image: "/warehouse.png", 
    details: "I analysed the current processes within a technology retailer’s logistics centre and provided recommendations to enhance operational efficiency. The client, a technology retailer operating in both B2B and B2C sectors, faced challenges stemming from changes in order structures and customer behavior, which led to delays in order fulfillment and customer dissatisfaction. I conducted in-depth data analyses using the client’s warehouse management system (WMS) datasets, including material master files, movement and transport data, and sales data, to identify inefficiencies across the warehouse. Using statistical methods and R programming, I analysed warehouse activity patterns, including the distribution of goods movements, order structures, and inventory efficiency. I identified key areas for improvement, such as bottlenecks in order fulfillment and inefficient warehouse layouts, and presented my findings in a comprehensive report. The project culminated in a set of 25 actionable recommendations for improving warehouse processes, which were shared with the client to guide the implementation of the proposed changes.", 
    keywords: "data analytics | logistics consulting | communication with non-technical stakeholders" },
  { id: 5,
    title: "Comparative Analysis of Document-Level Embedding Methods for Similarity Scoring", 
    summary: "A comparative study on different embedding methods for document similarity scoring. Assessing document similarity is essential in NLP applications like recommendation systems, where it helps match content to user preferences. This study compares three document embedding methods on complex datasets of Shakespeare sonnets and Taylor Swift lyrics to evaluate each method's reliability, adaptability, and robustness across contrasting text genres.", 
    image: "/nlp.png", 
    details: "Document similarity assessment is crucial for applications like information retrieval, plagiarism detection, and recommendation systems, relying on the choice of document embedding method to measure similarity in terms of content, structure, and meaning. Traditional methods like TF-IDF capture term relevance but lack the ability to account for contextual relationships between words. More advanced methods, such as Word2Vec and BERT, address this by embedding words into continuous vector spaces, capturing semantic relationships and context. Previous studies have focused on specialized domains like patents, with limited research on how these methods perform for more creative and nuanced text types, such as poetry and song lyrics. This study aims to evaluate the effectiveness of three document embedding techniques—TF-IDF, Averaged Word2Vec, and BERT—on two contrasting datasets: Shakespeare's sonnets and Taylor Swift's lyrics, with the goal of exploring their ability to generate reliable document similarity scores across genres. The project is ongoing, and the experiment itself is currently being conducted. Results will be reported within this month.", 
    keywords: "natural language processing | computing science research | data science" },
  { id: 6,
    title: "Interactive Visual Data Engineering", 
    summary: "This project explores how mixed-initiative, visualisation-driven tools can support users during data engineering by combining human expertise with automated assistance. A prototype assistant was developed and tested in a user study, showing improved task accuracy and usability, especially for non-technical users. The tool's visual and interactive features helped users produce cleaner datasets and complete tasks more easily.", 
    image: "/reporting_tool.png", 
    details: "DETAILS", 
    keywords: "data science | data engineering | computing science research" }
  ]



  return (
    <div className="projects-container">
      {projects.map((project) => (
        <Link key={project.id} to={`/projects/${project.id}`} target="_blank">
            <div key={project.id} className="project-tile">
                <img src={project.image} className="icon-image" alt={project.title}/>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p><u>Keywords:</u> {project.keywords}</p>
            </div>
        </Link>
      ))}
    </div>
  );
}

export default Projects;