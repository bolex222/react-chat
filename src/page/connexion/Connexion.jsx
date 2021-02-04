import React, { useState, useEffect } from 'react'
import './connexion.scss'
import Field from '../../components/ui_ux/field/Field'
import ButtonLink from '../../components/ui_ux/buttonLink/ButtonLink';
import firebase from '../../config/firebase.config.js'

const Connexion = () => {

  // states

  const auth = firebase.auth()
  const [{ pseudo, email, password, confirmPassword }, setFormValue] =
    useState( { pseudo: '', email: '', password: '', confirmPassword: '' })
  const [mode, setMode] = useState('login')

  // effects
  useEffect(() => {
    console.log('hello');
  }, [confirmPassword])

  // handle function

  const handleChange = e => {
    setFormValue(value => ({ ...value, [e.target.name]: e.target.value}))
  }

  const handleChangeMode = () => {
    setMode(mode === 'login'? 'sign in' : 'login')
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      let result = await auth.signInWithEmailAndPassword(email, password);
      console.log(result);
      await auth.disconnect()
    } catch (e) {}
  }
  return (
    <section>
      <div className="container">
        <h1>{mode !== 'login'? 'Sign in' : 'Login'}</h1>
        <form onSubmit={handleSubmit}>
          {mode === 'sign in'? <Field name="pseudo" value={pseudo} type="text" onchange={handleChange}>Pseudo</Field> : ''}
          <Field name="email" value={email} type="email" onchange={handleChange}>Email</Field>
          <Field name="password" value={password} type="password" onchange={handleChange}>Pasword</Field>
          {mode === 'sign in'? <Field name="confirmPassword" value={confirmPassword} type="password" onchange={handleChange}>Confirm password</Field> : ''}
          <button type="submit">Log in</button>
          <ButtonLink onClick={handleChangeMode}>{mode === 'login'? 'sign in' : 'login'}</ButtonLink>
        </form>
      </div>
    </section>
  )
}
export default Connexion