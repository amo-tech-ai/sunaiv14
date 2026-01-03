# Client Dashboard - Feature Implementation

## Overview
The **Client Dashboard** utilizes the 3-Panel Core Model (Context | Work | Intelligence) to provide a premium, AI-native execution environment for founders. It acts as the "Command Center" where strategies generated in the Wizard are executed via AI agents.

## 1. Screen Features

### A. Left Panel (Stable Context)
*   **Active Client Card**: Displays the current company, industry, and calculated AI Readiness Score.
*   **Navigation Menu**: Quick access to Briefing, Strategy, Workflows, Reports, and Settings.
*   **Enabled Systems**: Clickable chips representing the active tech stack. Clicking a system triggers the Right Panel to show specific insights (e.g., "Why we chose Salesforce").

### B. Center Panel (Work Surface)
*   **Morning Briefing (Default)**: Top 3 prioritized tasks from the strategy.
*   **Stats Grid**: Readiness Score, Pending Actions, and Live Agent Status.
*   **Phase Log**: A detailed list of strategy steps. Clicking a step selects it for analysis.
*   **Agent Terminal**: A simulated console that overlays the screen when a workflow is run, showing real-time logs (e.g., "> Connecting to CRM...").

### C. Right Panel (Reactive Intelligence)
*   **Context Aware**: Updates automatically based on what is selected in the Center or Left panels.
*   **Intelligence Card**: Displays the acting Agent (Orchestrator, Planner) and their status.
*   **Structured Insights**: Shows Impact, ROI, Risks, and Next Actions via Gemini 3 Flash.

## 2. AI Agents & Logic

### Orchestrator Agent
*   **Role**: System Architect & Master Controller.
*   **Trigger**: System Selection, Workflow Execution.
*   **Logic**: Coordinates between different systems (e.g., "Connect HubSpot to Zapier").

### Planner Agent
*   **Role**: Strategic Roadmap Owner.
*   **Trigger**: Morning Briefing, Strategy View.
*   **Logic**: Prioritizes tasks based on the user's "Readiness Gaps".

### Scorer Agent
*   **Role**: Auditor.
*   **Trigger**: Readiness Score updates.
*   **Logic**: continually benchmarks the client against industry standards.

## 3. Gemini 3 Integration

### Model Usage
*   **`gemini-3-flash-preview`**: Used for real-time dashboard intelligence (Right Panel). It offers low latency for immediate UI feedback.
*   **`gemini-3-pro-preview`**: Used for complex "Run Workflow" simulations where deep reasoning is needed (e.g., generating actual email drafts or analyzing a CSV).

### Tools Implemented
*   **Structured Output (JSON)**: All Right Panel insights are strictly typed JSON for reliable rendering.
*   **Google Search Grounding**: (Optional) Can be enabled for "Competitor Watch" workflows to fetch live web data.

## 4. Progress Tracker Checklist

- [x] **Core Layout**: 3-Panel implementation with responsive mobile tab bar.
- [x] **State Management**: `activeSelection` pattern to sync panels.
- [x] **Left Panel**: Navigation & System chips integration.
- [x] **Center Panel**: View Controller (Briefing/Workflows/Placeholder).
- [x] **Right Panel**: Reactive `dashboardIntelligence` service integration.
- [x] **Agent Simulation**: "Terminal" visual effect for workflow execution.
- [x] **Gemini Service**: `analyzeDashboardSelection` endpoint connected.

## 5. Next Steps
1.  **Workflow Persistence**: Connect "Run Workflow" to a real backend queue (Supabase/Edge Functions) instead of `setTimeout` simulation.
2.  **Report Generation**: Implement PDF generation for the "Reports" view.
3.  **Chat Deep-Linking**: Allow the Global Chat to open specific Dashboard views (e.g., "Show me my workflows" -> navigates to /workflows).
