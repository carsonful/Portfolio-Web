import React, { useState, useEffect } from 'react';
import './Welcome.css';

const Welcome: React.FC = () => {
    const [text, setText] = useState('');
    const fullText = "Carson Fulmer";
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    const scrollNext = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'ArrowDown' || event.key === 'Enter') {
            scrollNext();
        }
    };

    return (
        <section className={`welcome-section ${isVisible ? 'fade-in' : ''}`}>
            <div className="welcome-content">
                <h1 className="welcome-title">
                    Welcome, I'm{' '}
                    <span className="nameHighlight">
                        {text}
                        <span className="cursor">|</span>
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
                className="scroll-arrow"
                aria-label="Scroll to next section"
            >
                <div className="arrow-down"></div>
            </button>
        </section>
    );
};

export default Welcome;