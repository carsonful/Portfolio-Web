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
          <button className="btn" onClick={handleClick(navigate, ROUTES.RESUME)}>Resume</button>
          <button className="btn" onClick={handleClick(navigate, ROUTES.GITHUB)}>GitHub</button>
          <button className="btn" onClick={handleClick(navigate, ROUTES.PROJECTS)}>Projects</button>
          <button className="btn" onClick={handleClick(navigate, ROUTES.LINKEDIN)}>LinkedIn</button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;