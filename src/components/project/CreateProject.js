import React from 'react';

const CreateProject = () => {
    return (
        <div>
            <h1 class="title">Create Project</h1>
            <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="text" placeholder="Text input" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                    </span>
                </div>
            </div>

            <div className="field">
                <label className="label">Description</label>
                <div className="control">
                    <textarea className="textarea" placeholder="Describe your project :)"></textarea>
                </div>
            </div>
            
            <div className="field is-grouped columns is-centered mt-2">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export { CreateProject };