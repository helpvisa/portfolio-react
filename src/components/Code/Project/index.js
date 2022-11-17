// modular project component used for rendering individual projects from the Code page
import React from 'react';

function Project(props) {
    const {
        name,
        description,
        link,
        link_desc,
        image,
        image_alt,
    } = props;

    return (
        <div className="card">
            <div className="description only-when-big">
                <h3>{name}</h3>
                <h4>{description}</h4>
                <p>
                    <a href={link} target="_blank">{link_desc}</a>
                </p>
            </div>
            <div className="border-left"></div>
            <a href={link} target="_blank" className="image-link">
                <img src={require(`../../../assets/images/${image}`)}
                    alt={image_alt} />
            </a>
            <div className="border-right"></div>
            <div className="description only-when-small">
                <h3>{name}</h3>
                <h4>{description}</h4>
                <p>
                    <a href={link} target="_blank">{link_desc}</a>
                </p>
            </div>
        </div>
    )
}

export default Project;
