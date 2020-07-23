import React from 'react';
import { useDispatch } from "react-redux";
import {useState} from 'react';
import { createProject } from '../../redux/ProjectDuck';
import { useHistory } from "react-router-dom"; 

const CreateProject = () => {
    const { push } = useHistory();
    const dispatch = useDispatch();

    const [project, setProject] = useState({});

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setProject((prevState) => ({ ...prevState, [key]: value }));
    };

    const handleSummit = (e) => {
        e.preventDefault();
        dispatch(createProject(project, push));
    };
    return (
        <div>
            <h1 className="title is-1">Create Project</h1>

            <h4 className="title is-4">General</h4>
            <div className="field">
                <label className="label">Name</label>
                <input name="name" onChange={handleChange} className="input" type="text" placeholder="Project name" />
            </div>
            <div className="field">
                <label className="label">Slug</label>
                <input name="slug" onChange={handleChange} className="input" type="text" placeholder="Project name" />
            </div>
            <div className="field">
                <label className="label">Description</label>
                <div className="control">
                    <textarea name="description" className="textarea" onChange={handleChange} placeholder="Describe your project :)"></textarea>
                </div>
            </div>
            <h4 className="title is-4">Database</h4>
            <div className="field">
                <label className="label">dbUser</label>
                <div className="control has-icons-left has-icons-right">
                    <input name="dbUser" onChange={handleChange} className="input" type="password" placeholder="* * * * * * * *" />
                </div>
            </div>
            <div className="field">
                <label className="label">dbPass</label>
                <div className="control has-icons-left has-icons-right">
                    <input name="dbPass" onChange={handleChange} className="input" type="password" placeholder="* * * * * * * *" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                    </span>
                </div>
            </div>
            <div className="field">
                <label className="label">dbHost</label>
                <div className="control has-icons-left has-icons-right">
                    <input name="dbHost" onChange={handleChange} className="input" type="password" placeholder="* * * * * * * *" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-at"></i>
                    </span>
                </div>
            </div>
            <div className="field">
                <label className="label">dbName</label>
                <div className="control has-icons-left has-icons-right">
                    <input name="dbName" onChange={handleChange} className="input" type="password" placeholder="* * * * * * * *" />
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

export { CreateProject };