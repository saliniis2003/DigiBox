import { Logo } from './Logo';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useModal } from '../ModalContext';

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompanyClick = (e: React.MouseEvent, type: string) => {
    e.preventDefault();
    if (type === 'about') {
      openModal(
        "About DigiBox",
        <div className="space-y-4">
          <p className="text-lg text-gray-300">
            DigiBox is a premium digital agency committed to crafting world-class online experiences.
          </p>
          <p className="text-gray-400">
            Founded on the principles of speed, quality, and modern design, we help business owners, startup founders, and creators establish a dominant online presence. We specialize in everything from pixel-perfect logo design to intelligent AI agent deployment.
          </p>
          <div className="mt-6 p-4 rounded-xl bg-brand-500/10 border border-brand-500/20">
            <h4 className="font-bold text-white mb-2">Our Mission</h4>
            <p className="text-gray-400 text-sm">To transform your vision into a powerful digital reality that converts visitors into loyal clients.</p>
          </div>
        </div>
      );
    } else if (type === 'work') {
      openModal(
        "Our Work Quality",
        <div className="space-y-4">
          <p className="text-lg text-gray-300">
            Every project we undertake is treated with the highest level of craftsmanship.
          </p>
          <p className="text-gray-400">
            We don't settle for templates or generic solutions. Our team spends hours refining the typography, spacing, performance, and aesthetic rhythm of your digital products.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-400 mt-4">
            <li>Custom, from-scratch design</li>
            <li>Mobile-first, fully responsive development</li>
            <li>High-end visual asset polishing</li>
          </ul>
        </div>
      );
    } else if (type === 'reviews') {
      openModal(
        "Client Commitment",
        <div className="space-y-4">
          <p className="text-lg text-gray-300">
            We measure our success entirely by the success of our clients.
          </p>
          <p className="text-gray-400">
            Our 5-star standard means we deliver exactly what we promise, on time, and with flawless execution.
          </p>
          <div className="mt-4 flex gap-2">
            {[1,2,3,4,5].map(i => <span key={i} className="text-brand-500 text-xl">★</span>)}
          </div>
          <p className="text-sm text-brand-400 mt-2 font-medium">100% Satisfaction Guarantee</p>
        </div>
      );
    }
  };

  return (
    <footer className="bg-dark-950 pt-20 pb-10 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <Logo className="h-8 w-8 text-brand-400" />
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                Digi<span className="text-brand-400">Box</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering modern brands with premium digital solutions, from websites and logos to advanced AI automation.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-brand-400 transition-colors text-sm">Website Creation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-400 transition-colors text-sm">Product Photo Editing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-400 transition-colors text-sm">Business Logo Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-400 transition-colors text-sm">AI Agent Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" onClick={(e) => handleCompanyClick(e, 'about')} className="text-gray-400 hover:text-brand-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#" onClick={(e) => handleCompanyClick(e, 'work')} className="text-gray-400 hover:text-brand-400 transition-colors text-sm">Our Approach</a></li>
              <li><a href="#" onClick={(e) => handleCompanyClick(e, 'reviews')} className="text-gray-400 hover:text-brand-400 transition-colors text-sm">Client Standards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Connect</h4>
            <ul className="space-y-4">
              <li><a href="https://instagram.com/saline_vtul" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-400 transition-colors text-sm">Instagram</a></li>
              <li><a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-400 transition-colors text-sm">WhatsApp</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-brand-400 transition-colors text-sm">Contact Form</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DigiBox. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-brand-600 hover:bg-brand-500 text-white flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 z-50 ${
          showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
