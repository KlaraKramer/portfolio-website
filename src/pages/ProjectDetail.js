import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import ReportingTool from '../DynamicReportingTool.pdf';
import ProcessesAndPotentials from '../AnalysisOfProcessesAndPotentials.pdf';
import ResearchProposal from '../CS4040_Research_Proposal.pdf';

const projectData = {
  1: { title: "AtRoom - An Indoor Navigation Solution", 
       summary: "An innovative indoor navigation application, which is available under https://www.atroom.at. AtRoom allows easily accessible and comprehensive navigation in spaces such as hospitals, museums, university campuses, shopping malls and the like. It is designed to optimise the path to the desired destination, and takes into account many accessibility issues a user may face in an unknown physical environment.", 
       image: "/atroom_logo.png", 
       details: 'AtRoom provides an indoor navigation solution designed to improve accessibility and streamline navigation in large or complex indoor environments. It eliminates the need for hardware installation, using a web-based platform where floorplans can be uploaded. Artificial intelligence processes these plans to create a navigational system, which can guide users to their destinations efficiently.', 
       details2: 'This system caters to various needs, including accessibility for people with disabilities, such as wheelchair-friendly routes and audio instructions for visually impaired individuals. AtRoom’s ease of setup, affordability, and flexibility make it an excellent choice for institutions like hospitals, universities, hotels, and museums.',
       details3: '',
       keywords: "indoor navigation | artificial intelligence | web-development",
       img: "/NavigationScreenshot.jpg",
       alt: "A screenshot showcasing navigation and accessiblity options in AtRoom",
       width: 200 },
  2: { title: "TIANE - An Open-Source Smart-Home Voice Assistant", 
       summary: "An entirely transparent and trustworthy smart-home assistant that is able to operate an infinite number of rooms within one household. Additional features such as facial recognition allow TIANE to stand out from competitors by allowing users to converse with her even while they are in the process of walking from room to room.", 
       image: "/smartHome.png", 
       details: 'At the age of 17, I created a digital assistant to address the growing concerns around data security and surveillance together with my brother. While commercial smart–home voice assistants have made everyday tasks more convenient, such as playing specific music or dimming the lights with a simple voice command, we noticed an increasing number of users expressing unease about being "listened to" by these devices. The idea of being constantly monitored by proprietary systems, with little visibility into what data was being collected and how it was used, fueled our desire to develop an alternative solution.', 
       details2: 'With this in mind, we designed TIANE—our own voice-activated assistant that prioritises both functionality and privacy. The core of TIANE’s design lies in its transparency and openness. Unlike commercial voice assistants, we made the decision to release the software as an open-source code. This means that the underlying programming of TIANE is available for anyone to inspect, ensuring transparency and accountability. This approach not only gives users confidence that their data is being handled responsibly, but it also encourages collaboration and further development by the broader tech community.',
       details3: 'In terms of functionality, TIANE is far more advanced than a typical voice assistant. While she can recognise voices to differentiate between different users in the household, she also incorporates small cameras that enable facial recognition. This feature allows TIANE to accurately identify people throughout the house, enabling her to respond to individuals by name and perform tasks tailored specifically to each person’s preferences. TIANE’s ability to identify both voices and faces provides a level of personalised interaction that enhances the user experience while maintaining a strong commitment to user privacy through the open-source approach.',
       keywords: "smart-home | natural language processing | speech recognition | open-source development",
       img: "/tianeklara.png",
       alt: "TIANE's user interface showing the facial recognition feature",
       width: 400 },
  3: { title: "Creation of a Dynamic Reporting Tool for a New Automated Warehouse", 
       summary: "A real-time reporting system to optimise operations in a newly constructed automated warehouse. The system aimed to address inefficiencies such as material flow bottlenecks, system errors, and lack of real-time visibility by integrating data from various sources, including automation systems and stock management databases. Using Power BI, comprehensive KPIs were created to provide actionable insights for the warehouse control team, enabling data-driven decisions to enhance performance.", 
       image: "/reporting_tool.png", 
       details: 'For a client, I developed a real-time reporting tool to optimise logistics operations at a newly constructed, fully automated warehouse. The warehouse, featuring advanced automation systems and four specialised storage halls, faced significant operational inefficiencies, including bottlenecks, system errors, and poor material flow, all contributing to lower throughput levels. The project aimed to address these challenges by creating a comprehensive reporting system within Power BI, enabling the warehouse control team to access real-time insights into key performance indicators (KPIs) such as throughput, utilization rates, and error occurrences.', 
       details2: 'To accomplish this, I analysed data from diverse sources, including automation systems, SAP extended warehouse management (EWM) databases, sensor networks, and stock inventories, integrating them into a unified Power BI report. I overcame challenges such as the complexity of the data, language barriers with the customer’s IT team, and the need for automated data updates to ensure the timeliness and relevance of the reports. Through collaboration with the IT team, I established data pipelines, performed data cleaning and transformation, and ultimately created a reporting tool that empowered the warehouse team to make data-driven decisions, improving operational efficiency and system reliability.',
       details3: '',
       keywords: "Power BI | data analytics | real-time reporting system | data source integration and engineering",
       img: "/ReportingAGV.png",
       alt: "Sample page of the real-time reporting tool",
       width: 400 },
  4: { title: "Analysis of Processes and Potentials within a Technology Retailer’s Logistical Ecosystem", 
       summary: "An extensive analysis of the logistics processes of a technology retailer to identify opportunities for efficiency improvements. Using data from their warehouse management system, several analyses were performed, including stock distribution, order activity patterns, and warehouse bottlenecks. The findings led to 25 actionable improvement suggestions, which were presented to the client to optimise their warehouse operations.", 
       image: "/warehouse.png", 
       details: "I was tasked with analysing the current processes within a technology retailer’s logistics centre and provide recommendations to enhance operational efficiency. The client, a technology retailer operating in both B2B and B2C sectors, faced challenges stemming from changes in order structures and customer behavior, which led to delays in order fulfillment and customer dissatisfaction.", 
       details2: 'I conducted in-depth data analyses using the client’s warehouse management system (WMS) datasets, including material master files, movement and transport data, and sales data, to identify inefficiencies across the warehouse. Using statistical methods and R programming, I analysed warehouse activity patterns, including the distribution of goods movements, order structures, and inventory efficiency. I identified key areas for improvement, such as bottlenecks in order fulfillment and inefficient warehouse layouts, and presented my findings in a comprehensive report.',
       details3: 'The project culminated in a set of 25 actionable recommendations for improving warehouse processes, which were shared with the client to guide the implementation of the proposed changes.',
       keywords: "data analytics | logistics consulting | communication with non-technical stakeholders",
       img: "/PicksPerDay.png",
       alt: "Sample visualisation: Average picks per day per shelving unit",
       width: 300 },
  5: { title: "Comparative Analysis of Document-Level Embedding Methods for Similarity Scoring", 
       summary: "A comparative study on different embedding methods for document similarity scoring. Assessing document similarity is essential in NLP applications like recommendation systems, where it helps match content to user preferences. This study compares three document embedding methods on complex datasets of Shakespeare sonnets and Taylor Swift lyrics to evaluate each method's reliability, adaptability, and robustness across contrasting text genres.", 
       image: "/nlp.png", 
       details: "Document similarity assessment is crucial for applications like information retrieval, plagiarism detection, and recommendation systems, all of which rely on the choice of a suitable document embedding method to measure similarity in terms of content, structure, and meaning. Traditional methods like TF-IDF capture term relevance but lack the ability to account for contextual relationships between words. More advanced methods, such as Word2Vec and BERT, address this by embedding words into continuous vector spaces, capturing semantic relationships and context.", 
       details2: 'Previous studies have focused on specialised domains like patents, with limited research on how these methods perform on more creative and nuanced text types, such as poetry and song lyrics. This study aims to evaluate the effectiveness of three document embedding techniques—TF-IDF, Averaged Word2Vec, and BERT—on two contrasting datasets: Shakespeare\'s sonnets and Taylor Swift\'s lyrics, with the goal of exploring their ability to generate reliable document similarity scores across genres.',
       details3: 'The project is ongoing, and the experiment itself is currently being conducted. Results will be reported within this month.',
       keywords: "natural language processing | computing science research | data science",
       img: "",
       alt: "",
       width: 0 }
};

