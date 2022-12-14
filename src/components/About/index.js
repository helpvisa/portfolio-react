import React from 'react';
import headshot from '../../assets/images/temp_headshot.jpg';

function About({ setCurrentPage }) {
    return (
        <header className="">
            <div className="bg"></div>
            <div className="headshot">
                <a onClick={() => setCurrentPage('contact')}>
                    <img src={headshot} alt="Daniel Brackenbury" />
                </a>
            </div>
            <section className="about-me">
                <h1>\\ about \\</h1>
                <p>
                    Professional developer with a passion for coding, technology,
                    and sound design.
                </p>
                <a onClick={() => setCurrentPage('contact')}>Contact Me</a>
            </section>
        </header>
    );
}

export default About;
