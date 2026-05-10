/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Instagram, Mail, MessageCircle } from 'lucide-react';

export default function Hero() {
  // Use a high-quality photographer portrait that matches the mood
  const heroImage = "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=2070";

  return (
    <section id="hero" className="relative h-screen w-full flex items-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          src={heroImage}
          alt="Hero Portrait"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark vignette and color cast matching the mock */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
      </div>

      {/* Sidebar Social Icons (Visible on Desktop) */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center space-y-8 text-white/60">
        <div className="w-px h-24 bg-white/20 mb-4" />
        <a href="https://www.instagram.com/__pingami__" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          <Instagram size={20} />
        </a>
        <a href="https://wa.me/919092144241" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          <MessageCircle size={20} />
        </a>
        <a href="mailto:hello@pingami.studio" className="hover:text-white transition-colors">
          <Mail size={20} />
        </a>
        <div className="w-px h-24 bg-white/20 mt-4" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 text-white pt-20 mb-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >


          <h1 className="hero-title text-5xl md:text-9xl font-serif mb-6 flex flex-col tracking-tight uppercase">
            <span>Capturing</span>
            <span className="text-gradient">Emotion</span>
            <span>Beyond</span>
            <span>The Lens.</span>
          </h1>

          <div className="flex items-center space-x-4 mb-10 text-[10px] md:text-xs tracking-[0.3em] uppercase font-space text-gray-300">
            <span>Portrait</span>
            <span className="w-1 h-1 bg-brand-accent rounded-full" />
            <span>Fashion</span>
            <span className="w-1 h-1 bg-brand-accent rounded-full" />
            <span>Event</span>
            <span className="w-1 h-1 bg-brand-accent rounded-full" />
            <span>Candid</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#portfolio"
              className="group flex items-center justify-center gap-3 bg-brand-gradient px-10 py-5 rounded-full text-xs tracking-[0.2em] uppercase font-bold text-white hover:scale-105 transition-all duration-300 shadow-xl shadow-orange-900/20"
            >
              Explore Portfolio
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group flex items-center justify-center gap-3 border border-white/30 px-10 py-5 rounded-full text-xs tracking-[0.2em] uppercase font-bold text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Book a shoot
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>



      <a
        href="https://wa.me/919092144241"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-12 right-8 md:right-16 z-30 flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 px-5 py-3 rounded-full hover:bg-black/60 transition-all group scale-90 md:scale-100"
      >
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
          <MessageCircle size={18} fill="currentColor" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 font-space leading-tight">Let's Connect</span>
          <span className="text-[12px] text-white font-medium font-space">On WhatsApp</span>
        </div>
      </a>
    </section>
  );
}
