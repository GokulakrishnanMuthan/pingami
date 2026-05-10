/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import photographerImage from '../assets/about/jithin.png';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-8 md:px-16 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-brand-gradient opacity-20 rounded-2xl blur-2xl transition-opacity group-hover:opacity-30" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10">
            <img 
              src={photographerImage} 
              alt="The Photographer" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-gradient rounded-full blur-3xl opacity-20" />
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs tracking-[0.4em] uppercase text-orange-400 font-space block mb-4">
              The Artisan Behind The Lens
            </span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Capturing the <span className="italic text-gradient">unseen</span>, <br />
              documenting the soul.
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed font-light"
          >
            PINGAMI isn't just a studio; it's a philosophy. Based in Bangalore, we specialize in high-end editorial photography that transcends technical precision to find the raw emotion in every frame. 
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-base leading-relaxed font-light italic border-l-2 border-orange-500 pl-6"
          >
            "We believe every face tells a story, and every moment is a masterpiece waiting to be discovered. Our goal is to make those stories immortal."
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-6"
          >
            <a 
              href="#contact" 
              className="group flex items-center gap-4 text-xs uppercase tracking-widest font-bold text-white transition-all bg-white/5 border border-white/10 px-8 py-5 rounded-full hover:bg-white hover:text-black w-fit font-space"
            >
              Meet The Team
              <motion.span 
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
