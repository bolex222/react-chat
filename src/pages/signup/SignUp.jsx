import React, { useRef, useState } from 'react'
import StatelessField from '../../atoms/Fields/StatelessField'
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage'
import { NavLink, useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './Signup.scss'

const SignUp = () => {
  const emailField = useRef(null)
  const passwordField = useRef(null)
  const confirmPasswordField = useRef(null)

  const [error, setError] = useState('')

  const history = useHistory()

  const { signUp } = useAuth()

  const handleSubmit = async e => {
    e.preventDefault()
    const { current: {value : passwordValue} } = passwordField
    const { current: {value : confirmPasswordValue} } = confirmPasswordField
    if (passwordValue !== confirmPasswordValue) {
      setError('n-m-pw')
    } else {
      const { current: {value : emailValue} } = emailField
      try {
        await signUp(emailValue, passwordValue)
        history.push('/')
      } catch ({ message, code }) {
        setError(code)
      }
    }
  }

  return (
    <section>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <StatelessField error={error === 'auth/email-already-in-use'} name="email" type="email" inputRef={emailField}>Email</StatelessField>
        <ErrorMessage show={error === 'auth/email-already-in-use'} />
        <StatelessField name="password" type="password" inputRef={passwordField}>Password</StatelessField>
        <StatelessField error={error === 'n-m-pw'} name="confirmPassword" type="password" inputRef={confirmPasswordField}>Confirm password</StatelessField>
        <ErrorMessage show={error === 'n-m-pw'}>Passwords don't match</ErrorMessage>
        <button type="submit">Sign up</button>
        <NavLink to="/signin">Already have an account?</NavLink>
      </form>
    </section>)
}

export default SignUp