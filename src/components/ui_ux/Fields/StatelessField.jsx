import React, { useEffect } from 'react'
import './Fields.scss'

const StatelessField = ({ name, inputRef, type, children }) => {


  return (
    <div className="form-control">
      <label htmlFor={name}>{children}</label>
      {type === 'password'? <input autoComplete="off"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$"
              type={type} ref={inputRef} id={name} name={name}/> :
        <input autoComplete="off" type={type} ref={inputRef} id={name} name={name}/>}
    </div>
  )
}

export default StatelessField