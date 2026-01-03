# Supabase Schema Design (Sun AI Agency)

## Core (MVP)
- **accounts** — The root tenant/subscription entity that owns all data; billing and global settings live here.
- **companies** — Internal organizational units or sub-brands managed within an account.
- **clients** — The external entities being analyzed (the "subject" of the Wizard); contains industry, URL, and high-level metadata.
- **users_profiles** — Extends Supabase Auth; links users to accounts/companies with role definitions.
- **account_roles** — RBAC definitions (Admin, Editor, Viewer) for users within an account.
- **invitations** — Pending email invitations for users to join an account.

## Wizard
- **client_contexts** — Step 1 data persistence; stores business description, inferred model, and digital maturity Snapshot.
- **industry_deep_dives** — Step 2 data; stores generated dynamic questions and the user's answers.
- **system_selections** — Step 3 data; links clients to specific `systems_catalog` items with "enabled" status.
- **readiness_audits** — Step 4 data; stores the calculated score, breakdown, critical gaps, and quick wins.
- **strategies** — Step 5 data; stores the generated roadmap phases, timeline, risks, and agent allocations.
- **wizard_sessions** — Tracks the state/progress of a wizard run to allow resumable sessions.

## Dashboards
- **morning_briefings** — Daily prioritized task lists generated from the active Strategy.
- **dashboard_widgets** — Configuration for which cards appear on the user's dashboard (KPIs, Stats).
- **phase_logs** — A historical record of strategy phases and step completion status.
- **tasks** — Atomic work units derived from strategy steps; links to `workflow_runs`.
- **reports** — Stores generated PDF/HTML reports for the "Reports" view.
- **notifications** — System alerts and agent notifications for the user.

## AI Intelligence (Gemini Runs)
- **ai_requests** — Raw log of prompts sent to Gemini 3; tracks tokens, model version, and latency.
- **ai_insights** — Structured JSON outputs (Right Panel content) linked to specific UI selections.
- **research_findings** — Stores source data, citations, and URLs from Google Search Grounding/Deep Research.
- **run_citations** — Mapping table linking specific AI insights to `research_findings` URLs for attribution.
- **context_chunks** — Text chunks extracted from client URLs/documents for context injection.

## AI Agents
- **agents_catalog** — Definitions of available agents (Orchestrator, Planner, Scorer) and their capabilities.
- **agent_configs** — Client-specific settings for an agent (e.g., "Tone: Professional", "Frequency: Daily").
- **agent_sessions** — Conversational threads or execution sessions between a user and an agent.
- **agent_memory** — Long-term recall for agents; stores key facts learned about the client over time.
- **agent_tools** — Definitions of tools (Function Calling) available to specific agents.

## Automations
- **workflows** — Definitions of automation sequences (e.g., "Lead Scoring Loop").
- **workflow_runs** — Execution instances of a workflow; tracks status (pending, success, failure).
- **workflow_logs** — Granular step-by-step logs of a workflow run (matches Edge Function logic).
- **triggers** — Configured events that start a workflow (e.g., "New Lead", "Schedule: 9am").
- **integrations** — Stores OAuth tokens and connection status for external tools (HubSpot, Slack).

## Channels (WhatsApp / Email / Social)
- **channels** — Configuration for communication pathways connected to a client.
- **conversations** — Unified threads aggregating messages from various channels.
- **messages** — Individual message records (inbound/outbound) with metadata.
- **templates** — AI-generated or user-defined message templates.

## Audit / Observability
- **audit_logs** — Immutable record of "who did what and when" for compliance.
- **system_events** — Backend system events (e.g., "Quota Exceeded", "Integration Failed").
- **usage_metrics** — Tracks AI token consumption and storage usage per account for billing.
- **error_logs** — Captures application exceptions and AI generation failures.

## Advanced (Phase 2+)
- **vector_store** — Stores embeddings for RAG (Retrieval Augmented Generation).
- **documents** — Uploaded files (PDFs, CSVs) associated with clients.
- **maps_data** — structured location data if Google Maps Grounding is used (Real Estate/Travel verticals).
- **custom_models** — Metadata for fine-tuned Gemini models specific to an account.
