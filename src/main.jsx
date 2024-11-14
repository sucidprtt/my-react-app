import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'

var count = 0;

function increase() {
  count = count + 1
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <div>
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
      </div>
    </React.StrictMode>,
  )
  
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
