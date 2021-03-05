import React from 'react'
import './Fields.scss'

const StatefulField = ({ name, value, onchange, type, children, error }) => {
  return (
    <div className="field-group">
      <label className="field-label" htmlFor={name}>{children}</label>
      <input className={`field-input ${error && 'field-input-error'}`}
             autoComplete="off"
             type={type}
             value={value}
             onChange={onchange} id={name} name={name}/>
    </div>
  )
}

export default StatefulField