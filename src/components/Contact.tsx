/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Inquiry Type',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "919092144241"; // Indian country code + number
    const text = `Hello PINGAMI!%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Inquiry:* ${formData.type}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-8 md:px-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif mb-8 leading-tight">
            Let's Create Something <span className="text-brand-accent">Extraordinary</span>
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Currently booking for portrait sessions and commercial projects. Inquire today for pricing and availability.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-brand-accent border border-surface-dim shadow-sm">
                <Mail size={20} />
              </span>
              <a href="mailto:pingamiphotography@gmail.com" className="text-gray-800 font-medium font-space hover:text-brand-accent transition-colors">
                pingamiphotography@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-brand-accent border border-surface-dim shadow-sm">
                <MapPin size={20} />
              </span>
              <span className="text-gray-800 font-medium font-space">Bangalore | Global</span>
            </div>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Full Name" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full border-0 border-b border-gray-300 bg-transparent py-4 focus:ring-0 focus:border-brand-accent placeholder:text-gray-400 transition-colors font-space"
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full border-0 border-b border-gray-300 bg-transparent py-4 focus:ring-0 focus:border-brand-accent placeholder:text-gray-400 transition-colors font-space"
            />
          </div>
          <select 
            className="w-full border-0 border-b border-gray-300 bg-transparent py-4 focus:ring-0 focus:border-brand-accent text-gray-500 font-space cursor-pointer"
            value={formData.type}
            onChange={(e) => setFormData({...formData, type: e.target.value})}
          >
            <option disabled value="Inquiry Type">Inquiry Type</option>
            <option>Portrait Session</option>
            <option>Fashion Shoot</option>
            <option>Event Coverage</option>
            <option>Commercial/Reels</option>
          </select>
          <textarea 
            placeholder="Tell us about your project..." 
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full border-0 border-b border-gray-300 bg-transparent py-4 focus:ring-0 focus:border-brand-accent placeholder:text-gray-400 resize-none transition-colors font-space"
          />
          <button 
            type="submit" 
            className="w-full bg-gray-900 text-white py-5 text-sm uppercase tracking-widest font-bold font-space hover:bg-brand-accent transition-all duration-300 transform active:scale-95"
          >
            Send via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
