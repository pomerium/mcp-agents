import { Agent } from '@openai/agents'

export const helpAgent = new Agent({
  name: 'agents',
  instructions: `You are a helpful assistant.`,
})
