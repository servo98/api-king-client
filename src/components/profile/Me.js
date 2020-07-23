import React from 'react';

const Me = (props) => {
    return (
        <div>
            Me
            <p className="title is-1">{props.projectName}</p>
            <p className="subtitle is-3">{props.projectDescription}</p>
        </div>
    );
};

export { Me };