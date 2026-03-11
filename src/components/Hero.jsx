import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Linkedin, Mail } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start gap-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Available for new opportunities
        </motion.div>

        <div 
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-tight mb-4 min-h-[120px] md:min-h-[160px]"
        >
          <TypeAnimation
            sequence={[
              "Hi, I am Aliyas Babu",
              1000,
            ]}
            wrapper="span"
            speed={50}
            cursor={true}
          />
          <br className="hidden md:block" />
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 md:text-6xl text-4xl block mt-2"
          >
            Full-Stack Developer.
          </motion.span>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed mt-4"
        >
          Systems Engineer at TCS building scalable web applications, backend services, and enterprise data workflows. Specializing in React.js, Node.js, and complex system architectures.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
        >
          <a href="#projects" className="group rounded-lg px-8 py-4 bg-white text-gray-900 font-semibold text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
            View Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="rounded-lg px-8 py-4 bg-white/5 text-white border border-white/10 font-medium text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            Contact Me
          </a>
        </motion.div>



      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-gray-500 uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} className="text-gray-500 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
