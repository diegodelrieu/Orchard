import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import './index.css';
import Landing from './views/landing/index';
import Team from './views/team/index';


ReactDOM.render(
  <Router>
      <Switch>
          <Route path='/' exact component={Landing} />
          <Route path="/team" exact component={Team} />
      </Switch>
  </Router>,
  document.getElementById('root')
)