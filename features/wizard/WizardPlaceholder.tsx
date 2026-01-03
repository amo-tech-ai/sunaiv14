import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreePanelLayout, IntelligenceCard } from '../../components/Layout';
import { useAppState } from '../../context/AppContext';

interface WizardPlaceholderProps {
    title: string;
    nextPath: string;
    step: number;
}

const WizardPlaceholder: React.FC<WizardPlaceholderProps> = ({ title, nextPath, step }) => {
    const { setWizardState } = useAppState();
    const navigate = useNavigate();

    const handleNext = () => {
        setWizardState(prev => ({...prev, currentStep: step + 1}));
        navigate(nextPath);
    };

    return (
        <ThreePanelLayout 
            leftPanel={<div className="p-4 text-slate-400">Step {step} Context Locked</div>}
            centerPanel={
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <h2 className="text-2xl font-serif text-slate-800 mb-4">{title}</h2>
                    <p className="text-slate-500 mb-8 max-w-md">This screen is under construction. In the full version, specific AI agents would guide this step.</p>
                    <button onClick={handleNext} className="bg-slate-900 text-white px-6 py-2 rounded">Next Step</button>
                </div>
            }
            rightPanel={<IntelligenceCard title="AI Thinking">Pending user input...</IntelligenceCard>}
        />
    );
};

export default WizardPlaceholder;