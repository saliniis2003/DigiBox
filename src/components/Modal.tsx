import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-dark-950/80 backdrop-blur-md"
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl shadow-brand-500/10"
            >
              <div className="bg-dark-900 border border-white/10 rounded-2xl relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-50" />
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-500/20 blur-[60px] rounded-full pointer-events-none" />
                
                <div className="p-6 md:p-8">
                  <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
                  >
                    <X size={20} />
                  </button>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 pr-8 font-heading">{title}</h3>
                  <div className="text-gray-300 space-y-4 leading-relaxed relative z-10">
                    {children}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
