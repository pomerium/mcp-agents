#!/usr/bin/env node

import { run } from '@openai/agents'
import { helpAgent } from '@mcp-agents/agents'
import readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
// import ora from 'ora'

async function main() {
  const rl = readline.createInterface({ input, output })
  console.log(
    'Welcome to the Pomerium agent! How can I help you?\n\nType your question, or type "exit" to quit.',
  )
  while (true) {
    const question = await rl.question('\nAsk a question: ')
    if (question.trim().toLowerCase() === 'exit') break
    process.stdout.write('Waiting for answer...\r')
    try {
      const result = await run(helpAgent, question)
      // Clear the loading message
      process.stdout.clearLine(0)
      process.stdout.cursorTo(0)
      console.log('\n', result.finalOutput, '\n')
    } catch (err) {
      process.stdout.clearLine(0)
      process.stdout.cursorTo(0)
      console.error('Error while getting answer')
      console.error('Error:', err)
    }
  }
  rl.close()
  console.log('Goodbye!')
}

main()
