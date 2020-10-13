import React from 'react';
import {
  Button, Container, Form, FormControl,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import Animation from '../components/Animation';
import { LOADING } from '../js/literals';

const Home = (props) => {
  const { photos, status } = props;
  let component;

  if (status === LOADING) {
    component = <Animation />;
  } else {
    component = 'images';
  }

  return (
    <Container fluid className="page mt-lg-4">
      <Container fluid className="d-lg-flex justify-content-lg-between p-lg-0">
        <h5 className="text-light font-weight-light">Explore Amazing Photos</h5>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-lg-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Container>
      { component }
    </Container>
  );
};

const mapStateToProps = state => ({
  photos: state.photos,
  status: state.status,
});

export default connect(mapStateToProps)(Home);
