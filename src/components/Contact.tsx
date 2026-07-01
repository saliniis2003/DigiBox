import { motion } from 'motion/react';
import { Mail, MessageCircle, Send, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's Create <span className="text-gradient-brand">Brilliance</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Ready to elevate your business? Reach out to us for a quote, a consultation, 
              or just to chat about how we can help you grow. We typically respond within hours.
            </p>
            
            <div className="space-y-6">
              <a 
                href="https://wa.me/1234567890" // Placeholder, real number needed
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass-card hover:bg-white/10 transition-colors border border-white/5"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">WhatsApp Us</h4>
                  <p className="text-sm text-gray-400">Fastest response for urgent projects</p>
                </div>
              </a>
              
              <a 
                href="https://instagram.com/saline_vtul"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass-card hover:bg-white/10 transition-colors border border-white/5"
              >
                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">@saline_vtul</h4>
                  <p className="text-sm text-gray-400">Follow our creative journey</p>
                </div>
              </a>

              <a 
                href="mailto:contact@digibox.com"
                className="flex items-center gap-4 p-4 rounded-xl glass-card hover:bg-white/10 transition-colors border border-white/5"
              >
                <div className="w-12 h-12 rounded-full bg-brand-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email Us</h4>
                  <p className="text-sm text-gray-400">contact@digibox.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="glass p-8 md:p-10 rounded-2xl border border-white/10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Request a Quote</h3>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('userName') as string;
              const email = formData.get('userEmail') as string;
              const business = formData.get('businessName') as string;
              const service = formData.get('service') as string;
              const details = formData.get('details') as string;
              
              const message = `*New Quote Request*\n\n*Name:* ${name}\n*Email:* ${email}\n*Business:* ${business}\n*Service Required:* ${service}\n\n*Project Details:*\n${details}`;
              const encodedMessage = encodeURIComponent(message);
              
              // REPLACE THIS NUMBER WITH YOUR ACTUAL WHATSAPP NUMBER (include country code, no + or spaces)
              const whatsappNumber = "1234567890"; 
              
              window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Name</label>
                  <input 
                    type="text" 
                    name="userName"
                    required
                    placeholder="John Doe"
                    className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email</label>
                  <input 
                    type="email" 
                    name="userEmail"
                    required
                    placeholder="john@company.com"
                    className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Business Name</label>
                <input 
                  type="text" 
                  name="businessName"
                  placeholder="Your Company LLC"
                  className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Service Required</label>
                <select name="service" className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors appearance-none">
                  <option>Website Creation</option>
                  <option>Product Photo Polishing</option>
                  <option>Logo Design</option>
                  <option>AI Agent Development</option>
                  <option>Multiple Services</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Project Details</label>
                <textarea 
                  name="details"
                  required
                  rows={4}
                  placeholder="Tell us about your project goals..."
                  className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-all flex items-center justify-center gap-2 mt-4"
              >
                Send Request via WhatsApp
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
