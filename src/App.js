import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import  Footer from './components/Footer';

import './styles/styles.css';
import './styles/social.css';
import './styles/fonts.css';




function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <About textos="Hola mi nombre es Tsutsumi Jose Antonio y soy Programador Web Full stack. Este es mi portafolio de trabajo 
          realizado en los cursos de programador y curso de React avanzado."/>
      <Projects/>
      <Contacts/>
      <Footer textos="Todos los derechos reservados - Tsutsumi Jose Antonio."/>
    </div>
    </>
  );
}

export default App;
