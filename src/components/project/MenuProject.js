import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from '../../redux/ProjectDuck';
import { useAuth0 } from "@auth0/auth0-react";


export const MenuProject = () => {

    const dispatch = useDispatch();
    const projects = useSelector((state) => state.projects.items);

    const { getAccessTokenSilently } = useAuth0();
    
    const changeToken = async () => {
        const token = await getAccessTokenSilently();
        window.localStorage.setItem('token', token);
        dispatch(fetchProjects());
    };
    
    useEffect(() => {
        changeToken()
    }, []);

    return (
        <aside className="menu">
            <p className="menu-label">
                General
            </p>
            <ul className="menu-list">
                <li>
                    <Link to="/dashboard/projects">My projects</Link>
                </li>
                <li>
                    <Link to="/me">Profile</Link>
                </li>
            </ul>
            <p className="menu-label">
                Administration
            </p>
            <ul className="menu-list">
                { Object.values(projects).map((project, index) => (
                    <li key={index}>
                        <Link to={`/dashboard/projects/${project._id}`} title={project.description}>{project.name}</Link>
                        <ul>
                            <li>
                                <Link to={`/dashboard/projects/${project._id}/models`}>
                                    Models <span className="tag is-link">{project.models.length}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/dashboard/projects/${project._id}/routes`}>
                                    Routes <span className="tag is-link">{project.routes.length}</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
        </aside>
    );
};