import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-gray-200 font-sans selection:bg-cyan-500/30">
      <Navbar />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
