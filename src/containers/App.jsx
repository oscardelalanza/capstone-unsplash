import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import About from '../components/About';
import Footer from '../components/Footer';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames="fade">
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/Project" component={Project} />
                <Route path="/About" component={About} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
        />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
