import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { GoogleGenAI } from "https://esm.sh/@google/genai@0.1.1";

declare const Deno: any;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { workflowId, task, context } = await req.json();

    // 1. Initialize Clients
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const apiKey = Deno.env.get('GOOGLE_API_KEY');
    if (!apiKey) throw new Error("Missing Google API Key");
    const ai = new GoogleGenAI({ apiKey });

    // Helper to log to DB
    const log = async (msg: string, type: 'info' | 'success' | 'error' | 'artifact' = 'info', content?: string) => {
      await supabase.from('workflow_logs').insert({
        workflow_id: workflowId,
        message: msg,
        type,
        timestamp: new Date().toISOString(),
        artifact_content: content
      });
    };

    // 2. Start Execution
    await log(`Initializing workflow for: ${task}`);

    // 3. Generate Content with Gemini 3 Pro
    await log(`Connecting to Gemini 3 Pro...`);
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `
        You are an elite automated executive assistant.
        
        TASK: ${task}
        
        COMPANY CONTEXT:
        Name: ${context.companyName}
        Industry: ${context.industry}
        Description: ${context.description}
        
        INSTRUCTIONS:
        - Execute the task fully. 
        - If asked to write an email, write the full subject and body.
        - If asked to analyze, provide the full analysis.
        - Use professional, business-appropriate tone.
        - Do not include placeholders like "[Your Name]", use "Sun AI Agent" or context provided.
      `,
    });

    const result = response.text || "No output generated.";

    // 4. Log Result
    await log(`Generation complete.`, 'success');
    await log(`Artifact created.`, 'artifact', result);

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});