const resourceData = {
  1: { title: "AtRoom Website", link: "https://www.atroom.at", 
       title2: "", link2: "",
       awards: [{ id: 1, name: "Intelligent Plant Inform Prize 2023: Best Idea", web: "https://www.linkedin.com/feed/update/urn:li:activity:7122869400692514816/" }]},
  2: { title: "GitHub Repository", link: "https://github.com/KlaraKramer/TIANE",
       title2: "Introductory Blogpost of the Team and Project", link2: "https://mintecdelegationjapan.wordpress.com/2019/07/03/3397/",
       awards: [{ id: 1, name: "2nd Prize “Jugend forscht” Computing Science Nationwide", web: "https://www.jugend-forscht.de/projektdatenbank/tiane-ein-offener-smart-home-sprachassistent.html" },
                { id: 2, name: "Japanese Super Science Highschool Award", web: "https://www.jssf.online/top" },
                { id: 3, name: "“Jugend forscht” Statewide: Best Interdisciplinary Project", web: "https://www.basf.com/global/de/who-we-are/organization/locations/europe/german-sites/ludwigshafen/the-site/news-and-media/news-releases/2019/03/p-19-166" },
                { id: 4, name: "Certificate of Honour at the International Trade Fair “Ideas-Inventions-New Products”", web: "https://www.news4teachers.de/2019/10/hoverboard-staubsauger-bodenduese-sprachassistent-jugend-forscht-auf-der-erfindermesse-iena-2019-in-nuernberg/" }
       ]},
  3: { title: "Project Slides", link: ReportingTool,
       title2: "", link2: "", awards: []
  },
  4: { title: "Project Slides", link: ProcessesAndPotentials, 
       title2: "", link2: "", awards: []
  },
  5: { title: "Research Proposal", link: ResearchProposal,
       title2: "", link2: "", awards: []
  }
}

