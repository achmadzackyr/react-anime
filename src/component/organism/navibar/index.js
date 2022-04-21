import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Logo } from '../../molecule';
import animelistlogo from '../../../animelistlogo.png';

const Navibar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Logo src={animelistlogo} />
      </Container>
    </Navbar>
  );
};

export default Navibar;
