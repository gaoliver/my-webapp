import React from 'react';
import { Container } from '../../styles/pages';

const Contact: React.FC = () => {
  return (
    <Container id="contact">
      <div className="container">
        <p>This site is not hosted, so it has no backend.</p>
        <p>While it is only made of frontend, and I cannot let you message me via website yet, you can contact me via other social networks on footer, or email me directly.</p>
      </div>
    </Container>
  );
};

export default Contact;
