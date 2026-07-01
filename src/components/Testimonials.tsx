import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Founder, Aura Trends",
      content: "DigiBox completely transformed our online presence. The new website is breathtaking, and the AI agent they implemented handles our customer inquiries seamlessly. Worth every penny.",
      rating: 5
    },
    {
      name: "Rahul Desai",
      role: "CEO, InnovateX Tech",
      content: "Finding an agency that truly understands modern, clean design is rare. Their team delivered a stunning logo and website faster than we expected. Highly professional.",
      rating: 5
    },
    {
      name: "Ananya Patel",
      role: "Creative Director, Studio Infinity",
      content: "The product photo polishing service gave our catalog the high-end look we needed to justify our premium pricing. Flawless execution and great communication.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative bg-dark-900 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-900/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Client <span className="text-gradient-brand">Success Stories</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Don't just take our word for it. Here's what visionary business leaders say about working with DigiBox.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="premium-card p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-500 text-brand-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 italic relative z-10 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-brand-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
