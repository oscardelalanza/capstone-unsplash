import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Animation from '../components/Animation';
import { LOADING } from '../js/literals';
import FilterForm from './FilterForm';
import { getNewPhotos } from '../actions/photosActions';

class Home extends React.Component {
  componentDidMount() {
    const { getNewPhotos } = this.props;
    getNewPhotos();
  }

  render() {
    const { photos, status } = this.props;
    let component;

    if (status === LOADING) {
      component = <Animation />;
    } else {
      component = photos.map(photo => (
        <Card key={photo.id} className="photo bg-dark text-white p-lg-0 mb-lg-1">
          <Card.Img src={photo.urls.regular} />
          <Link to={`/${photo.id}`} className="text-white">
            <Card.ImgOverlay className="black-transparent">
              <Card.Title>{photo.user.name}</Card.Title>
              <Card.Text>
                <i className="fas fa-heart text-danger" />
                {` ${photo.likes}`}
              </Card.Text>
              <Card.Text>
                <i className="far fa-image" />
                {` ${photo.alt_description || ''}`}
              </Card.Text>
            </Card.ImgOverlay>
          </Link>
        </Card>
      ));
    }

    return (
      <Container fluid className="page mt-lg-4">
        <Container fluid className="d-lg-flex justify-content-lg-between p-lg-0">
          <h5 className="text-light font-weight-light">Explore Amazing Photos</h5>
          <FilterForm />
        </Container>
        <Container fluid className="p-lg-0 d-lg-flex justify-content-lg-between flex-lg-wrap mt-lg-3">
          { component }
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos,
  status: state.status,
});

const mapDispatchToProps = dispatch => ({
  getNewPhotos: () => (dispatch(getNewPhotos())),
});

Home.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  status: PropTypes.string.isRequired,
  getNewPhotos: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
