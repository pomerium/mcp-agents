# Playground

A development environment for testing and experimenting with [Open AI agents](https://openai.github.io/openai-agents-js/).

## Setup

You need an OpenAI API key to run the playground. Copy the `.env.example` file and add your API key:

```bash
cp .env.example .env
```

Then edit `.env` with your OpenAI API key.

## Usage

From the playground directory:

```bash
npm run start:dev -w @mcp-agents/playground
```

Or from the root of the monorepo:

```bash
npm run playground
```
