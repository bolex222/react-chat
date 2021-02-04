import React from 'react';
import './field.scss'

const Field = ({ name, value, onchange, type, children }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{children}</label>
      <input type={type} value={value} onChange={onchange} id={name} name={name}/>
    </div>
  );
};

export default Field;