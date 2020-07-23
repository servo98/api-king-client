import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";



export const Nav = () => {

  const toggleNavBar = (e) => {
    const toggler = [document.getElementById('mainNavBurger'), document.getElementById('mainNav')];
    toggler.forEach(node => node.classList.toggle('is-active'));
    e.preventDefault();
  };

  const logoutWithRedirect = () => {
    localStorage.clear(); 
    return logout({
      returnTo: window.location.origin,
    });

  };

  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout
  } = useAuth0();

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="/logo/logo_small.png" alt="Logo" />
        </a>

        <a id="mainNavBurger" href="/#" onClick={toggleNavBar} role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="mainNav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="mainNav" className="navbar-menu">
        {isAuthenticated && (
          <div className="navbar-start">
            <Link className="navbar-item" to="/dashboard">
              Dashboard
                </Link>
            <Link className="navbar-item" to="/dashboard/creator">
              Create Project
                </Link>
          </div>
        )}


        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">

              {!isAuthenticated && (
                <React.Fragment>
                  <button className="button is-primary" onClick={() => loginWithRedirect()}>
                    Log in
                  </button>
                </React.Fragment>
              )}
              {isAuthenticated && (
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src={user.picture} alt="Profile" style={{ maxHeight: "100px" }} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">{user.name}</p>
                    <a href="/#" className="subtitle is-6" onClick={(e) => { e.preventDefault(); logoutWithRedirect() }}>Log out</a>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};