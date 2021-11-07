import React, { useContext, useState, useCallback } from 'react'

import { TOKEN_KEY_NAME } from '../config'
import { Endpoints } from '../constants' 
import api from '../services/api'
import { get } from '../utils/http-utility'

const removeSessionData = () => {
  window.sessionStorage.removeItem(TOKEN_KEY_NAME)
}

const setApiToken = token => {
  api.defaults.headers.authorization = `Bearer ${token}`
}

const AuthContext = React.createContext({
  isAuthenticated: false,
  user: {},
  signIn: () => {},
  signOut: () => {},
})

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = window.sessionStorage.getItem(TOKEN_KEY_NAME)

    if (token) {
      setApiToken(token)
      return { isAuthenticated: true, token: JSON.parse(token) }
    }

    return { isAuthenticated: false, user: {} }
  })

  const signIn = async () => {
    

    const response = await get(api, Endpoints.LoginApi.entrar)

    if (response) {
      removeSessionData()
      setApiToken(response.token)
      setData({ isAuthenticated: true, token: response.token, user: response })
      window.sessionStorage.setItem(TOKEN_KEY_NAME, JSON.parse(response.token))
    }
  }

  // const signOut = useCallback(() => {
  //   removeSessionData()
  //   setData({})
  //   window.location.href = URL_WEB
  // }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: data.isAuthenticated,
        user: data.user,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used whithin an AutProvider')
  }

  return context
}

export { AuthProvider, useAuth }
