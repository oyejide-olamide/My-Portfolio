// App.jsx
import React from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Project from './Components/Project/Project';
import Certification from './Components/Certification/Certification';
import Contact from './Components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="bg-gray-900 overflow-x-hidden">
      <Home />
      <About />
      <Services />
      <Project />
      <Certification />
      <Contact />
    </div>
  );
}

export default App;