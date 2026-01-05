import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AgentsHero from './components/AgentsHero';
import AgentsRoster from './components/AgentsRoster';
import AgentsWorkflow from './components/AgentsWorkflow';
import AgentsPricing from './components/AgentsPricing';

const AIAgentsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050508] text-white font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />
      <AgentsHero />
      <AgentsRoster />
      <AgentsWorkflow />
      <AgentsPricing />
      <Footer />
    </div>
  );
};

export default AIAgentsPage;