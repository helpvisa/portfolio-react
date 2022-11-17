import React from 'react';

function Contact() {
    return (
        <div style={{width: '100%'}}>
            <footer id="contact">
                <div className="section-header">
                    <div className="section-divider-left"></div>
                    <h2><span className="brighter"><span className="no-italic">// </span>co</span>ntact <span className="brighter"><span
                                className="no-italic">//</span></span></h2>
                    <div className="section-divider-right"></div>
                </div>
            
                <div className="card-container contact">
                    <a href="tel:416-723-7564">
                        <div className="card">
                            <div className="description">
                                <p>phone</p>
                            </div>
                        </div>
                    </a>

                    <a href="mailto:daniel.brackenbury@gmail.com">
                        <div className="card">
                            <div className="description">
                                <p>email</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://github.com/helpvisa" target="_blank">
                        <div className="card">
                            <div className="description">
                                <p>github</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/daniel-brackenbury-277a0122b/" target="_blank">
                        <div className="card">
                            <div className="description">
                                <p>linkedin</p>
                            </div>
                        </div>
                    </a>
                </div>
            </footer>

            {/* inputs for contact section: name, email, message */}
        </div>
    );
}

export default Contact;
