import React from 'react';
import {
  Button, Container, Form, FormControl,
} from 'react-bootstrap';
import Animation from '../components/Animation';

const Home = () => (
  <Container fluid className="page mt-lg-4">
    <Container fluid className="d-lg-flex justify-content-lg-between p-lg-0">
      <h5 className="text-light font-weight-light">Explore Amazing Photos</h5>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-lg-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Container>
    <Animation />
  </Container>
);

export default Home;
