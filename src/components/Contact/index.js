import React, { useState } from 'react';

// import our components
import Form from './Form';

// import our resume document for download
import Resume from '../../assets/BrackenburyDan_Resume2023.pdf';

function Contact() {
    return (
        <div style={{width: '100%'}}>
            <section id="contact">
                <div className="section-header">
                    <div className="section-divider-left"></div>
                    <h2><span className="brighter"><span className="no-italic">//</span>ex</span>perience
                                <span className="brighter"> & re</span>sume <span className="brighter"><span
                                className="no-italic">//</span></span></h2>
                    <div className="section-divider-right"></div>
                </div>
            </section>

            {/* comment out the contact form */}
            <div className="form-container">
                <section className="card-container">
                    <div className="card">
                        <div className="description only-when-big">
                            <h3>UofT SCS Coding Bootcamp</h3>
                            <h4>June - December 2022</h4>
                            <p>6-month intensive directed at learning the web and gaining fluency with the MERN stack.</p>
                        </div>
                        <div className="description only-when-small">
                            <h3>University of Toronto SCS Coding Bootcamp</h3>
                            <h4>June - December 2022</h4>
                            <p>6-month intensive directed at learning the web and gaining fluency with the MERN stack.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="description only-when-big">
                            <h3>Toronto Metropolitan University</h3>
                            <h4>2015 - 2020</h4>
                            <p>
                                BFA in the Image Arts program with specialization in sound design and audio production;
                                years of experience freelancing in film and working collaboratively
                                with large and diverse teams of creators.
                            </p>
                        </div>
                        <div className="description only-when-small">
                            <h3>Toronto Metropolitan University</h3>
                            <h4>2015 - 2020</h4>
                            <p>
                                BFA in the Image Arts program with specialization in sound design and audio production;
                                years of experience freelancing in film and working collaboratively
                                with large and diverse teams of creators.
                            </p>
                        </div>
                    </div>
                </section>
                {/* resume download link goes here */}
                <div className="resume-container">
                    <a className="resume" href={Resume}><p className="resume-text">Download Resume</p></a>
                    <a className="contact-email" href="mailto:daniel.brackenbury@gmail.com" target="_blank">daniel.brackenbury@gmail.com</a>
                </div>
                {/* <Form></Form> */}
            </div>
        </div>
    );
}

export default Contact;
