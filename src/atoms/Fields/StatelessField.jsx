import React, { useEffect } from 'react'
import './Fields.scss'

const StatelessField = ({ name, inputRef, type, children, error }) => {


  return (
    <div className="field-group">
      <label className="field-label" htmlFor={name}>{children}</label>
      {type === 'password'?
        <input className={`field-input ${error && 'field-input-error'}`} autoComplete="off"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$"
              type={type} ref={inputRef} id={name} name={name}/> :
        <input className={`field-input ${error && 'field-input-error'}`} autoComplete="off" type={type} ref={inputRef} id={name} name={name}/>}
    </div>
  )
}

export default StatelessField