import React from 'react';
import { Brain, Lightbulb, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-16 neon-text">
          The Innovators
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              name: "Tom Sage",
              role: "Technical Visionary",
              icon: Brain,
              description: "Pushing the boundaries of what's possible in technology."
            },
            {
              name: "Matt Murphy",
              role: "Creative Director",
              icon: Lightbulb,
              description: "Transforming ideas into groundbreaking realities."
            }
          ].map(({ name, role, icon: Icon, description }) => (
            <div key={name} 
                 className="pixel-corners bg-gradient-to-br from-purple-900/50 to-cyan-900/50 
                            p-6 border border-cyan-500/20 backdrop-blur-sm
                            transform hover:scale-105 transition-all duration-300">
              <Icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
              <p className="text-cyan-300 mb-2">{role}</p>
              <p className="text-gray-400">{description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
          <div className="flex justify-center">
            <Cpu className="w-16 h-16 text-cyan-400 animate-pulse" />
          </div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            At SageMurphy, we blend nostalgia with innovation, creating solutions
            that honor the past while boldly stepping into the future.
          </p>
        </div>
      </div>
    </section>
  );
}