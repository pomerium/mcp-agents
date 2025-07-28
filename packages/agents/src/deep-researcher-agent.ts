import { Agent, webSearchTool } from '@openai/agents'

export const deepResearcherAgent = new Agent({
  name: 'Research Agent',
  // This is currently the best model for deep research tasks
  model: 'o4‑mini‑deep‑research‑2025‑06‑26',
  tools: [webSearchTool()],
  instructions: `Perform deep empirical research based on the user's query.`,
})
