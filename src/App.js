import React from 'react';

import { Nav } from './Nav';
import { CreateProject } from './components/project/CreateProject';
import { MenuProject } from './components/project/MenuProject';
import { EditProject } from './components/project/EditProject';
import {Dashboard} from './components/project/Dashboard';
import {Projects} from './components/project/Projects';
import {Me} from './components/profile/Me';
import {Home} from './components/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="container is-fluid">

        <Nav></Nav>

        <div className="columns">
          <Switch>

            {/* LOGGED */}
            <Route path="/dashboard">
              <div className="column is-3">
                <MenuProject></MenuProject>
              </div>
              <div className="column">
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/dashboard/creator" component={CreateProject} />
                <Route exact path="/dashboard/projects" component={Projects}/>
                <Route exact path="/dashboard/projects/:id" component={EditProject}/>
                
              </div>
            </Route>

            {/* IF NOT LOGGED */}
            <Route exact path="/me">
              <div className="column">
                <Me/>
              </div>
            </Route>
            <Route exact path="/">
              <div className="column">
                <Home/>
              </div>
            </Route>
            

          </Switch>
        </div>


      </div>

    </Router>

  );
}

export default App;
