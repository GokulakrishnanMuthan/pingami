/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Facebook, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-8 py-6 md:px-16 flex justify-between items-center ${isScrolled ? 'bg-black/60 backdrop-blur-md py-4' : 'bg-transparent'
        }`}
    >
      <div className="logo-container">
        <a href="#" className="flex flex-col">
          <span className="text-xl md:text-2xl font-serif tracking-[0.2em] uppercase font-medium text-white">
            PINGAMI
          </span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 -mt-1 text-center font-space">
            PHOTOGRAPHY
          </span>
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-10 items-center">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`nav-link relative text-[11px] uppercase tracking-widest font-space transition-colors hover:text-white group ${link.name === 'Home' ? 'text-white' : 'text-gray-300'
              }`}
          >
            {link.name}
            {link.name === 'Home' && (
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
            )}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full opacity-0" />
          </a>
        ))}
      </nav>

      {/* Action Buttons */}
      <div className="hidden md:flex items-center space-x-6">
        <a
          href="#contact"
          className="px-6 py-2 border border-white/30 rounded-full text-[11px] uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all flex items-center gap-2 group font-space"
        >
          Book a shoot
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight size={14} />
          </motion.span>
        </a>

      </div>

      {/* Mobile Toggle only */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface border-t border-gray-100 py-8 px-8 flex flex-col space-y-6 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-serif uppercase tracking-widest text-gray-800 hover:text-brand-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-6 pt-4 border-t border-gray-100">
              <a href="#" className="text-gray-600 hover:text-brand-accent">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-accent">
                <Facebook size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
