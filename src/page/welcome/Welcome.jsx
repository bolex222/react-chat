import React  from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { NavLink } from 'react-router-dom'

const Welcome = ({ connected }) => {

  const { currentUser, signOut } = useAuth()
  const handleSignOut = async e => {
    e.preventDefault()
    try {
      signOut()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <h1>Welcom bro :)</h1>
      {currentUser?
        <button onClick={handleSignOut}>Sign Out</button> :
        <NavLink to="/signin">Sign in</NavLink>
      }
      { JSON.stringify(currentUser?.email) }
    </>
  )
}

export default Welcome