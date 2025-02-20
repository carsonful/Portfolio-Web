import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">Contact Me</h2>
        
        <div className="contact-description">
    <p>
        I'm currently exploring new opportunities and collaborations. 
        Whether you have a project in mind, a question about my work, 
        or just want to connect, feel free to reach out!
    </p>
</div>

        <div className="contact-links">
    <a href="mailto:your.email@example.com" className="contact-link">
        <span className="material-icons">mail</span>
        <div>
            <span className="link-title">Email</span>
            <span className="link-subtitle">Let's talk directly</span>
        </div>
    </a>
    
    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
        <span className="material-icons">code</span>
        <div>
            <span className="link-title">GitHub</span>
            <span className="link-subtitle">Check out my code</span>
        </div>
    </a>
    
    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
        <span className="material-icons">work</span>
        <div>
            <span className="link-title">LinkedIn</span>
            <span className="link-subtitle">Let's connect professionally</span>
        </div>
    </a>
</div>
      </div>
    </section>
  );
};

export default Contact;