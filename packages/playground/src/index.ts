import { run } from '@openai/agents'
import { HaikuAgent } from '@mcp-agents/haiku-agent'

const haikuAgent = new HaikuAgent()

const result = await run(
  haikuAgent,
  'Write a haiku about the beauty of programming.',
)

console.log(result.finalOutput)
