import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Connexion from './page/connexion/Connexion'
import Chat from './page/chat/Chat'
import './index.scss'
import firebase from './config/firebase.config';


const App = () => {
  const auth = firebase.auth()
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log('connected');
      } else {
        console.log('redirect to login');
      }
    })
  })
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Connexion/>
          </Route>
          <Route path="/">
            <Chat/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
