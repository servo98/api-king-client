import React from 'react';
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';

const Projects = () => {
    const project = useSelector((state) => state.projects.items);

    return (
        <div className="mt-3">
            <p className="title is-1">Projects list</p>
            {
                Object.values(project).map((project, index) => (
                    <Link to={`/dashboard/projects/${project._id}`} title={project.description} key={index} className="box">
                        <article className="media">
                            <div className="media-left">
                                <figure className="image is-64x64">
                                    <img src={`https://robohash.org/${project._id}`} alt="robot_image" />
                                </figure>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong>{project.name}</strong>
                                        <br />
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    </Link>

                ))
            }
        </div>

    );
};

export { Projects };