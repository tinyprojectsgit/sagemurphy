import React from 'react';
import { Sparkles, Code, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen retro-gradient flex flex-col items-center justify-center relative scanline">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] 
                      opacity-10 bg-cover bg-center" />
      
      <div className="text-center z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text
                       animate-[glitch_3s_ease-in-out_infinite]">
          Welcome to SageMurphy.com
        </h1>
        
        <p className="text-cyan-300 text-xl md:text-2xl mb-8">
          Builders • Innovators • Dreamers
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {[
            { icon: Code, text: "Tech Innovation" },
            { icon: Sparkles, text: "Creative Vision" },
            { icon: Rocket, text: "Future Forward" }
          ].map(({ icon: Icon, text }) => (
            <div key={text} 
                 className="flex items-center space-x-2 text-white
                            animate-[float_4s_ease-in-out_infinite]">
              <Icon className="w-6 h-6 text-cyan-400" />
              <span>{text}</span>
            </div>
          ))}
        </div>
        
        <button className="pixel-btn pixel-corners">
          Explore Our World
        </button>
      </div>
    </div>
  );
}