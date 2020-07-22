import React from 'react';

const todo = [
    {
        name: 'Proyecto 1',
        description: 'askgdh iou n asdo na, sdn,ma ilk qnmd samd pq dasdq jwd',
        controllers: 3,
        routes: 1,
        models: 4
    },
    {
        name: 'Proyecto 2',
        description: 'askgdh iou n asdo na, sdn,ma ilk qnmd samd pq dasdq jwd',
        controllers: 5,
        routes: 4,
        models: 2
    },
    {
        name: 'Proyecto 3',
        description: 'askgdh iou n asdo na, sdn,ma ilk qnmd samd pq dasdq jwd',
        controllers: 1,
        routes: 4,
        models: 1
    },
    {
        name: 'Proyecto 4',
        description: 'askgdh iou n asdo na, sdn,ma ilk qnmd samd pq dasdq jwd',
        controllers: 2,
        routes: 2,
        models: 64
    }
];

export const MenuProyect = () => {
    return (
        <aside className="menu">
            <p className="menu-label">
                General
            </p>
            <ul className="menu-list">
                <li><a>Dashboard</a></li>
                <li><a>Profile</a></li>
            </ul>
            <p className="menu-label">
                Administration
            </p>
            <ul className="menu-list">
                {todo.map(proyect => (
                    <li>
                        <a className="" title="HOLAPAYASO">{proyect.name}</a>
                        <ul>
                            <li>
                                <a>Models <span class="tag is-link">{proyect.models}</span></a>
                            </li>
                            <li>
                                <a>Controllers <span class="tag is-link">{proyect.controllers}</span></a>
                            </li>
                            <li>
                                <a>Routes <span class="tag is-link">{proyect.routes}</span></a>
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
        </aside>
    );
};