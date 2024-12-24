import React from 'react';
import './Home.css';

function Home() {
    return (
      <div className="home">
          <div className="profile-section">
              <div className="profile-header">
                  <img src="/klarakNew.png" alt="Klara Krämer" className="profile-image" />
                  <h2>Welcome to My Portfolio!</h2>
              </div>
              <div className="profile-content">
                    <div c    lassName="profile-text">
                        <p>Hello! I am a <b>Data Analyst</b> and <b>Software Engineer</b> with experience in deriving data-driven insights and developing innovative solutions.</p>
                        <p><a href="/projects"><u>Explore my projects to learn more about my work in data science, business intelligence, and software development.</u></a></p>
                    </div>
                    <div>
                        <h3>Linguistic Proficiencies</h3>
                        <div className="flags-section">
                            <img src="/germanFlag.png" alt="German flag" className="flag-image" title="German: Native or bilingual proficiency" />
                            <img src="/britishFlag.png" alt="British flag" className="flag-image" title="English: Native or bilingual proficiency" />
                            <img src="/frenchFlag.png" alt="French flag" className="flag-image" title="French: Limited working proficiency" />
                            <img src="/dutchFlag.png" alt="Dutch flag" className="flag-image" title="Dutch: Limited working proficiency" />
                        </div>
                    </div>
                    <div>
                        <h3>Programming Skills</h3>
                        <p>Python, Java, C, R, SQL, JavaScript, Matlab, HTML, React, Microsoft DAX</p>
                        <br />
                        <div className="logo-section">
                            <img src="/python.png" alt="Python logo" className="logo-image" title="Python" />
                            <img src="/java.png" alt="Java logo" className="logo-image" title="Java" />
                            <img src="/c.png" alt="C logo" className="logo-image" title="C" />
                            <img src="/r.png" alt="R logo" className="logo-image" title="R" />
                            <img src="/sql.png" alt="SQL logo" className="logo-image" title="SQL" />
                            <img src="/javascript.png" alt="JavaScript logo" className="logo-image" title="JavaScript" />
                            <img src="/matlab.png" alt="Matlab logo" className="logo-image" title="Matlab" />
                            <img src="/html.png" alt="HTML logo" className="logo-image" title="HTML" />
                            <img src="/logo192.png" alt="React logo" className="logo-image" title="React" />
                            <img src="/dax.png" alt="Microsoft DAX logo" className="logo-image" title="Microsoft DAX" />
                        </div>
                    </div>
                    <div>
                        <h3>Other Skills</h3>
                        <p>Wide-ranging and adaptable <b>analytical skills</b></p>
                        <p>Excellence in <b>Microsoft Office</b>, including extensive skills in Microsoft Excel and <b>Power BI</b></p>
                        <p><b>Interpersonal skills:</b> Experience in leading groups and teams, outstanding organisational skills</p>
                        <p><b>Resilience</b> and <b>reliability</b></p>               
                  </div>
                  <div>
                        {/* <p><u><b><a href={CV} download="CV" target='_blank'>Download CV</a></b></u></p> */}
                  </div>
              </div>
          </div>
      </div>
    );
  }
  
  export default Home;