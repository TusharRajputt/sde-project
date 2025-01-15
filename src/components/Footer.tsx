import React from 'react';
import { Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-gray-400 text-sm">
              Providing responsive solutions for modern web applications.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:tusharrajput4490@gmail.com" className="hover:text-white transition-colors">
                tusharrajput4490@gmail.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/tushar-dev-singh-09793923a/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a 
                href="https://github.com/TusharRajputt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}