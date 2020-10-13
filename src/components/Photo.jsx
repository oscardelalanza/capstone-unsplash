import React from 'react';
import { connect } from 'react-redux';
import { Container, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Photo = props => {
  const { photo } = props;
  console.log(photo);

  return (
    <Container className="mt-lg-4">
      <h5 className="text-white font-weight-light mb-lg-3">
        Photo by:
        {` ${photo.user.name}`}
      </h5>
      <Card>
        <Card.Img variant="top" src={photo.urls.regular} />
        <Card.Body>
          <Card.Title>Photo Description</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  photo: state.photos.find(photo => (
    photo.id.toString() === ownProps.match.params.img_id.toString()
  )),
});

Photo.propTypes = {
  photo: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string,
    }),
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default connect(mapStateToProps)(Photo);
