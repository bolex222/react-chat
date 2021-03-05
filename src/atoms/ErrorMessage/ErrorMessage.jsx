import React from 'react';
import './ErrorMessage.scss'

const ErrorMessage = ({ show, children }) => show&&<span className="error-message">{children}</span>

export default ErrorMessage;