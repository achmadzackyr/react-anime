import React from 'react';
import { Image } from '../../atom';
import { Navbar } from 'react-bootstrap';

const Logo = (props) => {
  return (
    <Navbar.Brand href="/">
      <Image
        alt="logo"
        src={props.src}
        width="150"
        height="50"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
  );
};

export default Logo;