function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];
  const resources = resourceData[id];

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <div class="content-container">
        <div class="text-section">
          <img src={project.image} alt={project.title} className="detail-image"/>
          <p class="align-text">
            <b>{project.summary}</b>
            <br /><br />
            <u>Keywords:</u> {project.keywords}
            <br /><br />
            {project.details}
          </p>
            {project.details2 === "" ? (
              <div></div>
            ) : (
              <div>
                <p>
                  {project.details2}
                </p>
              </div>
            )}
            {project.details3 === "" ? (
              <div></div>
            ) : (
              <div>
                <p>
                  {project.details3}
                </p>
              </div>
            )}
        </div>
        <figure class="right-aligned-figure">
          <img src={project.img} alt={project.alt} class="figure-image" style={{ width: `${project.width}px` }}/>
          <figcaption class="figure-caption">{project.alt}</figcaption>
        </figure>
      </div>
      {resources.title === "" ? (
        <div></div>
      ) : (
        <div>
          <h3>Links and Resources</h3>
          {typeof resources.link === 'string' ? (
            <Link to={resources.link} target="_blank"><FontAwesomeIcon icon={faLink} style={{color: "#ffffff",}} /> {resources.title}</Link>
          ) : (
            <p><u><b><a href={resources.link} download={resources.title} target='_blank'>{resources.title}</a></b></u></p>
          )
          }
        </div>
      )
      }
      {resources.title2 === "" ? (
        <div></div>
      ) : (
        <div>
            <Link to={resources.link2} target="_blank"><FontAwesomeIcon icon={faLink} style={{color: "#ffffff",}} /> {resources.title2}</Link>
        </div>
      )
      }
      {resources.awards.length === 0 ? (
        <div></div>
      ) : (
        <div>
          <h3>Awards</h3>
          {resources.awards.map((award) => (
            <div>
              <Link to={award.web} target="_blank"><FontAwesomeIcon icon={faLink} style={{color: "#ffffff",}} /> {award.name}</Link>
              <br />
            </div>
          ))
          }
        </div>
      )
      }
    </div>
  );
}

export default ProjectDetail;