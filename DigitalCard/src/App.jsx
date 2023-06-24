import React from 'react'
import './App.css'
import Info from './components/Info'
import Abt_Int from './components/Abt_Int'
import Footer from './components/Footer'

function App() {
  

  return (
    <div className="card">
      <div className="container">
      <div className="image">
        <img src='/src/assets/pic.png'></img>
      </div>
      <Info/>
      <Abt_Int/> 
      <Footer/>


      </div>
      

    </div>
  )
}

export default App
