import React from 'react';
// import our sub-modules
import Project from './Project';

// import our photos
import Ray from '../../assets/images/raytracer.jpg';
import Undercurrents from '../../assets/images/undercurrents.jpg';
import Opinionated from '../../assets/images/opinionated.png';
import Trees from '../../assets/images/alien_trees_0.gif';
import Reflection from '../../assets/images/reflection.png';

// import our project definitions
import projects from '../../assets/projects/projects.json';

function Code() {
    return (
        <div className="work">
            <section className="code" id="code">
                <div className="section-header">
                    <div className="section-divider-left"></div>
                    <h2><span className="brighter"><span className="no-italic">//</span>co</span>de <span className="brighter"><span className="no-italic">//</span></span></h2>
                    <div className="section-divider-right"></div>
                </div>
                <div className="card-container">
                    {projects.map((project) => (
                        <Project
                            name={project.name}
                            description={project.description}
                            link={project.link}
                            link_desc={project.link_desc}
                            image={project.image}
                            image_alt={project.image_alt}
                            key={project.name}
                        ></Project>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Code;
