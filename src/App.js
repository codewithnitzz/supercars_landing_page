import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Maserati from './components/Maserati/Maserati'
import Toyota from './components/Toyota/Toyota'
import Ford from './components/Ford/Ford'
import Mclaren from './components/Mclaren/Mclaren'
import Chevrolet from './components/Chervolet/Chevrolet'


const App = () => {
  return (
    <>
      <Navbar />
      <Maserati />
      <Toyota />
      <Ford />
      <Mclaren />
      <Chevrolet />
    </>
  )
}

export default App