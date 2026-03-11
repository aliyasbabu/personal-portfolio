import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="w-full py-24 bg-[#0a0a0a] relative flex items-center justify-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-3xl mx-auto px-6 md:px-12 w-full text-center relative z-10 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2 mb-8 items-center"
        >
          <span className="text-cyan-400 font-mono tracking-wider font-semibold uppercase text-sm">06. What's Next?</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Get In Touch.</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-12"
        >
          Although I'm currently focused on my role at TCS, my inbox is always open. Whether you have a challenging project, an opportunity, or just want to say hi, I’ll try my best to get back to you!
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-6">
          <motion.a
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            href="mailto:aliyasbabu2@gmail.com"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-gray-900 font-bold text-lg rounded-xl hover:bg-gray-100 hover:scale-105 transition-all shadow-xl shadow-cyan-500/10"
          >
            <Mail size={24} />
            Say Hello
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.5 }}
            href="https://www.linkedin.com/in/aliyas-babu-a62b97147/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/5 text-white font-bold text-lg rounded-xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all shadow-xl"
          >
            <Linkedin size={24} />
            Connect
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
