import React from 'react';

import { CreateModel } from './CreateModel';
const EditProject = (props) => {
    return (
        <div>
            <p className="title is-1">Edit project</p>
            <p className="title is-1">{props.projectName}</p>
            <p className="subtitle is-3">{props.projectDescription}</p>
            <CreateModel></CreateModel>
        </div>
    );
};

export { EditProject };