import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatbotHero from './components/ChatbotHero';
import ChatbotComparison from './components/ChatbotComparison';
import ChatbotChannels from './components/ChatbotChannels';
import ChatbotAnalytics from './components/ChatbotAnalytics';
import ChatbotPricing from './components/ChatbotPricing';

const AIChatbotsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-200 selection:text-cyan-900">
      <Navbar />
      <ChatbotHero />
      <ChatbotComparison />
      <ChatbotChannels />
      <ChatbotAnalytics />
      <ChatbotPricing />
      <Footer />
    </div>
  );
};

export default AIChatbotsPage;