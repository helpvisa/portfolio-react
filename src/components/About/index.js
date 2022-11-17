import React from 'react';
import headshot from '../../assets/images/temp_headshot.jpg';

function About({ setCurrentPage }) {
    return (
        <header className="bg">
            <div className="bg"></div>
            <div className="headshot">
                <a onClick={() => setCurrentPage('contact')}>
                    <img src={headshot} alt="A portrait of the artist." />
                </a>
            </div>
            <section className="about-me">
                <h1>\\ about \\</h1>
                <p>
                    Professional on-location sound recordist and post-production audio designer
                    with a passion for coding, technology, and interactive design.
                    Graduate of the Toronto Metropolitan University's Image Arts program.
                </p>
                <a onClick={() => setCurrentPage('contact')}>Contact Me</a>
            </section>
        </header>
    );
}

export default About;
