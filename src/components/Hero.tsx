import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero({ bgImage }: { bgImage: string | null }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image / Gradient */}
      <div className="absolute inset-0 z-0">
        {bgImage ? (
          <img src={bgImage} alt="Abstract Background" className="w-full h-full object-cover object-center sm:object-[center_top] opacity-40 mix-blend-screen" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-dark-900 via-dark-800 to-brand-950 opacity-80" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/50 to-dark-900" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="col-span-1 lg:col-span-8 lg:col-start-3 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full glass text-brand-300 text-sm font-medium mb-6">
              Welcome to the Future of Digital
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Crafting <span className="text-gradient-brand">Digital Excellence</span> for Modern Brands
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              DigiBox provides premium business website creation, high-end product photo polishing, 
              distinctive logo design, and intelligent AI agent solutions. We build powerful 
              online presences that command authority.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-600 hover:bg-brand-500 text-white text-lg font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2 group"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full glass hover:bg-white/10 text-white text-lg font-medium transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                Contact on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-brand-500 to-transparent"
          animate={{ height: ["0%", "100%", "0%"], y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
