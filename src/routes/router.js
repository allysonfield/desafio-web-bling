import React from 'react'
import { Switch, Route, Router as ReactRouter, Redirect } from 'react-router-dom'

import { Routes } from '../constants'
import PrivateRoute from './private-route'

// import TaskPage from '@pages/task'
// import NewTaskPage from '@pages/task/new'
import SignInPage from '../pages/Login'
import HomePage from '../pages/Home'
import RepoPage from '../pages/Repo'

const Router = ({ history }) => {
  return (
    <ReactRouter history={history}>
      <Switch>
        <Route path={Routes.Repo} component={RepoPage} exact />
        <Route path={Routes.SignIn} component={SignInPage} exact />
        <PrivateRoute path={Routes.Home} component={HomePage} />
        <PrivateRoute path={Routes.Home} component={() => <Redirect to={Routes.Home} />} />
      </Switch>
    </ReactRouter>
  )
}

export default Router
