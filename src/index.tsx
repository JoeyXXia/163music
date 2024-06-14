import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import 'normalize.css'
import theme from '@/assets/theme'
import './assets/css/index.less'
import App from '@/App'
import store from '@/store'
import { ThemeProvider } from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>
)
