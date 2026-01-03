import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Feature Components
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
        <Route path="/" element={<Navigate to="/wizard/step-1" replace />} />
        
        {/* Step 1 is the entry point, no guard needed */}
        <Route path="/wizard/step-1" element={<WizardStep1 />} />
        
        {/* Protected Routes: Require basic context */}
        <Route path="/wizard/step-2" element={<RouteGuard><WizardStep2 /></RouteGuard>} />
        <Route path="/wizard/step-3" element={<RouteGuard><WizardStep3 /></RouteGuard>} />
        <Route path="/wizard/step-4" element={<RouteGuard><WizardStep4 /></RouteGuard>} />
        <Route path="/wizard/step-5" element={<RouteGuard><WizardStep5 /></RouteGuard>} />
        <Route path="/dashboard" element={<RouteGuard><Dashboard /></RouteGuard>} />
        
        {/* Client View (New) - No RouteGuard needed for demo/mock */}
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