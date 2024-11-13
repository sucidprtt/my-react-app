import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import './styles.css'

const myName = "John Doe"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <h1 className="heading" contentEditable="true">{myName} Favorite Foods</h1>
      <ul>
        <li>Burger</li>
        <li>Noodles</li>
        <li>Martabrak</li>
      </ul>
    </div>
  </React.StrictMode>,
  // <h1>Hello World</h1>
)

// var h1 = document.createElement('h1')
// h1.innerHTML = "Hello World"
// document.getElementById('root').appendChild(h1)
