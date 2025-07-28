#!/usr/bin/env node
// for now, keeping it simple, but if the playground evolves more
// we might want to use a more robust CLI framework like enquirer or commander
import { run } from '@openai/agents'
import { helpAgent } from '@mcp-agents/agents'
import ora from 'ora'
import readline from 'readline'

console.log(
  'Welcome to the Pomerium agent! How can I help you?\n\nType your question, or type "exit" to quit.\n',
)

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Ask a question: ',
})

const spinner = ora()

rl.prompt()

rl.on('line', async (line) => {
  const question = line.trim()

  if (question.toLowerCase() === 'exit') {
    rl.close()
    return
  }

  // Stop the prompt while processing
  rl.pause()

  spinner.start('Thinking...')
  const result = await run(helpAgent, question)
  spinner.stop()

  console.log(result.finalOutput)

  // Resume and show prompt again
  rl.resume()
  rl.prompt()
})

rl.on('close', () => {
  console.log('Goodbye!')
  process.exit(0)
})
