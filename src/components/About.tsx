import { motion } from 'motion/react';
import { Target, Zap, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Zap className="w-6 h-6 text-brand-400" />, value: "Lightning Fast", label: "Delivery & Execution" },
    { icon: <Award className="w-6 h-6 text-brand-400" />, value: "Premium", label: "Quality Assurance" },
    { icon: <Target className="w-6 h-6 text-brand-400" />, value: "Data-Driven", label: "AI Solutions" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Empowering Businesses with <span className="text-gradient-brand">Smart Solutions</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              At DigiBox, we don't just build websites; we craft digital experiences. 
              Our mission is to help business owners, startup founders, and creators 
              establish a dominant, authoritative online presence that converts visitors into loyal clients.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              From pixel-perfect logo design to intelligent AI agents that automate your workflow, 
              we combine creativity, speed, and cutting-edge technology to give your brand the premium edge it deserves.
            </p>
            
            <div className="flex items-center gap-4 border-l-4 border-brand-500 pl-6 py-2 mb-8">
              <p className="text-xl font-medium italic text-gray-200">
                "We transform visions into highly polished, powerful digital realities."
              </p>
            </div>
            
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 text-brand-400 font-medium hover:text-brand-300 transition-colors group"
            >
              Let's build something great together
              <span className="block h-[1px] bg-brand-400 group-hover:w-full w-0 transition-all absolute bottom-0 left-0" />
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="premium-card p-6 sm:p-8 rounded-3xl col-span-1 sm:col-span-2 bg-gradient-to-br from-dark-800 to-dark-900 border border-white/5 flex flex-col md:flex-row items-start md:items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-brand-500/10 flex items-center justify-center flex-shrink-0 text-brand-400 group-hover:scale-110 transition-transform duration-500">
                {stats[0].icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{stats[0].value}</h3>
                <p className="text-gray-400">{stats[0].label}</p>
              </div>
            </div>
            
            <div className="premium-card p-6 sm:p-8 rounded-3xl bg-dark-800 border border-white/5 group flex flex-col justify-between">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6 text-brand-400 group-hover:scale-110 transition-transform duration-500">
                {stats[1].icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{stats[1].value}</h3>
                <p className="text-gray-400 text-sm">{stats[1].label}</p>
              </div>
            </div>

            <div className="premium-card p-6 sm:p-8 rounded-3xl bg-dark-800 border border-white/5 group flex flex-col justify-between">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6 text-brand-400 group-hover:scale-110 transition-transform duration-500">
                {stats[2].icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{stats[2].value}</h3>
                <p className="text-gray-400 text-sm">{stats[2].label}</p>
              </div>
            </div>

            <div className="premium-card p-6 sm:p-8 rounded-3xl col-span-1 sm:col-span-2 border border-brand-500/30 bg-gradient-to-r from-brand-900/30 to-indigo-900/30 text-center flex flex-col items-center justify-center py-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 relative z-10 drop-shadow-md">100%</h3>
              <p className="text-brand-300 font-medium relative z-10 tracking-widest uppercase text-xs">Client Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
