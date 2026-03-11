import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, LayoutTemplate, Network } from 'lucide-react';

const About = () => {
  const infoCards = [
    { icon: <LayoutTemplate size={32} className="text-cyan-400" />, title: 'Frontend', desc: 'React.js, Responsive UI' },
    { icon: <Network size={32} className="text-blue-500" />, title: 'Backend', desc: 'Node.js, REST APIs' },
    { icon: <Database size={32} className="text-indigo-400" />, title: 'Database', desc: 'MySQL, Query Tuning' },
    { icon: <Code2 size={32} className="text-purple-400" />, title: 'Data Pipelines', desc: 'Ingestion, Processing' },
  ];

  return (
    <section id="about" className="w-full py-24 bg-[#121212] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2 mb-16"
        >
          <span className="text-cyan-400 font-mono tracking-wider font-semibold uppercase text-sm">01. Get to know me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">About Me.</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 text-gray-400 text-lg leading-relaxed relative"
          >
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
            
            <p>
              I am a <strong className="text-white">Full-Stack Developer</strong> specializing in React.js and Node.js with a strong focus on backend development, API design, and data processing. 
            </p>
            <p>
              Experienced in building highly scalable RESTful APIs, robust backend jobs, and complex data ingestion pipelines that support seamless application workflows. My architectural approach prioritizes systems that are resilient and easy to maintain over time.
            </p>
            <p>
              Passionate about writing clean, maintainable code, I continuously strive to improve my technical skills. I consistently engage in optimizing intensive MySQL queries and ensuring smooth integrations across the stack.
            </p>

            <div className="mt-4 pb-4 border-b border-white/10"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {infoCards.map((card, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all group flex flex-col gap-4">
                <div className="p-3 bg-white/5 w-fit rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{card.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
