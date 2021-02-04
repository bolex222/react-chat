import React from 'react';

const ButtonLink = ({onClick, children}) => {
  return (
    <button type="button" onClick={onClick}>{children}</button>
  );
};

export default ButtonLink;