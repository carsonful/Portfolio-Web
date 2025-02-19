import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        
        <div className="about-text">
          <p>
            I'm Carson Fulmer, a <span className="year-Highlight">Computer Science </span> 
            undergraduate at the <span className="year-Highlight">University of Florida</span> set to graduate in the year
            <span className="year-Highlight"> 2026</span>
            . I have a passion for software development and a keen interest in rising tech.
            I enjoy working on projects that challenge my skills and allow me to learn new things.
            Collaborating with others is something I value, as it often leads to innovative solutions and fresh perspectives.

          </p>
        </div>

        {/* Placeholder for additional sections */}
      </div>
    </section>
  );
};

export default About;