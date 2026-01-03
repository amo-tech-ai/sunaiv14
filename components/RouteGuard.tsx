import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppState } from '../context/AppContext';

interface RouteGuardProps {
    children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
    const { wizardState } = useAppState();

    // Check if we have basic context (company name OR description OR url)
    // If not, the user likely refreshed a fresh session or jumped URL.
    const hasContext = 
        !!wizardState.context.companyName || 
        !!wizardState.context.description || 
        !!wizardState.context.url;

    if (!hasContext) {
        return <Navigate to="/wizard/step-1" replace />;
    }

    return <>{children}</>;
};

export default RouteGuard;