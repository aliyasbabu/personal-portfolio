import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Java", "Python"],
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Frontend",
      skills: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Backend",
      skills: ["Node.js", "REST APIs", "Backend Development", "Data Processing Jobs"],
      color: "from-emerald-400 to-teal-500"
    },
    {
      title: "Database",
      skills: ["MySQL", "SQL Query Optimization", "Firebase"],
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="w-full py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2 mb-16 text-center"
        >
          <span className="text-cyan-400 font-mono tracking-wider font-semibold uppercase text-sm">02. My technical toolkit</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Skills & Tech Stack.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#121212] border border-white/5 shadow-2xl hover:border-white/10 transition-colors group"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}></span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-4 py-2 rounded-lg bg-white/5 text-gray-300 text-sm font-medium border border-white/5 group-hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
