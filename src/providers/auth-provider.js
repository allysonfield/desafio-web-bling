
import React, { useContext, useState, useCallback } from 'react'
import { useHistory } from 'react-router'

import { TOKEN_KEY_NAME } from '../config'
import { Endpoints, Routes } from '../constants' 
import api from '../services/api'

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
  signUp: () => {},
})

const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [data, setData] = useState(() => {
    const token = window.sessionStorage.getItem(TOKEN_KEY_NAME)

    if (token) {
      console.log({token})
      setApiToken(token)
      return { isAuthenticated: true, token: token }
    }
    console.log('sem token')
    return { isAuthenticated: false, user: {} }
  })

  const signIn = async (email, password) => {
    

    try {
      const {data: response} = await api.post(Endpoints.LoginApi.entrar, {email, password})

    
        removeSessionData()
        setApiToken(response.accessToken)
        setData({ isAuthenticated: true, token: response.accessToken, user: response.user })
        window.sessionStorage.setItem(TOKEN_KEY_NAME, response.accessToken)
        history.push(Routes.Task.Home)
    
    } catch (error) {
      console.log({error})
    }
  }

  const signUp = async (name, email, password) => {

    try {
      await api.post(Endpoints.LoginApi.registrar, { name, email, password })
      history.push(Routes.SignIn)
    } catch (error) {
      throw new Error()
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
        signIn,
        signUp
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
