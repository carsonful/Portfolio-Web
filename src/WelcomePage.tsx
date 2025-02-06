import './WelcomePage.css';

function WelcomePage() {
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
        <button className="btn">Contact Me</button>

      </div>

      {/* Right Section */}
      <div className="welcome-right">
        <h2>LEARN ABT ME</h2>
        <div className="button-container">
          <button className="btn">Resume</button>
          <button className="btn">GitHub</button>
          <button className="btn">Projects</button>
          <button className="btn">LinkedIn</button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;