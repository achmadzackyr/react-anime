import React from 'react';
import { Image, Paragraph, Anchor } from '../../atom';

const Header = (props) => {
  return (
    <header className="App-header">
      <Image file={props.imageFile} />
      <Paragraph />
      <Anchor />
    </header>
  );
};

export default Header;
