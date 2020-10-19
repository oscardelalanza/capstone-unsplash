import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer data-testid="footer">
    <Container fluid className="text-light text-center bg-dark p-lg-3">
      Made with
      {' '}
      <i className="far fa-heart text-danger" />
      {' '}
      and a lot of
      {' '}
      <i className="fas fa-mug-hot text-info" />
      {' '}
      by
      {' '}
      <span className="gradient-color-7">Oscar De La Lanza</span>
    </Container>
  </footer>
);

export default Footer;
