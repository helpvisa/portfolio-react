import React from 'react';

function Video(props) {
    // destructure props
    const {
        name,
        role,
        desc,
        video
    } = props;

    return (
        <div className="card">
            <video controls>
                <source src={require(`../../../assets/videos/${video}`)} type="video/mp4"/>
                Your browser does not support HTML video.
            </video>
            <div className="border-right"></div>
            <div className="description">
                <h3>{name}</h3>
                <h4>{role}</h4>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default Video;
