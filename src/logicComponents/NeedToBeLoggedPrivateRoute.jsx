import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const NeedToBeLoggedPrivateRoute = ({ component: Component, ...rest }) => {

  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props}/> : <Redirect to="/404"/>
      }}
    />
  )
}

export default NeedToBeLoggedPrivateRoute