import React from 'react';
import { connect } from 'react-redux';
import { Container, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Photo = props => {
  const { photo } = props;

  return (
    <Container className="mt-lg-4 mb-lg-4">
      <h5 className="text-white font-weight-light mb-lg-3">
        Photo by:
        {` ${photo.user.name}`}
      </h5>
      <Card style={{ border: `solid 1px ${photo.color}` }}>
        <Card.Img variant="top" src={photo.urls.regular} />
        <Card.Body>
          <Card.Title>Photo Description</Card.Title>
          <Container className="mb-lg-2">
            <Card.Text>{photo.description}</Card.Text>
            <Card.Text>{photo.alt_description}</Card.Text>
            <Card.Text>
              Size:
              {`${photo.width}x${photo.height}`}
            </Card.Text>
            <Card.Text>
              Download this photo:
              {' '}
              <Button href={`${photo.links.download}?force=true`} download variant="success" size="sm">Download</Button>
            </Card.Text>
          </Container>
          <Card.Title>Photographer</Card.Title>
          <Container>
            <Card.Text>{photo.user.name}</Card.Text>
            <Card.Text>{photo.user.bio}</Card.Text>
            <Card.Text>{photo.user.location}</Card.Text>
            <Card.Text>{`@${photo.user.instagram_username}`}</Card.Text>
          </Container>
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
    color: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    alt_description: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    links: PropTypes.shape({
      download: PropTypes.string.isRequired,
    }),
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      instagram_username: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default connect(mapStateToProps)(Photo);
