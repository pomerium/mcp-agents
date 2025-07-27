import { run } from '@openai/agents'
import { helpAgent } from '@mcp-agents/agents'

const result = await run(
  helpAgent,
  'Write a haiku about the beauty of programming.',
)

console.log(result.finalOutput)
