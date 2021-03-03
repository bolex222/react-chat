import React, { useState } from 'react'
import './SignIn.scss'
import StatefulField from '../../components/ui_ux/Fields/StatefulField'
import { useAuth } from '../../contexts/AuthContext'
import ErrorMessage from '../../components/ui_ux/ErrorMessage/ErrorMessage'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const SignIn = () => {
  const { signIn } = useAuth()

  const history = useHistory()

  // states
  const [{email, password }, setFormValue] =
    useState( { email: '', password: ''})
  const [error, setError] = useState('')

  // handle function
  const handleChange = e => {
    setFormValue(value => ({ ...value, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await signIn(email, password)
      history.push('/')
    } catch ({ code, message }) {
      setError(code)
    }
  }
  return (
    <section>
      <div className="container">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <StatefulField name="email" value={email} type="email" onchange={handleChange}>Email</StatefulField>
          <ErrorMessage show={error === 'auth/user-not-found'}>Unknown user</ErrorMessage>
          <StatefulField name="password" value={password} type="password" onchange={handleChange}>Password</StatefulField>
          <ErrorMessage show={error === 'auth/wrong-password'}>Wrong password</ErrorMessage>
          <button type="submit">Sign in</button>
          <NavLink to="/signup">don't have an account ?</NavLink>
        </form>
      </div>
    </section>
  )
}
export default SignIn