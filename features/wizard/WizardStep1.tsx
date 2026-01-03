import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreePanelLayout, PanelSection, IntelligenceCard } from '../../components/Layout';
import { BusinessContext, WizardStep } from '../../types';
import { useAppState } from '../../context/AppContext';
import { useDebounce } from '../../hooks/useDebounce';

const INDUSTRIES = [
  "Startups & SaaS",
  "Agencies & Consulting",
  "Real Estate",
  "E-commerce & Retail",
  "Fashion & Luxury",
  "Travel & Hospitality",
  "Professional Services",
  "Healthcare",
  "Manufacturing",
  "Other"
];

const WizardStep1: React.FC = () => {
  const { wizardState, setWizardState, runAnalysis, analysisLoading } = useAppState();
  const navigate = useNavigate();

  // Debounce the description and URL to prevent API flood
  const debouncedDescription = useDebounce(wizardState.context.description, 1500);
  const debouncedUrl = useDebounce(wizardState.context.url, 1500);

  // Effect to trigger analysis when debounced values change
  useEffect(() => {
    if (debouncedDescription.length > 20 || debouncedUrl.length > 5) {
      runAnalysis(debouncedDescription, debouncedUrl);
    }
  }, [debouncedDescription, debouncedUrl]);

  const handleContextChange = (field: keyof BusinessContext, value: any) => {
    setWizardState(prev => ({
      ...prev,
      context: { ...prev.context, [field]: value }
    }));
  };

  const LeftPanel = (
    <>
      <PanelSection title="Progress">
        <div className="space-y-4">
           {[1, 2, 3, 4, 5].map(step => (
             <div key={step} className="flex items-center group">
               <div className={`
                 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border transition-colors
                 ${step === 1 ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-400 border-slate-200'}
               `}>
                 {step}
               </div>
               <span className={`ml-3 text-sm font-medium ${step === 1 ? 'text-slate-900' : 'text-slate-400'}`}>
                 {step === 1 ? 'Business Context' : step === 2 ? 'Industry Deep Dive' : step === 3 ? 'System Selection' : step === 4 ? 'Readiness' : 'Strategy'}
               </span>
             </div>
           ))}
        </div>
      </PanelSection>
      <PanelSection title="Client ID">
        <div className="p-3 bg-slate-50 rounded border border-slate-100 text-xs text-slate-400 font-mono">
            ID: SUN-{Math.random().toString(36).substr(2, 6).toUpperCase()}
        </div>
      </PanelSection>
    </>
  );

  const CenterPanel = (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-serif text-slate-900 mb-2">Tell us about your business.</h1>
        <p className="text-slate-500 text-lg">Sun AI Agency will search the web and analyze your input to build a custom intelligence profile.</p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <input 
                type="text"
                className="w-full p-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none"
                placeholder="John Doe"
                value={wizardState.context.fullName}
                onChange={(e) => handleContextChange('fullName', e.target.value)}
                />
            </div>
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                <input 
                type="text"
                className="w-full p-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none"
                placeholder="Acme Corp"
                value={wizardState.context.companyName}
                onChange={(e) => handleContextChange('companyName', e.target.value)}
                />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Website URL</label>
            <input 
              type="text"
              className="w-full p-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none"
              placeholder="https://example.com"
              value={wizardState.context.url}
              onChange={(e) => handleContextChange('url', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Industry</label>
            <select 
              className="w-full p-3 rounded-lg border border-slate-200 focus:border-blue-500 outline-none bg-white"
              value={wizardState.context.industry}
              onChange={(e) => handleContextChange('industry', e.target.value)}
            >
              {INDUSTRIES.map(ind => (
                  <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Project Description
            <span className="block text-xs font-normal text-slate-400 mt-1">
                Mention your core services, target audience, and biggest operational challenges.
            </span>
          </label>
          <textarea 
            className="w-full h-48 p-5 rounded-xl border border-slate-200 bg-white placeholder:text-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none text-slate-700 text-base leading-relaxed resize-none shadow-sm hover:border-slate-300"
            placeholder="e.g. We are a boutique design agency scaling to 20 employees. Our target audience is tech startups in Series A. We are currently struggling with project management overhead and automating client reporting..."
            value={wizardState.context.description}
            onChange={(e) => handleContextChange('description', e.target.value)}
          />
        </div>
      </div>

      <div className="pt-8 flex justify-end gap-3">
        {/* Step 1 has no back button */}
        <button 
            onClick={() => {
                setWizardState(s => ({...s, currentStep: WizardStep.IndustryDeepDive}));
                navigate('/wizard/step-2');
            }}
            className="bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-all font-medium flex items-center shadow-lg shadow-slate-900/10"
        >
            Continue to Deep Dive
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
      </div>
    </div>
  );

  const RightPanel = (
    <div className="space-y-2">
      <IntelligenceCard title="Research Agent" loading={analysisLoading}>
        {analysisLoading ? "Performing deep web search for context..." : (
           wizardState.context.searchFindings.length > 0 ? 
           <span className="text-green-600 font-medium">Search Complete</span> :
           "Waiting for input to start research..."
        )}
      </IntelligenceCard>

      {wizardState.context.searchFindings.length > 0 && (
         <IntelligenceCard title="Web Search Findings" type="info">
             <ul className="list-disc list-inside space-y-1">
                 {wizardState.context.searchFindings.map((finding, i) => (
                     <li key={i}>{finding}</li>
                 ))}
             </ul>
         </IntelligenceCard>
      )}

      {wizardState.context.inferredModel && (
          <>
            <IntelligenceCard title="Inferred Model" type="success">
                Based on our analysis, we've detected a <strong>{wizardState.context.inferredModel}</strong> model.
            </IntelligenceCard>
            <IntelligenceCard title="Core Services">
                <div className="flex flex-wrap gap-2">
                    {wizardState.context.coreServices.map(s => (
                        <span key={s} className="px-2 py-1 bg-slate-100 text-xs rounded-md text-slate-600">{s}</span>
                    ))}
                </div>
            </IntelligenceCard>
          </>
      )}
    </div>
  );

  return <ThreePanelLayout leftPanel={LeftPanel} centerPanel={CenterPanel} rightPanel={RightPanel} />;
};

export default WizardStep1;