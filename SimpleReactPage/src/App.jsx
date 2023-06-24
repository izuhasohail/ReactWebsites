import React from 'react'
import { ReactDOM } from 'react'
import './App.css'
import Navbar from './components/Nabvar'
import MainContent from './components/MainContent'

function App() {
  return (
    <div className="body">
      <Navbar />
      <MainContent/>
    </div>
  )
}
export default App
