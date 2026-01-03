import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { BusinessContext, WizardState, WizardStep } from '../types';
import { analyzeBusinessDescription, generateIndustryQuestions, recommendSystems, calculateReadinessScore, generateStrategy } from '../services/geminiService';

const STORAGE_KEY = 'sun_ai_wizard_state_v14';

const defaultContext: BusinessContext = {
  fullName: '',
  companyName: '',
  description: '',
  url: '',
  industry: 'Technology',
  inferredModel: null,
  coreServices: [],
  digitalMaturity: null,
  searchFindings: [],
};

const defaultState: WizardState = {
  currentStep: WizardStep.BusinessContext,
  context: defaultContext,
  industryDeepDive: { questions: [], answers: {} },
  systemRecommendations: null,
  selectedSystems: [],
  readinessAnalysis: null,
  strategy: null,
};

interface AppContextType {
  wizardState: WizardState;
  setWizardState: React.Dispatch<React.SetStateAction<WizardState>>;
  analysisLoading: boolean;
  runAnalysis: (desc: string, url: string) => void;
  generateQuestions: () => Promise<void>;
  questionsLoading: boolean;
  generateSystemRecommendations: () => Promise<void>;
  recommendationsLoading: boolean;
  runReadinessAnalysis: () => Promise<void>;
  readinessLoading: boolean;
  runStrategyGeneration: () => Promise<void>;
  strategyLoading: boolean;
  resetApp: () => void;
}

const AppStateContext = createContext<AppContextType | null>(null);

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) throw new Error("useAppState must be used within AppProvider");
  return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state from localStorage if available
  const [wizardState, setWizardState] = useState<WizardState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to load state", e);
    }
    return defaultState;
  });

  const [analysisLoading, setAnalysisLoading] = useState(false);
  const [questionsLoading, setQuestionsLoading] = useState(false);
  const [recommendationsLoading, setRecommendationsLoading] = useState(false);
  const [readinessLoading, setReadinessLoading] = useState(false);
  const [strategyLoading, setStrategyLoading] = useState(false);

  // Persistence Effect
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wizardState));
    } catch (e) {
      console.error("Failed to save state", e);
    }
  }, [wizardState]);

  const resetApp = () => {
    setWizardState(defaultState);
    localStorage.removeItem(STORAGE_KEY);
  };

  const runAnalysis = async (desc: string, url: string) => {
    // We allow analysis even if only URL is provided, or only description
    if (!desc && !url) return;
    
    setAnalysisLoading(true);
    const result = await analyzeBusinessDescription(desc, url);
    setWizardState(prev => ({
        ...prev,
        context: {
            ...prev.context,
            // If AI detects a specific industry, we prefer that, otherwise fallback to existing
            industry: result.industry !== "Unknown" ? result.industry : prev.context.industry,
            inferredModel: result.model,
            coreServices: result.services,
            digitalMaturity: result.maturity,
            searchFindings: result.searchFindings || []
        }
    }));
    setAnalysisLoading(false);
  };

  const generateQuestions = async () => {
      setQuestionsLoading(true);
      const questions = await generateIndustryQuestions(wizardState.context);
      setWizardState(prev => ({
          ...prev,
          industryDeepDive: {
              ...prev.industryDeepDive,
              questions: questions
          }
      }));
      setQuestionsLoading(false);
  };

  const generateSystemRecommendations = async () => {
      setRecommendationsLoading(true);
      const result = await recommendSystems(wizardState.context, wizardState.industryDeepDive.answers);
      setWizardState(prev => ({
          ...prev,
          systemRecommendations: result,
          // Auto-select recommended systems if none are selected yet
          selectedSystems: prev.selectedSystems.length === 0 ? result.recommendedIds : prev.selectedSystems
      }));
      setRecommendationsLoading(false);
  };

  const runReadinessAnalysis = async () => {
      setReadinessLoading(true);
      const result = await calculateReadinessScore(
          wizardState.context, 
          wizardState.industryDeepDive.answers, 
          wizardState.selectedSystems
      );
      setWizardState(prev => ({
          ...prev,
          readinessAnalysis: result
      }));
      setReadinessLoading(false);
  };

  const runStrategyGeneration = async () => {
      setStrategyLoading(true);
      const result = await generateStrategy(
          wizardState.context,
          wizardState.selectedSystems,
          wizardState.readinessAnalysis
      );
      setWizardState(prev => ({
          ...prev,
          strategy: result
      }));
      setStrategyLoading(false);
  };

  return (
    <AppStateContext.Provider value={{ 
        wizardState, 
        setWizardState, 
        analysisLoading, 
        runAnalysis,
        generateQuestions,
        questionsLoading,
        generateSystemRecommendations,
        recommendationsLoading,
        runReadinessAnalysis,
        readinessLoading,
        runStrategyGeneration,
        strategyLoading,
        resetApp
    }}>
      {children}
    </AppStateContext.Provider>
  );
};