import React from 'react';

const Projects = (props) => {
    return (
        <div>
            <p className="title is-1">lista projectos</p>
            <p className="subtitle is-3">{props.projectDescription}</p>
        </div>
    );
};

export { Projects };