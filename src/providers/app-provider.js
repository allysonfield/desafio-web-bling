import React from 'react'
import PropTypes from 'prop-types'

import { AuthProvider } from './auth-provider'

const AppProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>
}

AppProvider.propTypes = {
  children: PropTypes.any,
}

export default AppProvider
