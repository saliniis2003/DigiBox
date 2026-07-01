import { motion } from 'motion/react';
import { Layout, Image as ImageIcon, PenTool, Bot, ArrowRight } from 'lucide-react';
import { useModal } from '../ModalContext';

export default function Services() {
  const { openModal } = useModal();

  const services = [
    {
      icon: <Layout className="w-8 h-8 text-brand-400" />,
      title: "Business Website Creation",
      description: "High-performance, beautifully designed, and fully responsive websites tailored to convert visitors into customers.",
      details: "Our premium website creation service focuses on delivering a world-class digital experience. We craft custom, high-performance web applications using modern technologies that load instantly and drive conversions.",
      features: [
        "Custom, responsive UI/UX design",
        "Lightning-fast performance optimization",
        "Advanced SEO & accessibility practices",
        "Seamless third-party API integrations"
      ]
    },
    {
      icon: <ImageIcon className="w-8 h-8 text-brand-400" />,
      title: "Product Photo Polishing",
      description: "Professional photo editing and retouching that makes your e-commerce products stand out with absolute clarity.",
      details: "High-quality imagery is crucial for online sales. We take your raw product photos and apply professional-grade retouching to make them pop on any platform.",
      features: [
        "Background removal and replacement",
        "Color correction and grading",
        "Blemish removal and texture smoothing",
        "Shadow and reflection enhancement"
      ]
    },
    {
      icon: <PenTool className="w-8 h-8 text-brand-400" />,
      title: "Business Logo Design",
      description: "Minimalist, modern, and memorable brand identities that capture the essence of your premium business.",
      details: "A logo is the face of your brand. Our expert designers create timeless, versatile identities that look stunning on everything from a favicon to a billboard.",
      features: [
        "Original, modern conceptual design",
        "Typography and color palette selection",
        "Vector files (SVG, AI, EPS) for scalable use",
        "Brand identity guidelines"
      ]
    },
    {
      icon: <Bot className="w-8 h-8 text-brand-400" />,
      title: "AI Agent Development",
      description: "Custom AI solutions and intelligent agents to automate customer service, sales, and internal business workflows.",
      details: "Step into the future with custom-built AI agents powered by state-of-the-art Large Language Models. Automate repetitive tasks and provide 24/7 intelligent support.",
      features: [
        "24/7 intelligent customer support bots",
        "Internal workflow automation",
        "Data extraction and summarization",
        "Seamless integration with your existing CRM"
      ]
    }
  ];

  const handleServiceClick = (e: React.MouseEvent, service: any) => {
    e.preventDefault();
    openModal(
      service.title,
      <div className="space-y-6">
        <p className="text-lg text-gray-300 leading-relaxed">{service.details}</p>
        <div>
          <h4 className="text-white font-semibold mb-3">What's included:</h4>
          <ul className="list-none space-y-3">
            {service.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2.5 flex-shrink-0" />
                <span className="text-gray-400">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <a 
          href="#contact" 
          onClick={() => document.body.style.overflow = 'unset'} // Close modal side-effect on anchor jump
          className="inline-flex w-full sm:w-auto px-8 py-4 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-medium transition-all items-center justify-center gap-2 mt-4"
        >
          Request this service
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    );
  };

  return (
    <section id="services" className="py-24 relative bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Premium <span className="text-gradient-brand">Services</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We provide a comprehensive suite of digital solutions designed to elevate your brand 
            and streamline your operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="premium-card p-8 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-brand-500/30 transition-all duration-500 pointer-events-none" />
              
              <div className="w-16 h-16 rounded-xl bg-dark-800 border border-white/5 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{service.title}</h3>
              <p className="text-gray-400 mb-8 relative z-10">{service.description}</p>
              
              <button 
                onClick={(e) => handleServiceClick(e, service)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors mt-auto relative z-10 group/btn"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
