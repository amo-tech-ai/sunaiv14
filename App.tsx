
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Feature Components
import HomePage from './features/website/HomePage';
import ServicesPage from './features/website/ServicesPage';
import ProjectsPage from './features/website/ProjectsPage';
import ContactPage from './features/website/ContactPage';
import AIWebDevPage from './features/website/service-pages/AIWebDevPage';
import AIIntegrationPage from './features/website/service-pages/AIIntegrationPage';
import AIAgentsPage from './features/website/service-pages/AIAgentsPage';
import AIChatbotsPage from './features/website/service-pages/AIChatbotsPage';
import AIMVPPage from './features/website/service-pages/AIMVPPage';
import SaaSPage from './features/website/industry-pages/SaaSPage'; // New Import
import ProcessPage from './features/website/ProcessPage';
import WizardStep1 from './features/wizard/WizardStep1';
import WizardStep2 from './features/wizard/WizardStep2';
import WizardStep3 from './features/wizard/WizardStep3';
import WizardStep4 from './features/wizard/WizardStep4';
import WizardStep5 from './features/wizard/WizardStep5';
import Dashboard from './features/dashboard/Dashboard';
import ClientDashboard from './features/client-dashboard/ClientDashboard';

// Global Components
import GlobalChat from './components/GlobalChat';
import ErrorBoundary from './components/ErrorBoundary';
import RouteGuard from './components/RouteGuard';

const AppContent: React.FC = () => {
  return (
    <>
      <Routes>
        {/* Public Landing Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/ai-web-dev" element={<AIWebDevPage />} />
        <Route path="/services/ai-development" element={<AIIntegrationPage />} />
        <Route path="/services/ai-agents" element={<AIAgentsPage />} />
        <Route path="/services/ai-chatbots" element={<AIChatbotsPage />} />
        <Route path="/services/ai-mvp" element={<AIMVPPage />} />
        
        {/* Industry Pages */}
        <Route path="/industries/saas" element={<SaaSPage />} /> {/* New Route */}

        <Route path="/process" element={<ProcessPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Wizard Entry Point (Aliased) */}
        <Route path="/start" element={<WizardStep1 />} />
        
        {/* Step 1 is the entry point, no guard needed */}
        <Route path="/wizard/step-1" element={<WizardStep1 />} />
        
        {/* Protected Routes: Require basic context */}
        <Route path="/wizard/step-2" element={<RouteGuard><WizardStep2 /></RouteGuard>} />
        <Route path="/wizard/step-3" element={<RouteGuard><WizardStep3 /></RouteGuard>} />
        <Route path="/wizard/step-4" element={<RouteGuard><WizardStep4 /></RouteGuard>} />
        <Route path="/wizard/step-5" element={<RouteGuard><WizardStep5 /></RouteGuard>} />
        <Route path="/dashboard" element={<RouteGuard><Dashboard /></RouteGuard>} />
        
        {/* Client View (Mock Demo) */}
        <Route path="/client-dashboard" element={<ClientDashboard />} />
      </Routes>
      <GlobalChat />
    </>
  );
};

export default function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <HashRouter>
          <AppContent />
        </HashRouter>
      </AppProvider>
    </ErrorBoundary>
  );
}
