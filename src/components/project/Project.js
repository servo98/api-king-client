import React from 'react';

const Project = (props) => {
    return (
        <div>
            <p className="title is-1">Show projecto</p>
            <p className="subtitle is-3">{props.projectDescription}</p>
        </div>
    );
};

export { Project };