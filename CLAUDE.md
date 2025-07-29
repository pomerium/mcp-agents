# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is an npm workspaces monorepo for building OpenAI Agents with MCP (Model Context Protocol) support. The project uses TypeScript ESM modules and Vite for building.

### Monorepo Layout

- `packages/shared/` - Common utilities, types, and helper functions shared across agents
- `packages/agents/` - Example agent implementation demonstrating the basic structure
- Additional agent packages can be added under `packages/`

### Key Dependencies

- `@openai/agents` - OpenAI Agents JS SDK for agent functionality
- `zod` - Schema validation for agent configurations
- `vite` - Build tool with TypeScript compilation and bundling

## Development Commands

### Building

- `npm run build` - Build all packages in dependency order
- `npm run build -w <package-name>` - Build specific package
- `npm run dev` - Watch mode build for all packages

### Code Quality

- `npm run lint` - Run ESLint on all TypeScript/JavaScript files
- `npm run lint:fix` - Fix auto-fixable lint issues
- `npm run typecheck` - Run TypeScript type checking on all packages

### Testing

- `npm run test` - Run tests for all packages (vitest)
- `npm run start -w @mcp-agents/agents` - Run the example agent

### Docker

- `docker build -f Dockerfile.agents -t agents .` - Build Docker image for example agent
- `docker run --rm agents` - Run the example agent in Docker container

### Package Management

- `npm install` - Install dependencies for all workspaces
- `npm run <script> -w <package-name>` - Run script in specific workspace

## Architecture

### Agent Structure

All agents follow a consistent structure defined in `@mcp-agents/shared`:

- Agent configuration using Zod schemas for validation
- Common `Agent` interface with `config` and `execute` methods
- Utility functions for creating and validating agents

### Build System

- Vite builds each package as an ES module library with TypeScript declarations
- Build dependencies are handled automatically (shared package builds first)
- Each package has its own `tsconfig.json` extending the root configuration
- TypeScript project references ensure proper dependency resolution

### Package Dependencies

- The `shared` package must be built before other packages can typecheck or build
- Use `npm run build -w @mcp-agents/shared` to build just the shared package
- Agent packages automatically build their dependencies as needed

## Adding New Agents

1. Create new package directory: `packages/new-agent/`
2. Copy and modify `package.json` from agents
3. Copy and modify `vite.config.ts` and `tsconfig.json`
4. Add package reference to root `tsconfig.json`
5. Implement agent using the shared utilities and interfaces
6. Create a `Dockerfile.new-agent` in the root directory for containerization

## Docker Deployment

Each agent can be containerized using Docker. The project includes:

- `Dockerfile.agents` - Docker configuration for the example agent
- `.dockerignore` - Excludes unnecessary files from Docker build context

The Docker images are built from the repository root to access all workspace dependencies. Each agent runs in a Node.js slim container with all required build tools.

## TypeScript Configuration

The project uses TypeScript project references for proper monorepo support. Each package has its own TypeScript configuration that extends the root config. The root `tsconfig.json` acts as a solution file that references all packages.
