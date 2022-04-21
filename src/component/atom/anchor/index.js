import React from 'react';

const Anchor = (props) => {
  return (
    <a href={props.href} target={props.target} rel="noopener noreferrer">
      {props.text}
    </a>
  );
};

export default Anchor;
