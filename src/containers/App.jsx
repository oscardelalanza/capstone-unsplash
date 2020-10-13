import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import About from '../components/About';
import Footer from '../components/Footer';
import Home from './Home';
import Photo from '../components/Photo';

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
