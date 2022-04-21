import React from 'react';
import { Image } from '../../atom';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Logo = (props) => {
  return (
    <Link to="/">
      <Navbar.Brand>
        <Image
          alt="logo"
          src={props.src}
          width="150"
          height="50"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
    </Link>
  );
};

export default Logo;
