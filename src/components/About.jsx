import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => (
  <Container className="page mt-lg-4">
    <h1 className="text-center gradient-color-6">About Me</h1>
    <Container className="text-justify text-light">
      <p>
        This must contain a description of the developer
      </p>
    </Container>
  </Container>
);

export default About;
