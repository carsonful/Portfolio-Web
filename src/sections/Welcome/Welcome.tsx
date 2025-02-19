import React from 'react';
import './Welcome.css';

const Welcome = () => {

    const scrollNext = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'down' || event.key === 'Enter') {
            scrollNext();
        }
    };



  return (
    <section className="welcome-section">
        <div className ="welcome-content">
            <h1 className ="welcome-title">
                Welcome, I'm{' '}
                <span className="nameHighlight">
                    Carson Fulmer
                </span>
            </h1>
            <p className="welcome-description">
                I'm an Undergraduate Student at the University of Florida, pursuing a degree in Computer Science.
                I have a passion for software development and a keen interest in rising tech.
            </p>
        </div>
        <button
        onClick={scrollNext}
        onKeyDown={handleKeyDown}
        className= "scroll-arrow"
        aria-label="Scroll to next section"
        >
            <div className ="arrow-down"></div>
        </button>
    </section>
  );


};

export default Welcome;