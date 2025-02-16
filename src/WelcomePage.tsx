import './WelcomePage.css';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from './actions/constants/defined';
import { handleClick } from './actions/buttonClicks';
function WelcomePage() {


  const navigate = useNavigate();







  return (
    <div className="welcome-container">
      {/* Left Section */}
      <div className="welcome-left">
        <h1>Hey, I'm Carson</h1>
        <p className = "welcome-text">
          I'm a student attending the University of Florida set 
          to graduate in 2026. I am currently pursuing a degree in Computer Science.
          Please feel free to check out more abnout me and my work.



        </p>
        <button className="btn" onClick={handleClick(navigate, ROUTES.CONTACT)}>Contact Me</button>

      </div>

      {/* Right Section */}
      <div className="welcome-right">
        <h2>LEARN ABT ME</h2>
        <div className="button-container">

          <button className="btn" onClick={handleClick(navigate, ROUTES.RESUME)}>           
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          Resume
          </button>

          <button className="btn" onClick={handleClick(navigate, ROUTES.GITHUB)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          GitHub
          </button>
          
          <button className="btn" onClick={handleClick(navigate, ROUTES.PROJECTS)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
              <path d="M2 9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9z"></path>
              <path d="M14 7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V7z"></path>
              <rect x="8" y="2" width="8" height="5" rx="1"></rect>
            </svg>Projects
          </button>

          <button className="btn" onClick={handleClick(navigate, ROUTES.LINKEDIN)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          LinkedIn
          </button>


        </div>
      </div>
    </div>
  );
}

export default WelcomePage;