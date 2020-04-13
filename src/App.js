import React from 'react'

import Form from './components/Form'
import NavBar from './components/NavBar'
import logo from './assets/images/webmotors.svg'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <header>
        <div className="container">
          <img src={logo} alt="logo" />
        </div>
      </header>
      <NavBar />
      <Form />
    </div>
  )
}

export default App
