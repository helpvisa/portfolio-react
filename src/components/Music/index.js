import React from 'react';

function Music() {
    return (
        <section className="music" id="music">
            <div className="section-header">
                <div className="section-divider-left"></div>
                <h2><span className="brighter"><span className="no-italic">//</span>mu</span>sic <span className="brighter"><span className="no-italic">//</span></span></h2>
                <div className="section-divider-right"></div>
            </div>

            <div className="card-container">
                <div className="card">
                    <iframe
                        src="https://bandcamp.com/EmbeddedPlayer/album=3007342334/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/transparent=true/"
                        seamless>
                        <a href="https://danbrack.bandcamp.com/album/13-radio-rock-hits">13 radio rock hits by dan
                            brack</a></iframe>
                    <div className="border-right"></div>
                    <div className="description">
                        <h3>13 Radio Rock Hits</h3>
                        <h4>Writing, recording, mixing, and mastering</h4>
                        <p>
                            <a href="https://danbrack.bandcamp.com/album/13-radio-rock-hits" target="_blank">Available on bandcamp↝</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Music;
