import React, { useState } from 'react';
import './ProjectPage.css';

type ProjectCategory = 'Personal' | 'Collaborative' | 'Research' | 'All';

interface Project {
  id: number;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, 'All'>;
  tech: string[];
  links: {
    github: string;
    live?: string;
  };
}

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  // Sample project data
  const projects: Project[] = [
    {
      id: 1,
      title: "Project Name",
      description: "Detailed description of the project goes here. Explain what the project does, why you built it, and what technologies you used.",
      category: "Personal",
      tech: ["React", "TypeScript", "Node.js"],
      links: {
        github: "https://github.com/username/project",
        live: "https://project-demo.com"
      }
    },
    // Add more projects here
  ];

  const filterProjects = (projects: Project[], filter: ProjectCategory) => {
    if (filter === 'All') return projects;
    return projects.filter(project => project.category === filter);
  };

  const displayedProjects = filterProjects(projects, activeFilter);

  return (
    <div className="projects-page">
      <header className="projects-header">
        <h1>My Projects</h1>
        <p>A collection of my work across different areas of development.</p>
      </header>

      <div className="projects-filters">
        {(['All', 'Personal', 'Collaborative', 'Research'] as ProjectCategory[]).map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {displayedProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h2 className="project-title">{project.title}</h2>

            <p className="project-description">{project.description}</p>
            
            <div className="project-tech">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <span className="material-icons">code</span>
                View Code
              </a>
              {project.links.live && (
                <a 
                  href={project.links.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <span className="material-icons">launch</span>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;