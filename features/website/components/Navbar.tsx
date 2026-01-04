import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStart = () => {
    navigate('/wizard/step-1');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="font-serif font-bold text-xl tracking-tight flex items-center gap-2 text-slate-900">
          <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
          SUN AI AGENCY
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-[#10B981] transition-colors">Services</a>
          <a href="#process" className="hover:text-[#10B981] transition-colors">Process</a>
          <a href="#projects" className="hover:text-[#10B981] transition-colors">Work</a>
          <a href="#faq" className="hover:text-[#10B981] transition-colors">FAQ</a>
        </div>
        <button 
          onClick={handleStart}
          className="bg-[#10B981] hover:bg-[#059669] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-[0_4px_14px_rgba(16,185,129,0.4)]"
        >
          Start Assessment
        </button>
      </div>
    </nav>
  );
};

export default Navbar;