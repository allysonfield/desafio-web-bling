import React  from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useAuth } from '@providers/auth-provider'
import { Routes } from '@constants'

const PublicRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth()
 
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: Routes.Home
            }}
          />
        )
      }
    />
  )
}

export default PublicRoute
