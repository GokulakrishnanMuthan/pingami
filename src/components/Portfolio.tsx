/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import celestialFashion from '../assets/portfolio/CelestialFashion.jpg';
import eternalGaze from '../assets/portfolio/Portrait.jpg';
import eventsImage from '../assets/portfolio/events.jpg';
import silentStory from '../assets/portfolio/Candid.jpg';
import radiantLife from '../assets/portfolio/Lifestyle.jpg';

const projects = [
  {
    id: 1,
    title: "Celestial Fashion",
    category: "Fashion",
    image: celestialFashion,
    gridSpan: "md:col-span-1"
  },
  {
    id: 2,
    title: "Eternal Gaze",
    category: "Portrait",
    image: eternalGaze,
    gridSpan: "md:col-span-1"
  },
  {
    id: 3,
    title: "Silent Story",
    category: "Candid",
    image: silentStory,
    gridSpan: "md:col-span-1"
  },
  {
    id: 4,
    title: "Nocturnal Echoes",
    category: "Events",
    image: eventsImage,
    gridSpan: "md:col-span-2"
  },
  {
    id: 5,
    title: "Radiant Life",
    category: "Lifestyle",
    image: radiantLife,
    gridSpan: "md:col-span-1"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-8 md:px-16 mb-20">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-900">The Portfolio</h2>
        <div className="w-24 h-px bg-brand-accent mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className={`group relative overflow-hidden bg-gray-200 cursor-pointer ${
              project.id === 4 ? 'aspect-[16/9]' : 'aspect-[4/5]'
            } ${project.gridSpan}`}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
              <span className="text-xs uppercase tracking-widest font-space text-brand-accent mb-2">{project.category}</span>
              <h3 className="text-2xl font-serif">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <a 
          href="#" 
          className="text-sm font-serif italic tracking-widest border-b border-gray-400 pb-2 hover:text-brand-accent hover:border-brand-accent transition-colors"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
}
