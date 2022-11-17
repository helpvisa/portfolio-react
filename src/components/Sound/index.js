import React from 'react';

// import videos json
import videos from '../../assets/videos/videos.json';

// import components
import Video from './Video';

function Sound() {
    return (
        <div className="work">
            <section className="sound" id="sound">
                <div className="section-header">
                    <div className="section-divider-left"></div>
                    <h2><span className="brighter"><span className="no-italic">//</span>so</span>und design <span className="brighter"><span className="no-italic">//</span></span></h2>
                    <div className="section-divider-right"></div>
                </div>
                <div className="card-container">
                    {videos.map((video) => (
                        <Video
                            name={video.name}
                            role={video.role}
                            desc={video.desc}
                            video={video.video}
                            key={video.name}
                        ></Video>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Sound;
