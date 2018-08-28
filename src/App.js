import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

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

export default App

ReactDOM.render(<Root />, document.getElementById('app'))