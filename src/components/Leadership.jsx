import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const Leadership = () => {
  return (
    <section id="leadership" className="w-full py-24 bg-[#121212] relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2 mb-16 items-center text-center"
        >
          <span className="text-cyan-400 font-mono tracking-wider font-semibold uppercase text-sm">05. Extracurriculars</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Leadership.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none group-hover:text-cyan-900/10 transition-colors">
            <Users size={120} />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-2">Student Placement Coordinator</h3>
            <p className="text-xl text-cyan-400 mb-8 font-medium">CUSAT</p>
            
            <ul className="flex flex-col gap-4 text-gray-400 text-lg leading-relaxed">
              <li className="flex items-start gap-4">
                <span className="text-cyan-400 mt-1.5">—</span>
                <span>Coordinated placement activities between students, faculty, and top recruiters to ensure seamless hiring processes.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-cyan-400 mt-1.5">—</span>
                <span>Assisted in organizing recruitment drives, pre-placement training sessions, and massive job fairs.</span>
              </li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Leadership;
