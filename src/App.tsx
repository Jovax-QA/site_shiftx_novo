import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Evolution';
import Portfolio from './components/ValueCards';
import Stats from './components/BusinessResults';
import Process from './components/Pipeline';
import WhyShiftX from './components/StrategicVision';
import FinalCTA from './components/FinalCTA';

function App() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.animate-in').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-[#080808] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Stats />
      <Process />
      <WhyShiftX />
      <FinalCTA />
    </div>
  );
}

export default App;
