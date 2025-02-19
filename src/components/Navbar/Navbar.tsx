import { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="nav-links">
          <button
            onClick={() => scrollToSection('welcome')}
            className="nav-button"
          >
            Welcome
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="nav-button"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="nav-button"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="nav-button"
          >
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;