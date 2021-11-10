import React from 'react'
import { Switch, Route, Router as ReactRouter, Redirect } from 'react-router-dom'

import { Routes } from '../constants'
import PrivateRoute from './private-route'

// import TaskPage from '@pages/task'
// import NewTaskPage from '@pages/task/new'
import SignInPage from '@pages/Login'
import HomePage from '@pages/Home'
import RepoPage from '@pages/Repo'
import RegisterPage from '@pages/Register'
import TaskPage from '@pages/Task'

const Router = ({ history }) => {
  return (
    <ReactRouter history={history}>
      <Switch>
       
        <Route path={Routes.Home} component={HomePage} exact />
        <Route path={Routes.Repo} component={RepoPage} exact />
        <Route path={Routes.SignIn} component={SignInPage} exact />
        <Route path={Routes.SignUp} component={RegisterPage} exact />
        <PrivateRoute path={Routes.Task} component={TaskPage} />
        <PrivateRoute path={Routes.Task} component={() => <Redirect to={Routes.Task} />} />
        <Route path="/" component={() => <Redirect to={Routes.Home} />} />
        
        
      </Switch>
    </ReactRouter>
  )
}

export default Router
