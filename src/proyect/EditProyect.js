import React from 'react';

const EditProyect = (props) => {
    return (
        <div>
            <p className="title is-1">{props.proyectName}</p>
            <p className="subtitle is-3">{props.proyectDescription}</p>
        </div>
    );
};

export { EditProyect };