import React from 'react';
import { Container } from '../../styles/pages';
import "./index.scss"

const NotFound: React.FC = () => {
  return (
    <Container id="404">
      <h1 className="h1">404</h1>
      <h4 className="h4">Page not found</h4>
    </Container>
  );
};

export default NotFound;
