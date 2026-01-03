export type ClientPhaseStatus = 'completed' | 'active' | 'pending' | 'blocked';
export type DeliverableStatus = 'delivered' | 'in_review' | 'in_progress' | 'scheduled';
export type ApprovalPriority = 'high' | 'medium' | 'low';
export type ReportType = 'pdf' | 'deck' | 'csv';

export interface ClientPhase {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    progress: number; // 0-100
    status: ClientPhaseStatus;
    milestones: string[];
}

export interface ClientDeliverable {
    id: string;
    title: string;
    type: string; // e.g., 'Strategy', 'Design', 'Development'
    status: DeliverableStatus;
    date: string; // Due date or Delivered date
    link?: string;
    description?: string;
}

export interface ClientApproval {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    priority: ApprovalPriority;
}

export interface ClientReport {
    id: string;
    title: string;
    date: string;
    type: ReportType;
    size: string;
}

export interface ClientStats {
    health: number; // 0-100
    milestonesCompleted: number;
    totalMilestones: number;
    nextDeliveryDate: string;
    openApprovals: number;
    risksDetected: number;
}

export interface ClientContext {
    companyName: string;
    industry: string;
    status: 'On Track' | 'At Risk' | 'Blocked';
    activePhaseId: string;
    lastUpdated: string;
    enabledSystems: string[];
}

export interface ClientDashboardData {
    context: ClientContext;
    stats: ClientStats;
    phases: ClientPhase[];
    deliverables: ClientDeliverable[];
    approvals: ClientApproval[];
    reports: ClientReport[];
}