import React from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications'

import Routes from './Routes'
import rootReducer from './redux'

export const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ToastProvider>
          <div className='App'>
            <Routes />
          </div>
        </ToastProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default App
