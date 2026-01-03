import { ClientDashboardData } from './types';

export const MOCK_CLIENT_DATA: ClientDashboardData = {
    context: {
        companyName: "Acme Corp",
        industry: "SaaS / Fintech",
        status: "On Track",
        activePhaseId: "phase-core",
        lastUpdated: "45 mins ago",
        enabledSystems: ["ai_crm", "automation_systems", "ai_dashboards"]
    },
    stats: {
        health: 94,
        milestonesCompleted: 3,
        totalMilestones: 8,
        nextDeliveryDate: "Oct 24, 2024",
        openApprovals: 1,
        risksDetected: 0
    },
    phases: [
        {
            id: "phase-core",
            name: "CORE FOUNDATION",
            startDate: "Current",
            endDate: "Week 2",
            progress: 65,
            status: "active",
            milestones: [
                "Digital Footprint Audit",
                "Analytics & Tracking Setup",
                "Brand Positioning Alignment",
                "Baseline Performance Report"
            ]
        },
        {
            id: "phase-advanced",
            name: "ADVANCED AUTOMATION",
            startDate: "Week 3",
            endDate: "Week 8",
            progress: 0,
            status: "pending",
            milestones: [
                "Automated Lead Routing",
                "CRM Data Enrichment",
                "Smart Nurture Sequences",
                "Internal Ops Dashboard"
            ]
        },
        {
            id: "phase-scaling",
            name: "SCALING & OPTIMIZATION",
            startDate: "Week 9+",
            endDate: "Ongoing",
            progress: 0,
            status: "blocked",
            milestones: [
                "Predictive Insights Model",
                "Multi-Channel Expansion",
                "A/B Testing Framework"
            ]
        }
    ],
    approvals: [
        {
            id: "app-1",
            title: "Brand Voice Guidelines",
            description: "Approve the tone and style guide for all automated communications.",
            dueDate: "Oct 20, 2024",
            priority: "high"
        }
    ],
    deliverables: [
        {
            id: "del-1",
            title: "Analytics Infrastructure",
            type: "Foundation",
            status: "delivered",
            date: "Oct 12",
            description: "GA4, Meta Pixel, and server-side tracking events configured."
        },
        {
            id: "del-2",
            title: "Lead Capture System",
            type: "Foundation",
            status: "in_review",
            date: "Oct 15",
            description: "High-conversion forms integrated with temporary data store."
        },
        {
            id: "del-3",
            title: "CRM Integration Map",
            type: "Automation",
            status: "scheduled",
            date: "Nov 01",
            description: "Field mapping strategy for Salesforce automation (Advanced Phase)."
        }
    ],
    reports: [
        {
            id: "rep-1",
            title: "Baseline Performance Audit",
            date: "Oct 05, 2024",
            type: "pdf",
            size: "2.4 MB"
        }
    ]
};