import React from 'react';
// import videos
import CDL from '../../assets/videos/CDL_HumanNature.mp4';
import Famous from '../../assets/videos/Famous.mp4';

function Sound() {
    return (
        <div className="work">
            <section className="sound" id="sound">
                <div className="section-header">
                    <div className="section-divider-left"></div>
                    <h2><span className="brighter"><span className="no-italic">// </span>so</span>und design <span className="brighter"><span className="no-italic">//</span></span></h2>
                    <div className="section-divider-right"></div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <video controls>
                            <source src={CDL} type="video/mp4"/>
                            Your browser does not support HTML video.
                        </video>
                        <div className="border-right"></div>
                        <div className="description">
                            <h3>CDL - Creative Destruction Lab</h3>
                            <h4>Sound Recording, Mixing, and Design</h4>
                            <p>Dir. Jonah Haber</p>
                        </div>
                    </div>

                    <div className="card">
                        <video controls>
                            <source src={Famous} type="video/mp4"/>
                            Your browser does not support HTML video.
                        </video>
                        <div className="border-right"></div>
                        <div className="description">
                            <h3>Famous: Premium Shopping Experiences</h3>
                            <h4>Post-Production Sound Mixing and Design</h4>
                            <p>Dir. Jonah Haber</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Sound;
