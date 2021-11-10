import React from 'react'
import { ConnectedRouter } from 'connected-react-router'

import AppProvider from './providers/app-provider'
import Router from './routes/router'

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <AppProvider>
        <Router history={history} />
      </AppProvider>
    </ConnectedRouter>
  )
}

export default App
