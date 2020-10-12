import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const Animation = () => (
  <Container className="loading d-lg-flex align-items-lg-center">
    <Spinner animation="grow" variant="info" className="loading-spinner ml-lg-auto mr-lg-auto" />
  </Container>
);

export default Animation;
