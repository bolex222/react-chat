import React, { useState }  from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SignIn from './page/signin/SignIn'
import SignUp from './page/signup/SignUp'
import Chat from './page/chat/Chat'
import Welcome from './page/welcome/Welcome';
import './index.scss'
import { AuthProvider } from './contexts/AuthContext'


const App = () => {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Switch>
          <Route path='/chat'>
            <Chat/>
          </Route>
          <Route path="/signIn">
            <SignIn/>
          </Route>
          <Route path="/signUp">
            <SignUp/>
          </Route>
          <Route path="/">
            <Welcome/>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
