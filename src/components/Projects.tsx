import React from 'react';
import { Zap, Globe, Shield, Cpu } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      icon: Zap,
      title: "Tech Innovations",
      description: "Cutting-edge solutions pushing technological boundaries",
      achievements: ["AI Integration", "Blockchain Solutions", "IoT Platforms"]
    },
    {
      icon: Globe,
      title: "Creative Ventures",
      description: "Unique digital experiences that captivate and inspire",
      achievements: ["Interactive Platforms", "Digital Art", "Virtual Worlds"]
    },
    {
      icon: Shield,
      title: "Future Concepts",
      description: "Revolutionary ideas shaping tomorrow's technology",
      achievements: ["Quantum Computing", "Neural Interfaces", "Space Tech"]
    }
  ];

  return (
    <section id="projects" className="py-20 retro-gradient relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-16 neon-text">
          Our Projects
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map(({ icon: Icon, title, description, achievements }) => (
            <div key={title} 
                 className="pixel-corners bg-black/40 backdrop-blur-sm p-6
                            border border-cyan-500/20 hover:border-cyan-500/40
                            transform hover:scale-105 transition-all duration-300">
              <Icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-400 mb-4">{description}</p>
              <ul className="space-y-2">
                {achievements.map((achievement) => (
                  <li key={achievement} 
                      className="flex items-center text-cyan-300">
                    <Cpu className="w-4 h-4 mr-2" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}