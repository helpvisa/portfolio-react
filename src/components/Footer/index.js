import React from 'react';

// import logo images
import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.png';
import itchio from '../../assets/icons/itchio.png';

function Footer() {
    return (
        <footer className="card-container contact">
            <a href="https://github.com/helpvisa" target="_blank">
                <div className="card">
                    <div className="description">
                        <p>github</p>
                        <img src={github} />
                    </div>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/daniel-brackenbury-277a0122b/" target="_blank">
                <div className="card">
                    <div className="description">
                        <p>linkedin</p>
                        <img src={linkedin} />
                    </div>
                </div>
            </a>

            <a href="https://help-visa.itch.io/" target="_blank">
                <div className="card">
                    <div className="description">
                        <p>itch.io</p>
                        <img src={itchio} />
                    </div>
                </div>
            </a>
        </footer>
    );
}

export default Footer;
