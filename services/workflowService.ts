import { BusinessContext, WorkflowSession, WorkflowLog } from "../types";
import { ai, hasApiKey, delay } from "./ai/client";

// MOCK DB for Demo Mode
const localWorkflowStore = new Map<string, WorkflowLog[]>();

// In a real app, these would come from process.env
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY;

const isSupabaseConfigured = !!SUPABASE_URL && !!SUPABASE_ANON_KEY;

/**
 * Triggers a workflow execution.
 * In Production: Calls Supabase Edge Function.
 * In Demo: Starts a client-side simulation using Gemini.
 */
export const startWorkflow = async (task: string, context: BusinessContext): Promise<string> => {
    const workflowId = `wf-${Date.now()}`;

    if (isSupabaseConfigured) {
        try {
            // Call Supabase Edge Function
            const response = await fetch(`${SUPABASE_URL}/functions/v1/execute-workflow`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
                },
                body: JSON.stringify({ workflowId, task, context })
            });
            if (!response.ok) throw new Error("Failed to start workflow");
            return workflowId;
        } catch (e) {
            console.error("Supabase Error:", e);
            // Fallback to local execution if backend fails
        }
    }

    // --- CLIENT SIDE SIMULATION (DEMO MODE) ---
    // This allows the feature to work in the preview environment without a deployed backend.
    localWorkflowStore.set(workflowId, []);
    
    // Asynchronously execute the logic so the UI doesn't freeze
    runClientSideWorkflow(workflowId, task, context);

    return workflowId;
};

/**
 * Polls for new logs.
 * In Production: Selects from supabase 'workflow_logs' table.
 * In Demo: Reads from local Map.
 */
export const getWorkflowLogs = async (workflowId: string): Promise<WorkflowLog[]> => {
    if (isSupabaseConfigured) {
        // Mocking the supabase client call here for type safety since we don't have the lib installed
        // const { data } = await supabase.from('workflow_logs').select('*').eq('workflow_id', workflowId);
        // return data;
    }

    return localWorkflowStore.get(workflowId) || [];
};

/**
 * The logic that runs if no backend is available.
 * It uses the Client-Side Gemini key to actually generate the artifact.
 */
const runClientSideWorkflow = async (workflowId: string, task: string, context: BusinessContext) => {
    const addLog = (msg: string, type: WorkflowLog['type'] = 'info', content?: string) => {
        const logs = localWorkflowStore.get(workflowId) || [];
        logs.push({
            id: `log-${Date.now()}`,
            workflow_id: workflowId,
            message: msg,
            type,
            timestamp: new Date().toISOString(),
            artifact_content: content
        });
        localWorkflowStore.set(workflowId, logs);
    };

    addLog(`Initializing Orchestrator for: "${task}"`);
    await delay(800);

    addLog(`Loading context for ${context.companyName}...`);
    await delay(800);

    addLog(`Connecting to tools...`);
    await delay(600);

    if (!hasApiKey) {
        addLog(`Demo Mode: Simulating generation...`);
        await delay(1000);
        addLog(`Task Completed.`, 'success');
        addLog(`Output Generated`, 'artifact', `Subject: Re: ${task}\n\nHi Team,\n\nHere is the draft content you requested...\n\n(Add API Key to see real generation)`);
        return;
    }

    try {
        addLog(`Generating content with Gemini 3...`);
        
        const response = await ai.models.generateContent({
            model: 'gemini-3-pro-preview',
            contents: `
                You are an advanced AI Agent executing a task.
                
                Task: ${task}
                Company Context: ${context.companyName} (${context.industry}) - ${context.description}
                
                Perform the task. If it's an email, write the email. If it's analysis, write the analysis.
                Keep it professional and high quality.
            `,
        });

        const result = response.text || "No output generated.";
        
        addLog(`Processing output...`);
        await delay(500);
        
        addLog(`Task execution successful.`, 'success');
        addLog(`Artifact Created`, 'artifact', result);

    } catch (error) {
        addLog(`Error executing workflow: ${error}`, 'error');
    }
};