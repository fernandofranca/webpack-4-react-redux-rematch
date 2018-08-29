import React from 'react'
import { Provider } from 'react-redux'

// eslint-disable-next-line
import style from './main.css'
import Some from 'components/Some'
import store from 'state'

const App = () => {
  return (
    <div>
      <p>React here!!!</p>
      <Some />
    </div>
  )
}

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root