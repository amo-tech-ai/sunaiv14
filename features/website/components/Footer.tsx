import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020203] border-t border-white/5 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="font-serif font-bold text-xl tracking-tight flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
              SUN AI AGENCY
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Premium AI-native agency platform. We build products that generate real revenue using intelligent workflows.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to="/services/ai-web-dev" className="hover:text-[#10B981] transition-colors">AI Web Development</Link></li>
              <li><Link to="/services/ai-agents" className="hover:text-[#10B981] transition-colors">Autonomous Agents</Link></li>
              <li><Link to="/services/ai-chatbots" className="hover:text-[#10B981] transition-colors">AI Chatbots</Link></li>
              <li><Link to="/services/ai-development" className="hover:text-[#10B981] transition-colors">Custom AI Integration</Link></li>
              <li><Link to="/services" className="hover:text-[#10B981] transition-colors">All Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="hover:text-[#10B981] cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-[#10B981] cursor-pointer transition-colors">Case Studies</li>
              <li className="hover:text-[#10B981] cursor-pointer transition-colors">Process</li>
              <li className="hover:text-[#10B981] cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="hover:text-[#10B981] cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-[#10B981] cursor-pointer transition-colors">Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-600 text-xs">
            © 2025 Sun AI Agency. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
              <span className="text-slate-600 text-xs">San Francisco • New York • London</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;