// Business Context Types
export interface BusinessContext {
  fullName: string;
  companyName: string;
  description: string;
  url: string;
  industry: string;
  inferredModel: string | null;
  coreServices: string[];
  digitalMaturity: string | null;
  // New field for deep search results
  searchFindings: string[]; 
}

// Question Interface for Step 2
export interface Question {
  id: string;
  category: 'Business' | 'AI_Feature'; // New category to distinguish question types
  text: string;
  type: 'radio' | 'checkbox';
  options: string[];
  whyThisMatters: string;
  industryBenchmark: string;
}

// System Recommendation for Step 3
export interface SystemRecommendation {
  recommendedIds: string[];
  reasoning: string;
}

// Readiness Analysis for Step 4
export interface ReadinessAnalysis {
  overallScore: number; // 0-100
  categoryBreakdown: {
    category: string;
    score: number; // 0-100
  }[];
  criticalGaps: string[];
  quickWins: string[];
  projectedImpact: string;
}

// Strategy Roadmap for Step 5
export interface RoadmapPhase {
  phaseName: string;
  timeline: string;
  objective: string;
  steps: string[];
}

export interface Strategy {
  phases: RoadmapPhase[];
  risks: string[];
  agentAllocation: {
    agentName: string;
    task: string;
  }[];
}

// Wizard State Types
export enum WizardStep {
  BusinessContext = 1,
  IndustryDeepDive = 2,
  SystemSelection = 3,
  ReadinessScore = 4,
  StrategySummary = 5,
}

export interface WizardState {
  currentStep: WizardStep;
  context: BusinessContext;
  industryDeepDive: {
    questions: Question[];
    answers: Record<string, string>;
  };
  systemRecommendations: SystemRecommendation | null;
  selectedSystems: string[];
  readinessAnalysis: ReadinessAnalysis | null;
  strategy: Strategy | null;
}

// AI Analysis Types
export interface AIAnalysisCard {
  title: string;
  content: string;
  type: 'insight' | 'warning' | 'recommendation' | 'info';
  loading?: boolean;
}

export interface Message {
    role: 'user' | 'model';
    text: string;
}

// Dashboard Specific Types
export interface DashboardSelection {
  type: 'briefing_item' | 'phase' | 'system' | 'report';
  id: string;
  title: string;
  metadata?: any;
}

export interface IntelligenceResponse {
  agent: string;
  status: 'Monitoring' | 'Active' | 'Waiting';
  summary: string;
  impact: string;
  risks: string[];
  dependencies: string[];
  next_actions: string[];
  time_estimate: string;
}

// Workflow Engine Types
export interface WorkflowSession {
  id: string;
  task: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  created_at: string;
}

export interface WorkflowLog {
  id: string;
  workflow_id: string;
  message: string;
  type: 'info' | 'success' | 'error' | 'artifact';
  timestamp: string;
  artifact_content?: string; // If type is 'artifact', this holds the generated content
}