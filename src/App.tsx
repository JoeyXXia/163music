import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'

function App() {
  return (
    <div className="App">
      <h2>hello</h2>
      <div className="main">{useRoutes(routes)}</div>
    </div>
  )
}

export default App
