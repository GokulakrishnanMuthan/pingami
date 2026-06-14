/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import portraitImage from '../assets/services/Portrait.jpg';
import fashionImage from '../assets/services/fashion.jpg';
import eventImage from '../assets/services/event.jpg';
import candidImage from '../assets/services/candid.jpg';

const services = [
  {
    title: "Portrait",
    description: "Capturing the essence of character through intimate and powerful photography that tells your personal story.",
    image: portraitImage
  },
  {
    title: "Fashion",
    description: "High-end editorial and commercial fashion photography that blends style with evocative lighting and composition.",
    image: fashionImage
  },
  {
    title: "Event",
    description: "Documenting your most significant moments with a cinematic eye, preserving the energy and atmosphere of your events.",
    image: eventImage
  },
  {
    title: "Candid",
    description: "Unscripted and raw moments captured with precision, focusing on the genuine emotions that happen when no one is watching.",
    image: candidImage
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-900">Expert Services</h2>
          <div className="w-24 h-px bg-brand-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-8 items-center md:items-start group"
            >
              <div className="w-full md:w-48 h-64 overflow-hidden rounded-lg flex-shrink-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-serif text-brand-accent">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {service.description}
                </p>
                <div className="pt-2">
                  <a href="#contact" className="text-xs uppercase tracking-widest font-space font-bold border-b border-gray-200 pb-1 hover:border-brand-accent transition-colors">
                    Inquire for Details
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
