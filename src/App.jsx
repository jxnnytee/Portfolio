import React from 'react';
import { Home } from './Home';
import { About } from './About';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Contact } from './Contact';
import { Navbar } from './Navbar';

function App() {
  
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Skills />
    <Contact />
    </>
  );
};

export default App;

