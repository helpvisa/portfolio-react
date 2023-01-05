import React, { useState } from 'react';

// import our components
import Form from './Form';

// import our resume document for download
// todo

function Contact() {
    return (
        <div style={{width: '100%'}}>
            <section id="contact">
                <div className="section-header">
                    <div className="section-divider-left"></div>
                    <h2><span className="brighter"><span className="no-italic">//</span>co</span>ntact
                                <span className="brighter"> & re</span>sume <span className="brighter"><span
                                className="no-italic">//</span></span></h2>
                    <div className="section-divider-right"></div>
                </div>
            </section>

            {/* comment out the contact form */}
            <div class="form-container">
                {/* resume download link goes here */}
                <a className="resume" href="https://drive.google.com/uc?export=download&id=1aa65f5F-yDFX1EDJ_oJFZhNQ5ci57bdw"><p className="resume-text">Download Resume</p></a>
                {/* <Form></Form> */}
            </div>
        </div>
    );
}

export default Contact;
