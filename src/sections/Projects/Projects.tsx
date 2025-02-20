import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-content">
        <h2 className="projects-title">Projects</h2>
        
        <div className="projects-description">
    <p>
        Here's a collection of things I've built, from solo projects to team collaborations. 
        Each project has taught me something new and helped me learn different ways to problem solve.
    </p>

          
          <div className="project-categories">
    <div className="project-category">
        <h3>Personal Projects</h3>
        <p>Projects I've built on my own to solve problems I care about or just because I thought they'd be fun to make. These show what I like to work on in my free time.</p>
    </div>

    <div className="project-category">
        <h3>Collaborative Projects</h3>
        <p>Projects where I worked with other developers to build something bigger than what one person could do alone. Each person brought their own skills to the table.</p>
    </div>

    <div className="project-category">
        <h3>Research Projects</h3>
        <p>Projects from my coursework that challenged me to think differently and solve interesting problems. These show how I handle complex tasks and apply what I've learned.</p>
    </div>



          </div>
        </div>

        <Link to="/projects" className="projects-button">
          View My Projects
        </Link>
      </div>
    </section>
  );
};

export default Projects;