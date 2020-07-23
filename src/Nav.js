import React from 'react';
import { Link } from 'react-router-dom';

export const Nav =  () => {
  const toggleNavBar = (e) => {
    const toggler = [document.getElementById('mainNavBurger'), document.getElementById('mainNav')];
    toggler.forEach(node => node.classList.toggle('is-active'));
    e.preventDefault();
  };
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="/logo/logo_small.png" alt="Logo"/>
        </a>

        <a id="mainNavBurger" href="/#" onClick={toggleNavBar} role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="mainNav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="mainNav" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/dashboard">
            Dashboard
          </Link>
          <Link className="navbar-item" to="/dashboard/creator">
            Create Project
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button is-primary" to="/signup">
                <strong>Sign up</strong>
              </Link>
              <Link className="button is-light" to="/login">
                <strong>Login</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};