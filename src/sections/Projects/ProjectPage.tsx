import React, { useState } from 'react';
import './ProjectPage.css';

type ProjectCategory = 'Personal' | 'Collaborative' | 'Research' | 'All';
type ProjectCategoryWithoutAll = Exclude<ProjectCategory, 'All'>;

interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategoryWithoutAll[];
  tech: string[];
  links: {
    github: string;
  };
}

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const projects: Project[] = [
    {
      id: 1,
      title: "Global Health Analysis",
      description: "Global Health Analysis is a tool to compare populations affected by certain diseases over the past 24 years. The different type of diseases include Alzheimer's, Asthma, COVID-19, Cancer, Cholera, Dengue, Diabetes, Ebola, HIV/AIDS, Hepatitis, Hypertension, Influenza, Leprosy, Malaria, Measles, Parkinson's, Polio, Rabies, Tuberculosis, Zika.",
      category: ["Personal"],
      tech: ["React", "TypeScript", "Node.js", "C++"],
      links: {
        github: "https://github.com/carsonful/World-Disease-Analysis",      }
    },
    {
      id: 2,
      title: "Starcrosser",
      description: "The size and properties of interstellar space are often incorrectly perceived or understood, as a result of our struggle with comprehending extremely large or small things. Our goal is to build a program that helps users visualize extremely large distances in space, particularly between observed star systems.",
      category: ["Research", "Collaborative"],
      tech: ["C++", "QTCreator"],
      links: {
        github: "https://github.com/carsonful/Starcrosser",
      }
    },
    {
      id: 3,
      title: "Canvas Calendar",
      description: "This program allows for users to acquire their To-Do Assignments on Canvas and have a message be sent through SMS as well as giving the weather, and a motivational quote. This program does not run on it's own. I suggest using a crontab on a VM to achieve equivalent output.",
      category: ["Personal"],
      tech: ["Python", "CanvasAPI", "Google Cloud Platform"],
      links: {
        github: "https://github.com/carsonful/canvascalendar",
      }
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "What you're looking at rightn now is my portfolio website! I built this site to showcase my projects and skills as a developer.",
      category: ["Personal"],
      tech: ["React", "TypeScript", "Node.js", "Netlify", "GitHub Actions"],
      links: {
        github: "https://github.com/carsonful/Portfolio-Web",
      }
    },
    {
      id: 5,
      title: "Concurrent Game of Life (WIP)",
      description: "Ponylang is an actor and object oriented language that excels in leveraging its inherent concurrent model of execution. Implementing clean code, in case of needing to scale up our design.",
      category: ["Research", "Collaborative"],
      tech: ["PonyLang", "Concurrent Programming"],
      links: {
        github: "https://github.com/username/project",
      }
    },
    {
      id: 7,
      title: "Class Playlist Generator",
      description: "This program allows a user to read a discussion in canvas, and retrieve its entries, a discussion with replies of song names will be broken up into a list and searched by the spotify api, this is then added to the playlist, it does not allow duplicate songs to be added",
      category: ["Personal"],
      tech: ["Python", "SpotifyAPI", "CanvasAPI"],
      links: {
        github: "https://github.com/carsonful/Class-Playlist-Maker",
      }
    },
    // Add more projects here
  ];

  const filterProjects = (projects: Project[], filter: ProjectCategory) => {
    if (filter === 'All') return projects;
    return projects.filter(project => project.category.includes(filter));
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;