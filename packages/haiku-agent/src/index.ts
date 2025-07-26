import { Agent } from '@openai/agents'

export class HaikuAgent extends Agent {
  constructor() {
    super({
      name: 'Assistant',
      instructions: 'You are a helpful assistant.',
    })
  }
}
