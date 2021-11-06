import React, { useContext, useState, useCallback } from 'react'

import { URL_WEB, TOKEN_KEY_NAME, USER_KEY_NAME } from '../config'
import { Endpoints } from '../constants' 
import api from '../services/api'
import { get } from '../utils/http-utility'

const removeSessionData = () => {
  window.sessionStorage.removeItem(TOKEN_KEY_NAME)
  window.sessionStorage.removeItem(USER_KEY_NAME)
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
    const user = window.sessionStorage.getItem(USER_KEY_NAME)

    if (token && user) {
      setApiToken(token)
      return { isAuthenticated: true, token, user: JSON.parse(user) }
    }

    return { isAuthenticated: false, user: {} }
  })

  const signIn = async () => {
    

    const response = await get(api, Endpoints.LoginApi.entrar)

    if (response) {
      removeSessionData()
      setApiToken(response.token)
      setData({ isAuthenticated: true, token: response.token, user: response })
      window.sessionStorage.setItem(TOKEN_KEY_NAME, response.token)
      window.sessionStorage.setItem(USER_KEY_NAME, JSON.stringify(response))
    }
  }

  const signOut = useCallback(() => {
    removeSessionData()
    setData({})
    window.location.href = URL_WEB
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: data.isAuthenticated,
        user: data.user,
        signIn,
        signOut,
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
