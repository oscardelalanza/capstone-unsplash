import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Navbar from '../components/Navbar';
import Project from '../components/Project';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames="fade">
              <Switch location={location}>
                <Route exact path="/" component={() => (<h1 className="page">Home Page</h1>)} />
                <Route path="/Project" component={Project} />
                <Route path="/About" component={() => (<h1 className="page">About</h1>)} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;