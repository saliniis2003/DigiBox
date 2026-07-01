import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ModalProvider } from './ModalContext';
import Reveal from './components/Reveal';

// The build system automatically provides these if they were generated successfully
// If they fail to generate, they will be undefined, so we pass null safely.
const ASSETS = {
  hero_background: "/hero_background.png", // Or we could use imported vars if we had them, but let's assume they are statically served or pass null to use fallback.
  portfolio_web: "/portfolio_web.png",
  portfolio_ai: "/portfolio_ai.png",
};

export default function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-dark-900 text-gray-100 font-sans selection:bg-brand-500/30">
        <Header />
        <main>
          {/* Pass null for now, the components will use nice fallback gradients/unsplash if needed, 
              or we can try to load the generated files if we know they exist. */}
          <Hero bgImage="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2564&q=80" />
          <Reveal delay={100}><About /></Reveal>
          <Reveal delay={100}><Services /></Reveal>
          <Reveal delay={100}><Portfolio aiImage={null} webImage={null} /></Reveal>
          <Reveal delay={100}><Testimonials /></Reveal>
          <Reveal delay={100}><Contact /></Reveal>
        </main>
        <Footer />
      </div>
    </ModalProvider>
  );
}

