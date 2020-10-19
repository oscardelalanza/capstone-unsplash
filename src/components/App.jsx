import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Project from './Project';
import About from './About';
import Footer from './Footer';
import Home from '../containers/Home';
import Photo from './Photo';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Project" component={Project} />
          <Route path="/About" component={About} />
          <Route path="/:img_id" component={Photo} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
