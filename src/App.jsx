
import React from 'react'
import './App.css'
// import Navbar from "../components/Navbar.jsx";
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CardsSection from './components/CardSection.jsx';
import Example from './components/Example.jsx';


function App() {
 
  return (
    <>
   <Navbar />
   <Hero />
  <CardsSection/>
  <Example />
    </>
  )
}

export default App
