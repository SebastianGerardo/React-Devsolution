import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SomeContext from './context/UserContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SomeContext>
      <App />
    </SomeContext>
  </React.StrictMode>,
)
