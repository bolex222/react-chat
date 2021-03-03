import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom'

const RouteMiddlware = ({ children, isConnected }) => {
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
      if (isConnected) {
        switch (location.pathname) {
          case '/login':
            history.push('/')
            break
          default :
            break
        }
      } else {
        switch (location.pathname) {
          case '/chat':
            history.push('/login')
            break
          default:
            break
        }
      }
  },[isConnected])


  return children
};

export default RouteMiddlware;