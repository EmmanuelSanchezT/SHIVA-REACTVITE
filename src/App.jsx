import React from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'

function App() {
  return (
    <div className="App">
      <Header/>
      <Section1/>
      <Section2/>
      <Section3
      titulo ='PROPUESTA'
      texto ='APRENDER JUGANDO es una estrategia que implica potenciar una habilidad, conocimiento y/o actitud en específico a través de la metacognición. Cuando uno juega, siempre aprende algo.'
      img ='AprenderJugando.jpg'
      />
      <Section4/>
      <Section5/>
      <Footer/>
     
    </div>
  )
}

export default App
