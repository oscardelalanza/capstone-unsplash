import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Project from '../components/Project';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => (<h1>Home Page</h1>)} />
          <Route path="/Project" component={Project} />
          <Route path="/About" component={() => (<h1>About</h1>)} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
