import React from 'react';

const CreateModel = (props) => {
    return (
        <div>
            CreateModel
            <p className="title is-1">{props.projectName}</p>
            <p className="subtitle is-3">{props.projectDescription}</p>
        </div>
    );
};

export { CreateModel };