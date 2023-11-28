import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import  './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { root } from 'postcss'

ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <App />
  </Router>,
)
