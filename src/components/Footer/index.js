import React from 'react';

// import logo images
import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.png';
import itchio from '../../assets/icons/itchio.png';

function Footer() {
    return (
        <div className="footer-container">
        <footer className="card-container contact">
            <a href="https://github.com/helpvisa" target="_blank">
                <div className="card">
                    <div className="description">
                        <p style={{fontSize: '3vh'}}>github</p>
                    </div>
                    <img src={github} />
                </div>
            </a>

            <a href="https://www.linkedin.com/in/daniel-brackenbury-277a0122b/" target="_blank">
                <div className="card">
                    <div className="description">
                        <p style={{fontSize: '3vh'}}>linkedin</p>
                    </div>
                    <img src={linkedin} />
                </div>
            </a>

            {/* <a href="https://help-visa.itch.io/" target="_blank">
                <div className="card">
                    <div className="description">
                        <p style={{fontSize: '3vh'}}>itch.io</p>
                    </div>
                    <img src={itchio} />
                </div>
            </a> */}
        </footer>
        </div>
    );
}

export default Footer;
