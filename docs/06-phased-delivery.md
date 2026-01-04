# Client Dashboard: Phased Delivery Model (CORE -> ADVANCED)

## Strategic Context
The Client Dashboard uses a **Sequential Maturity Model**. We deliberately hide/lock advanced features to prevent client overwhelm and ensure technical prerequisites are met before automation scaling.

## Phase 1: CORE (Foundation & Visibility)
**Objective**: Establish a "Single Source of Truth".

Before we can automate anything, we must be able to measure it. Phase 1 is about getting the data right.
- **Visuals**: Active, Expanded, Detailed.
- **Key Deliverables**: Audits, Analytics Setup, Branding.
- **Client Psychology**: "I feel in control because I can finally see my business data."

## Phase 2: ADVANCED (Velocity & Automation)
**Objective**: Remove manual bottlenecks.

**Locked until Phase 1 is complete.** This creates a sense of "earning" the upgrade.
- **Visuals**: Blurred, Locked, "Premium" look.
- **Key Deliverables**: Agents, Workflows, CRM Enrichment.
- **Client Psychology**: "I want to finish Phase 1 quickly so I can unlock these cool automation tools."

## Phase 3: SCALING (Prediction & Expansion)
**Objective**: Market dominance.

Future state.
- **Visuals**: Greyed out, long-term horizon.

## Technical Implementation
- **Data Source**: `mockData.ts` now splits phases by outcome, not just time.
- **Component**: `ClientPhaseCard` handles the specific UI states (Active vs Locked).
- **Intelligence**: `ClientRightPanel` is updated to explain *why* a phase is locked (e.g., "Automation requires validated data").
