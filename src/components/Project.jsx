import React from 'react';
import { Container } from 'react-bootstrap';

const Project = () => (
  <Container className="page mt-lg-4">
    <h1 className="gradient-color-3 text-center">The Gallery Pic</h1>
    <Container className="text-white text-justify mt-md-3">
      <p className="font-weight-light">
        This is the capstone project that comes at the end of React & Redux section. It is a
        real-world-like project, built with business specifications. This project is based on a
        catalog of statistics. The idea is to build a catalogue that contains a browsable list of
        items, with their respective access to the details of each item.
      </p>
      <h4>The Project</h4>
      <p>
        I decided to name this project as
        {' '}
        <span className="gradient-color-4">The Gallery Pic</span>
        {' '}
        due to this is a photography application based on the unsplash API as the core of the
        project. So from here, I want to thank the Unsplash team for creating that amazing and
        friendly API which has contributed a lot to my learning journey.
      </p>
      <h4>The Technologies Involved</h4>
      <ul>
        <li><a href="https://unsplash.com/developers" className="gradient-color-2">Unsplash Developers</a></li>
        <li><a href="https://reactjs.org/" className="gradient-color-3">React</a></li>
        <li><a href="https://react-bootstrap.github.io/" className="gradient-color-4">React Bootstrap</a></li>
        <li><a href="https://getbootstrap.com/" className="gradient-color-5">Bootstrap</a></li>
        <li><a href="https://reactcommunity.org/react-transition-group/" className="gradient-color-6">React Transition Group</a></li>
        <li><a href="https://redux.js.org/" className="gradient-color-7">Redux</a></li>
        <li><a href="https://sass-lang.com/" className="gradient-color-8">Sass</a></li>
        <li><a href="https://gradienthunt.com/" className="gradient-color-9">Gradient Hunt</a></li>
      </ul>
    </Container>
  </Container>
);

export default Project;
