import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../config/firebase.config'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
  }, [])

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  const signIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const signOut = () => {
    return auth.signOut()
  }

  const value = {
    currentUser,
    signIn,
    signUp,
    signOut
  }

  return (
  <AuthContext.Provider value={value}>
    {!loading && children}
  </AuthContext.Provider>
  )
}

