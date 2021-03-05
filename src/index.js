import React, { useState }  from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SignIn from './pages/signin/SignIn'
import SignUp from './pages/signup/SignUp'
import Chat from './pages/chat/Chat'
import Welcome from './pages/welcome/Welcome';
import './index.scss'
import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './logicComponents/PrivateRoute'
import PrivateLogRoute from './logicComponents/PrivateRoute'


const App = () => {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <PrivateRoute path='/chat' component={Chat} needToBeLogIn={true} toRedirect="/signin"/>
          <PrivateLogRoute path="/signin" toRedirect="/" needToBeLogIn={false} component={SignIn}/>
          <PrivateLogRoute path="/signup" toRedirect="/" needToBeLogIn={false} component={SignUp}/>
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
