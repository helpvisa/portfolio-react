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
                    Avid coder with a passion for technology seeking a career in web development and design.
                    Former sound designer / recording engineer who's spent years working with teams of other creatives
                    to create a broad spectrum of digital content.
                    Experienced in JavaScript, SQL, MongoDB, React, and C#.
                </p>
                <a onClick={() => setCurrentPage('contact')}>daniel.brackenbury@gmail.com</a>
            </section>
        </header>
    );
}

export default About;
