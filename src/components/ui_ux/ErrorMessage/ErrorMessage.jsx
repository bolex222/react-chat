import React from 'react';
import './ErrorMessage.scss'

const ErrorMessage = ({ show, children }) => show&&<span className="error">{children}</span>

export default ErrorMessage;