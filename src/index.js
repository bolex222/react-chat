import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SignIn from './pages/signin/SignIn'
import SignUp from './pages/signup/SignUp'
import Chat from './pages/chat/Chat'
import Welcome from './pages/welcome/Welcome';
import Error404 from './pages/errors/Error404'
import './index.scss'
import { AuthProvider } from './contexts/AuthContext'
import NoNeedToBeLoggedRoute from './logicComponents/NoNeedToBeLoggedRoute'
import NeedToBeLoggedPrivateRoute from './logicComponents/NeedToBeLoggedPrivateRoute'

const App = () => {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <NeedToBeLoggedPrivateRoute path='/chat' component={Chat} />
          <NoNeedToBeLoggedRoute path="/signin" component={SignIn}/>
          <NoNeedToBeLoggedRoute path="/signup" component={SignUp}/>
          <Route path="/404" component={Error404}/>
          <Route path="/" component={Error404}/>
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
