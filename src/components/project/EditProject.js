import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProject } from '../../redux/ProjectDuck';
import {useState} from 'react';
import { updateProject } from '../../redux/ProjectDuck';
import { useHistory } from "react-router-dom"; 

// import { CreateModel } from './CreateModel';
const EditProject = (props) => {

    const { push } = useHistory();
    const dispatch = useDispatch();

    const projectStore = useSelector((state) => state.projects.project);
    const [project, setProject] = useState({
    });
    
    useEffect(() => {
        dispatch(fetchProject(props.match.params.id));
    }, [props.match.params.id, dispatch]);

    useEffect(() => {
        setProject(projectStore);
    }, [projectStore]);

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setProject((prevState) => ({ ...prevState, [key]: value }));
    };

    const handleSummit = (e) => {
        e.preventDefault();
        dispatch(updateProject(props.match.params.id, project, push));
    };

    return (
        <div>
            <h1 className="title is-1">Edit Project</h1>
            
            <h4 className="title is-4">General</h4>
            <div className="field">
                <label className="label">Name</label>
                <input value={project.name || ''} name="name" onChange={handleChange} className="input" type="text" placeholder="Project name" />
            </div>
            <div className="field">
                <label className="label">Slug</label>
                <input value={project.slug || ''} name="slug" onChange={handleChange} className="input" type="text" placeholder="Project name" />
            </div>
            <div className="field">
                <label className="label">Description</label>
                <div className="control">
                    <textarea name="description" value={project.description} className="textarea" onChange={handleChange} placeholder="Describe your project :)" />
                </div>
            </div>
            <h4 className="title is-4">Database</h4>
            <div className="field">
                <label className="label">dbUser</label>
                <div className="control has-icons-left has-icons-right">
                    <input value={project.dbUser || ''} name="dbUser" onChange={handleChange} className="input" type="password" placeholder="* * * * * * * *" />
                </div>
            </div>
            <div className="field">
                <label className="label">dbPass</label>
                <div className="control has-icons-left has-icons-right">
                    <input value={project.dbPass || ''} name="dbPass" onChange={handleChange} className="input" type="password" placeholder="* * * * * * * *" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                    </span>
                </div>
            </div>
            <div className="field">
                <label className="label">dbHost</label>
                <div className="control has-icons-left has-icons-right">
                    <input value={project.dbHost || ''} name="dbHost" onChange={handleChange} className="input" type="password" placeholder="* * * * * * * *" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-at"></i>
                    </span>
                </div>
            </div>
            <div className="field">
                <label className="label">dbName</label>
                <div className="control has-icons-left has-icons-right">
                    <input value={project.dbName || ''} name="dbName" onChange={handleChange} className="input" type="password" placeholder="* * * * * * * *" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-signature"></i></span>
                </div>
            </div>

            <div className="field is-grouped columns is-centered mt-2">
                <div className="control">
                    <button onClick={handleSummit} className="button is-link">Submit</button>
                </div>
            </div>
        </div>
    );
};

export { EditProject };