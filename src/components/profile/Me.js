import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Me = () => {
    const {
        user,
        isAuthenticated
      } = useAuth0();

    return (
        <article className="panel is-info">
            {isAuthenticated && (
                <React.Fragment>
                    {/* {JSON.stringify(user, null, 2)} */}
                    <div className="divanel-heading">
                        <div className="columns">
                            <div className="column">
                                <img
                                src={user.picture}
                                alt="Profile"
                                className="rounded-circle profile-picture mb-3 mb-md-0"
                                width="50"
                                />
                            </div>
                            <div className="column">
                                <p className="title is-3 mt-3">{user.name}</p>
                            </div>
                        </div>
                    </div>
                    <a className="panel-block is-active">
                        Email: {user.email}
                    </a>
                    <a className="panel-block">
                        Name: {user.name}
                    </a>
                </React.Fragment>
            )
            }
        </article>
    );
};
