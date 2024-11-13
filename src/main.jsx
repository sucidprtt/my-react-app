import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Heading from './components/Heading'
import List from './components/List'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <Heading />
      <List />
    </div>
  </React.StrictMode>,
)
