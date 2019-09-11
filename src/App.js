import React from 'react';
import './App.css';
import Nav from './Nav';
import Amiibo from './Amiibo';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Amiibo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
