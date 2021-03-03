import React from 'react'
import './Fields.scss'

const StatefulField = ({ name, value, onchange, type, children }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{children}</label>
      <input autoComplete="off" type={type} value={value} onChange={onchange} id={name} name={name}/>
    </div>
  )
}

export default StatefulField