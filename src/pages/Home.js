import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
        <div className="profile-section">
            <img src="/klarakNew.png" alt="Klara Krämer" className="profile-image" />
            <div className="profile-content">
                <div className="profile-text">
                    <h2>Welcome to My Portfolio!</h2>
                    <p>Hello! I am a <b>Data Analyst</b> and <b>Software Engineer</b> with experience in developing innovative solutions.</p>
                    <p><a href="/projects">Explore my projects to learn more about my work in data science, business intelligence, and software development.</a></p>
                </div>
                <div className="flags-section">
                    <img src="/germanFlag.png" alt="German flag" className="flag-image" title="German: Native or bilingual proficiency" />
                    <img src="/britishFlag.png" alt="British flag" className="flag-image" title="English: Native or bilingual proficiency" />
                    <img src="/frenchFlag.png" alt="French flag" className="flag-image" title="French: Limited working proficiency" />
                    <img src="/dutchFlag.png" alt="Dutch flag" className="flag-image" title="Dutch: Limited working proficiency" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;