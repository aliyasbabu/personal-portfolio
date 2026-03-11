import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-8 text-center bg-[#0a0a0a] border-t border-white/5 relative z-10">
      <div className="flex flex-col items-center gap-6 max-w-7xl mx-auto px-6">
        
        <div className="flex items-center gap-6 text-gray-500">
          <a href="https://www.linkedin.com/in/aliyas-babu-a62b97147/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:aliyasbabu2@gmail.com" className="hover:text-cyan-400 transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
        
        <div className="flex flex-col gap-1 items-center font-mono text-sm text-gray-600">
          <p>Designed & Built by Aliyas Babu</p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
