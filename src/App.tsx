import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <footer className="bg-black py-6 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          © {new Date().getFullYear()} SageMurphy.com • Building Tomorrow Today
        </div>
      </footer>
    </div>
  );
}

export default App;