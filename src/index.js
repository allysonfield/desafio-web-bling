import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import './App.css'
import rootStore from './redux/stores/root-store'
import App from './App'
import reportWebVitals from './reportWebVitals'
;(async window => {
  const initialState = {}
  //TODO: Change Basename based on configurations
  const history = createBrowserHistory({ basename: '/' })
  const store = rootStore(initialState, history)

  const rootEl = document.getElementById('root')

  const render = (Component, el) => {
    ReactDOM.render(
      <Provider store={store}>
        <Component history={history} dispatch={store.dispatch} />
      </Provider>,
      el
    )
  }

  render(App, rootEl)
})(window)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
