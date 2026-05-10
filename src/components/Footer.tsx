/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16 px-8 md:px-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-serif tracking-widest uppercase mb-2">PINGAMI</h3>
          <p className="text-gray-500 text-sm tracking-widest font-space uppercase">
            © 2024 PINGAMI STUDIO. ALL RIGHTS RESERVED.
          </p>
        </div>
        
        <nav className="flex space-x-10">
          <a 
            href="https://www.instagram.com/__pingami__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-widest font-space hover:text-brand-accent transition-colors"
          >
            Instagram
          </a>
          {['Behance', 'Vimeo'].map((social) => (
            <a 
              key={social} 
              href="#" 
              className="text-sm uppercase tracking-widest font-space hover:text-brand-accent transition-colors"
            >
              {social}
            </a>
          ))}
        </nav>

        <motion.button 
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 border border-gray-700 flex items-center justify-center rounded-full hover:border-brand-accent hover:text-brand-accent transition-all group"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="transform group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      </div>
    </footer>
  );
}
