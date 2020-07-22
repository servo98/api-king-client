import React from 'react';
// import { Counter } from './features/counter/Counter';

import { Login } from './auth/Login';
import {Signup} from './auth/Signup';
import {Nav} from './Nav';
import {CreateProyect} from './proyect/CreateProyect';
import {MenuProyect} from './proyect/MenuProyect';
import {EditProyect} from './proyect/EditProyect';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* <Counter /> */}
      <div className="container is-fluid">
          
          <Nav></Nav>

          <hr></hr>

          <Login/>

          <hr></hr>

          <Signup/>

          <hr></hr>

          <CreateProyect></CreateProyect>

          <hr></hr>

          <div className="container is-fluid">
            <div className="columns">
              <div className="column is-3">
                <MenuProyect></MenuProyect>
              </div>
              <div className="column">
                <EditProyect proyectName="Proyecto1" proyectDescription="La wahsada eseasakljd akljs dsa"></EditProyect>
              </div>
            </div>
          </div>

          <hr></hr>
      </div>

    </Router>

  );
}

export default App;
