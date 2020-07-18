import React from 'react';
// import { Counter } from './features/counter/Counter';

import { Login } from './auth/Login';
import Nav from './Nav';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* <Counter /> */}
      <div className="container is-fluid">
          
          <Nav></Nav>
          <Login />

      </div>

    </Router>

  );
}

export default App;
