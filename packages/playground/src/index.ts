#!/usr/bin/env node
import { run } from '@openai/agents'
import { helpAgent } from '@mcp-agents/agents'
import ora from 'ora'
import readline from 'readline'

console.log(
  'Welcome to the Pomerium agent! How can I help you?\n\nType your question, or type "exit" to quit.\n',
)

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

  rl.pause()

  spinner.start('Thinking...')
  const result = await run(helpAgent, question)
  spinner.stop()

  console.log(result.finalOutput)

  rl.resume()
  rl.prompt()
})

rl.on('close', () => {
  console.log('Goodbye!')
  process.exit(0)
})
