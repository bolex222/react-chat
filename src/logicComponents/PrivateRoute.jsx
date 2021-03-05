import React, { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const PrivateLogRoute = ({ component: Component, needToBeLogIn, toRedirect, ...rest }) => {

  const { currentUser } = useAuth()

  let allow = (needToBeLogIn && currentUser) || (!needToBeLogIn && !currentUser)

  return (
    <Route
      {...rest}
      render={props => {
        return allow ? <Component {...props}/> : <Redirect to={toRedirect}/>
      }}
    />
  )
}

export default PrivateLogRoute