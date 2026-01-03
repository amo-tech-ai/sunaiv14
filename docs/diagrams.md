# Nexus Platform Architecture & Diagrams

## 1. System Architecture
High-level overview of the Client-Side architecture and AI integration.

```mermaid
graph TD
    User[User] -->|Interacts| Client[React Client]
    
    subgraph Client App
        Router[HashRouter] -->|Routes| Wizard[Wizard Module]
        Router -->|Routes| Dash[Dashboard Module]
        
        Wizard -->|Updates| GlobalState[Global Context Provider]
        Dash -->|Reads| GlobalState
        
        GlobalState -->|Triggers| GeminiSvc[Gemini Service]
    end
    
    GeminiSvc -->|REST API| GoogleAI[Google Gemini API]
    
    subgraph AI Models
        Flash[gemini-3-flash-preview]
        Pro[gemini-3-pro-preview]
    end
    
    GoogleAI --> Flash
    GoogleAI --> Pro
```

## 2. Wizard User Journey
The linear progression through the intelligent onboarding process.

```mermaid
journey
    title Nexus Wizard Onboarding
    section Context (Step 1)
      User enters details: 5: User
      AI analyzes website: 5: Research Agent
      AI infers industry: 5: Analyzer Agent
    section Deep Dive (Step 2)
      AI generates questions: 4: Planner Agent
      User answers: 5: User
      AI benchmarks answers: 4: Industry Specialist
    section Selection (Step 3)
      AI recommends systems: 5: Orchestrator Agent
      User confirms selection: 5: User
    section Analysis (Step 4)
      AI calculates score: 5: Scorer Agent
      AI identifies gaps: 5: Analyzer Agent
    section Strategy (Step 5)
      AI generates roadmap: 5: Planner Agent
      User executes: 5: User
```

## 3. Data Model (State ERD)
Representation of the TypeScript interfaces driving the application state.

```mermaid
erDiagram
    WizardState ||--|| BusinessContext : contains
    WizardState ||--|{ SelectedSystems : includes
    WizardState ||--|| IndustryDeepDive : contains
    
    BusinessContext {
        string name
        string description
        string url
        string industry
        string stage
        string inferredModel
        string[] coreServices
        string digitalMaturity
    }
    
    IndustryDeepDive {
        map answers "QuestionID -> Answer"
    }
    
    SelectedSystems {
        string[] systemIds
    }

    AIAnalysisCard {
        string title
        string content
        string type
        boolean loading
    }
```

## 4. AI Agent Orchestration
How different agents interact with specific screens and the underlying Gemini models.

```mermaid
graph LR
    subgraph Inputs
        Desc[Description/URL]
        Ans[User Answers]
        Sel[System Selection]
    end

    subgraph Agents
        Research[Research Agent]
        Analyzer[Analyzer Agent]
        Planner[Planner Agent]
        Scorer[Scoring Agent]
        Orch[Orchestrator]
    end

    subgraph Models
        G_Flash[Gemini 3 Flash]
        G_Pro[Gemini 3 Pro]
    end

    Desc --> Research
    Desc --> Analyzer
    Research -->|Web Grounding| G_Flash
    Analyzer -->|Inference| G_Flash

    Ans --> Planner
    Planner -->|Question Gen| G_Flash

    Sel --> Orch
    Orch -->|Recs| G_Flash

    Ans & Sel --> Scorer
    Scorer -->|Complex Math| G_Pro

    subgraph Outputs
        Context[Context Profile]
        Gap[Gap Analysis]
        Plan[Strategic Roadmap]
    end

    Research & Analyzer --> Context
    Scorer --> Gap
    Orch & Planner --> Plan
```

## 5. Dashboard State Consumption
How the Command Center renders based on the completed Wizard state.

```mermaid
flowchart TD
    State[WizardState (Complete)] -->|Read| Dash[Dashboard Component]
    
    Dash --> KPI[KPI Cards]
    Dash --> Tasks[Active Tasks]
    Dash --> AgentStat[Agent Status]
    
    State -->|Context.Readiness| KPI
    State -->|Context.Strategy| Tasks
    
    subgraph Live Intelligence
        Orch[Orchestrator Agent]
        Monitor[Monitor Loop]
    end
    
    Tasks -.->|Feed| Monitor
    Monitor -->|Update| Orch
    Orch -->|Suggestion| DashUI[Right Panel UI]
```

## 6. Chatbot Context Injection Flow
Shows how the Global Assistant retrieves context before sending to Gemini.

```mermaid
sequenceDiagram
    participant User
    participant ChatUI
    participant ChatAgent
    participant AppState
    participant Gemini

    User->>ChatUI: "How do I fix my data gap?"
    ChatUI->>ChatAgent: Send Message
    ChatAgent->>AppState: Fetch BusinessContext & ReadinessScore
    AppState-->>ChatAgent: Return JSON Context
    ChatAgent->>Gemini: Send Prompt + System Instruction (Context)
    Gemini-->>ChatAgent: Response (with reference to Score)
    ChatAgent->>ChatUI: Display Answer
```
