
import './App.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

function App() {
 

  return (
    <>
    <Navbar />
    <div className="maincont">
    <Hero />
    <Card/>
      
    </div>
  
    
    </>
  )
}

export default App
