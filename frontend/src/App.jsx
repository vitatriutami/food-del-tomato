import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes/>
    </div>
  )
}

export default App