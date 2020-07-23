import React from 'react';
import {Link} from 'react-router-dom'

const todo = [
    {
        name: 'Projecto 1',
        description: 'askgdh iou n asdo na, sdn,ma ilk qnmd samd pq dasdq jwd',
        controllers: 3,
        routes: 1,
        models: 4
    },
    {
        name: 'Projecto 2',
        description: 'askgdh iou n asdo na, sdn,ma ilk qnmd samd pq dasdq jwd',
        controllers: 5,
        routes: 4,
        models: 2
    },
    {
        name: 'Projecto 3',
        description: 'askgdh iou n asdo na, sdn,ma ilk qnmd samd pq dasdq jwd',
        controllers: 1,
        routes: 4,
        models: 1
    },
    {
        name: 'Projecto 4',
        description: 'askgdh iou n asdo na, sdn,ma ilk qnmd samd pq dasdq jwd',
        controllers: 2,
        routes: 2,
        models: 64
    }
];

export const MenuProject = () => {
    return (
        <aside className="menu">
            <p className="menu-label">
                General
            </p>
            <ul className="menu-list">
                <li>
                    <Link to="/dashboard/projects">My projects</Link>
                </li>
                <li>
                    <Link to="/me">Profile</Link>
                </li>
            </ul>
            <p className="menu-label">
                Administration
            </p>
            <ul className="menu-list">
                {todo.map(project => (
                    <li>
                        <a className="" title="HOLAPAYASO">{project.name}</a>
                        <ul>
                            <li>
                                <a>Models <span class="tag is-link">{project.models}</span></a>
                            </li>
                            <li>
                                <a>Routes <span class="tag is-link">{project.routes}</span></a>
                            </li>
                            <li>
                                <a>Database</a>
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
        </aside>
    );
};