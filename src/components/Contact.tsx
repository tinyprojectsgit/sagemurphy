import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-16 neon-text">
          Get in Touch
        </h2>
        
        <div className="pixel-corners bg-gradient-to-br from-purple-900/50 to-cyan-900/50 
                        p-8 border border-cyan-500/20 backdrop-blur-sm">
          <form className="space-y-6">
            <div>
              <label className="block text-cyan-300 mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-black/50 border border-cyan-500/20 rounded px-4 py-2
                         text-white focus:outline-none focus:border-cyan-500
                         transition-colors"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label className="block text-cyan-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-black/50 border border-cyan-500/20 rounded px-4 py-2
                         text-white focus:outline-none focus:border-cyan-500
                         transition-colors"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-cyan-300 mb-2">Message</label>
              <textarea
                className="w-full bg-black/50 border border-cyan-500/20 rounded px-4 py-2
                         text-white focus:outline-none focus:border-cyan-500
                         transition-colors h-32"
                placeholder="Your message here..."
              />
            </div>
            
            <button type="submit" className="pixel-btn pixel-corners w-full">
              <span className="flex items-center justify-center">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </span>
            </button>
          </form>
          
          <div className="mt-12 flex justify-center space-x-8">
            <a href="mailto:contact@sagemurphy.com" 
               className="text-cyan-300 hover:text-cyan-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="#" className="text-cyan-300 hover:text-cyan-400 transition-colors">
              <MessageSquare className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}