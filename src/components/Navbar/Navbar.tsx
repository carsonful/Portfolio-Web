import { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (className: string) => {
    const elements = document.getElementsByClassName(className);
    if (elements.length > 0) {
      elements[0].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'hidden' : ''}`}>
        <div className="nav-links">
          <button onClick={() => scrollToSection('welcome-section')}>Welcome</button>
          <button onClick={() => scrollToSection('about-section')}>About Me</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('contact')}>Contact Me</button>
        </div>
      </nav>

      {/* Home icon that appears on scroll */}
      <div className={`sticky-home ${isScrolled ? 'visible' : ''}`}>
        <span 
          className="material-icons"
          onClick={() => scrollToSection('welcome-section')}
        >
          home
        </span>
      </div>

      {/* Theme toggle that's always visible */}
      <div className="theme-toggle">
        <span 
          className="material-icons"
          onClick={toggleTheme}
        >
          {isDark ? 'light_mode' : 'dark_mode'}
        </span>
      </div>
    </>
  );
};

export default Navbar;