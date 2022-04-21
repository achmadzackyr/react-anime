import React from 'react';

const Image = (props) => {
  return (
    <img
      alt={props.alt}
      src={props.src}
      width={props.width}
      height={props.height}
      className={props.class}
    />
  );
};

export default Image;
