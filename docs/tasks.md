# Nexus Platform Development Tasks

Follow these tasks sequentially to implement the specific Industry Intelligence and expanded System Selection features.

## 01-implement-vertical-intelligence
**Goal**: Update `geminiService.ts` to generate highly specific questions for the 7 key industries defined.

**Target Industries**:
1.  **Startups & SaaS**
2.  **Agencies & Consulting**
3.  **Real Estate**
4.  **E-commerce & Retail**
5.  **Fashion & Luxury**
6.  **Travel & Hospitality**
7.  **Professional Services**

**Prompt to run**:
```text
Act as a Senior AI Engineer. Update `generateIndustryQuestions` in `services/geminiService.ts`.

1.  **Context**: Use the user's `industry` and `searchFindings`.
2.  **Logic**: Implement a prompt strategy that asks:
    -   *Real Estate*: "How do you currently manage listing distribution?" / "Do you use AI for virtual staging?"
    -   *Fashion*: "How do you forecast seasonal trends?" / "Do you use AI for model generation?"
    -   *Travel*: "How are itineraries currently generated?" / "Do you have a 24/7 concierge bot?"
    -   *Startups*: "What is your current MVP development velocity?" / "Are you using AI coding assistants?"
3.  **Categories**: Ensure every question is tagged as 'Business' (Revenue/Ops) or 'AI_Feature' (Tech/Automation).
4.  **Output**: Ensure the questions feel like a consultant who knows that specific industry.
```

## 02-update-system-selection-ui
**Goal**: Revamp Wizard Step 3 to support the 8 new system categories and multi-select logic.

**New Categories**:
1.  **AI Dashboards** (Analytics, BI)
2.  **AI Chat Assistants** (Customer/Internal)
3.  **Automation Systems** (Zapier, Make, n8n)
4.  **AI-Enhanced CRM** (Salesforce, HubSpot)
5.  **Internal Operations Tools** (Notion, Linear)
6.  **Knowledge Bases & Internal Tools**
7.  **Communication & Social Media**
8.  **Data & Infrastructure Services**

**Prompt to run**:
```text
Act as a Frontend Developer. Update `features/wizard/WizardStep3.tsx` and `geminiService.ts`.

1.  **Data**: Update `AVAILABLE_SYSTEMS` constant with the 8 new categories above. Update icons to match.
2.  **AI Service**: Update `recommendSystems` in `geminiService.ts` to recommend from these 8 specific categories based on the `searchFindings`.
    -   *Logic*: If `searchFindings` mention "Instagram growth", recommend "Communication & Social Media".
    -   *Logic*: If "High volume support tickets", recommend "AI Chat Assistants" and "Knowledge Bases".
3.  **UI**: Ensure the grid is responsive (1 col mobile, 2 col tablet, 3-4 col desktop).
```

## 03-search-based-readiness-scoring
**Goal**: Use the Deep Search context to "audit" the client's maturity before they even answer.

**Prompt to run**:
```text
Act as an AI Engineer. Update `calculateReadinessScore` in `geminiService.ts`.

1.  **Input**: Take `context.searchFindings` (e.g., "Uses Shopify", "No Facebook Pixel found", "Blog inactive").
2.  **Thinking Logic**:
    -   If Industry = **E-commerce** AND Search = "No Pixel", Score = Low on Data Maturity.
    -   If Industry = **SaaS** AND Search = "Active API Docs", Score = High on Digital Maturity.
3.  **Output**: A score (0-100) and a "Gap Analysis" that specifically references what was missing in the search findings.
```

## 04-dashboard-morning-briefing
**Goal**: Make the dashboard actionable using the Strategy generated in Step 5.

**Prompt to run**:
```text
Act as a Full Stack Developer. Update `features/dashboard/Dashboard.tsx`.

1.  **Feature**: Add a "Morning Briefing" section.
2.  **Logic**: Display the top 3 tasks from the Current Phase of the Strategy.
3.  **Interaction**: Add a "Run AI Workflow" button next to tasks that triggers a mock Agent action (e.g., "Drafting email...", "Analyzing data...").
```

## 05-global-chat-integration
**Goal**: Allow the user to query their own business context via a persistent chat.

**Prompt to run**:
```text
Act as a React Developer. Create `components/GlobalChat.tsx`.

1.  **UI**: A floating chat bubble in the bottom right.
2.  **Context**: Inject the entire `WizardState` (Industry, Search Findings, Strategy) into the system prompt.
3.  **Capability**: The user should be able to ask "Why did you recommend HubSpot?" or "Write the first blog post for my Fashion brand" and the AI uses the context to answer.
```