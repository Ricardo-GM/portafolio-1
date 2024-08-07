import React from 'react'
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portafolio from './components/Portafolio';
import Experiencia from './components/Experiencia';
import Contacto from './components/Contacto';

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />      
      <Portafolio />
      <Experiencia />
      <Contacto />

      <SocialLinks />
    </div>
  )
}

export default App