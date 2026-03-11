import React from 'react';
import { motion } from 'framer-motion';
import { Folder } from 'lucide-react';


const Projects = () => {
  const projects = [
    {
      title: "Invoice Generation System",
      description: "A full-stack application built for streamlined invoicing. Generates invoices automatically based on selected items and implements dynamic tax calculation logic.",
      tech: ["React.js", "Node.js", "MySQL", "Express"]
    },
    {
      title: "TrashTrack",
      description: "Waste Pickup Management App developed as a cross-platform mobile application. Allows users to request waste pickup services and helps route drivers to manage waste collection efficiently.",
      tech: ["Flutter", "Firebase", "Dart", "Google Maps API"]
    }
  ];

  return (
    <section id="projects" className="w-full py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2 mb-16 text-center"
        >
          <span className="text-cyan-400 font-mono tracking-wider font-semibold uppercase text-sm">04. Some things I've built</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Featured Projects.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative flex flex-col justify-between p-8 rounded-3xl bg-[#121212] border border-white/5 hover:-translate-y-2 transition-transform duration-300 h-full shadow-2xl overflow-hidden"
            >
              {/* Card gradient effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <div className="p-3 bg-white/5 rounded-xl text-cyan-400">
                    <Folder size={32} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-4">{project.title}</h3>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">{project.description}</p>
                </div>

                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-mono text-gray-500 mt-auto">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
