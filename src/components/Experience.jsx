import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Systems Engineer",
      company: "TCS",
      date: "Present",
      description: [
        "Developed and maintained full-stack features in a React and Node.js application.",
        "Built backend data processing jobs and APIs for enterprise data workflows.",
        "Implemented data transformation pipelines and file ingestion utilities.",
        "Wrote complex MySQL queries for backend jobs and application features.",
        "Contributed to UI components and resolved frontend and backend issues."
      ]
    }
  ];

  return (
    <section id="experience" className="w-full py-24 bg-[#121212] relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2 mb-16 text-center md:text-left"
        >
          <span className="text-cyan-400 font-mono tracking-wider font-semibold uppercase text-sm">03. Where I've worked</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Work Experience.</h2>
        </motion.div>

        <div className="flex flex-col gap-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="relative pl-8 md:pl-0"
            >
              
              <div className="md:grid md:grid-cols-5 gap-8">
                {/* Timeline for desktop / absolute for mobile */}
                <div className="hidden md:flex flex-col items-center col-span-1 pt-2">
                  <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center relative z-10">
                    <Briefcase className="text-cyan-400" size={20} />
                  </div>
                  <div className="w-0.5 h-full bg-gradient-to-b from-white/10 to-transparent mt-4"></div>
                </div>

                {/* Mobile timeline dot */}
                <div className="md:hidden absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-cyan-400 bg-[#121212]"></div>
                <div className="md:hidden absolute left-[7px] top-6 bottom-0 w-[2px] bg-white/10"></div>

                <div className="md:col-span-4 bg-[#1a1a1a] p-8 rounded-3xl border border-white/5 hover:border-cyan-500/20 transition-all shadow-xl relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <p className="text-xl text-cyan-400 mt-1 font-medium">{exp.company}</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-gray-400 text-sm font-mono border border-white/10 w-fit">
                      {exp.date}
                    </span>
                  </div>
                  
                  <ul className="flex flex-col gap-4 text-gray-400 text-base md:text-lg">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="text-cyan-400 mt-1.5 opacity-80">▹</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
