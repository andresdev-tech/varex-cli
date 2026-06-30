<p align="center">
  <img src="https://img.shields.io/badge/varex--cli-2E8B57?style=for-the-badge&logo=terminal&logoColor=white" alt="Varex CLI" />
</p>

<h1 align="center">Varex CLI</h1>

<p align="center">
  <strong>CLI for creating modern API architectures</strong>
</p>

<p align="center">
  Scaffold production-ready backend projects with best-in-class architectural patterns, interactive prompts, and zero configuration.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/varex-cli"><img src="https://img.shields.io/npm/v/varex-cli.svg?style=flat-square&color=cb3837" alt="npm version" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License" /></a>
  <a href="#"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js" /></a>
  <a href="#"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" /></a>
</p>

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [CLI Commands](#cli-commands)
  - [`varex new`](#varex-new)
  - [`varex doctor`](#varex-doctor)
  - [`varex info`](#varex-info)
  - [`varex version`](#varex-version)
  - [`varex help`](#varex-help)
- [Project Generation Flow](#project-generation-flow)
- [Supported Frameworks](#supported-frameworks)
  - [Express](#express)
  - [NestJS](#nestjs)
- [Supported Architectures](#supported-architectures)
  - [Layered Architecture](#layered-architecture)
  - [Clean Architecture](#clean-architecture)
- [Language Support](#language-support)
  - [JavaScript](#javascript)
  - [TypeScript](#typescript)
- [Generated Project Structure](#generated-project-structure)
- [Examples](#examples)
  - [REST API](#rest-api)
  - [Authentication API](#authentication-api)
  - [Microservice](#microservice)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
  - [Command not found](#command-not-found)
  - [Permission issues](#permission-issues)
  - [Node version problems](#node-version-problems)
  - [Dependency installation failures](#dependency-installation-failures)
  - [Package manager issues](#package-manager-issues)
- [FAQ](#faq)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Footer](#footer)

---

## Introduction

### What is Varex CLI?

**Varex CLI** is a powerful, modern command-line interface designed to scaffold backend projects and APIs with predefined, production-ready architectures. Whether you are building a simple REST API, a complex microservice, or an enterprise-grade application, Varex CLI provides an interactive, guided experience to generate clean, maintainable, and scalable project structures in seconds.

### Why Use Varex CLI?

In today's fast-paced development environment, setting up a new project with the correct folder structure, dependencies, and architectural patterns can be time-consuming and error-prone. Varex CLI eliminates this boilerplate by offering:

- **Instant scaffolding** — Generate a complete project in under a minute.
- **Best-practice architectures** — Choose from Layered, Clean, and future architectural patterns.
- **Framework flexibility** — Support for Express, NestJS, and more on the way.
- **Language choice** — Full support for both JavaScript and TypeScript.
- **Zero configuration** — Start coding immediately without manual setup.

### Main Goals

| Goal | Description |
|------|-------------|
| **Speed** | Reduce project setup time from hours to seconds. |
| **Consistency** | Enforce uniform project structures across teams. |
| **Scalability** | Generate architectures that grow with your application. |
| **Developer Experience** | Provide an intuitive, interactive CLI with helpful prompts. |
| **Extensibility** | Allow custom templates and plugins for unique needs. |

### Problems It Solves

1. **Inconsistent project structures** across different developers and teams.
2. **Time wasted** on repetitive setup tasks (folders, configs, boilerplate code).
3. **Onboarding friction** for new team members learning your project's layout.
4. **Architectural drift** when developers manually create ad-hoc structures.
5. **Dependency conflicts** from manually installing and configuring packages.

### Benefits

- **Faster time-to-market** for new services and APIs.
- **Reduced cognitive load** — developers focus on business logic, not setup.
- **Improved code quality** through enforced architectural boundaries.
- **Easier maintenance** with predictable, well-documented folder structures.
- **Team alignment** with standardized patterns and conventions.

---

## Features

Varex CLI is packed with features designed to streamline your backend development workflow:

- **Fast Project Scaffolding** — Generate complete, runnable projects in seconds with a single command.
- **Multiple Architectures** — Choose from Layered Architecture, Clean Architecture, and more coming soon.
- **JavaScript Support** — Full support for JavaScript projects with modern ES module patterns.
- **TypeScript Support** — First-class TypeScript support with auto-generated `tsconfig.json` and type definitions.
- **Interactive Prompts** — Beautiful, guided prompts help you select frameworks, architectures, and languages effortlessly.
- **Modular Templates** — Each template is modular and self-contained, making it easy to understand and extend.
- **Extensible System** — Plugin architecture allows you to add custom templates, middleware, and generators.
- **CLI Commands** — A rich set of commands for project creation, environment validation, and CLI management.
- **Developer Experience Improvements** — Colored output, progress spinners, clear error messages, and helpful suggestions.
- **Clean Folder Generation** — Every generated project follows strict folder conventions with no clutter.
- **Customizable Structures** — Override default templates or create your own for organization-specific needs.
- **Automatic Dependency Installation** — Installs all required dependencies using your preferred package manager.
- **Git Initialization** — Optionally initializes a Git repository with a proper `.gitignore`.
- **Environment Validation** — Built-in `doctor` command to verify your system is ready.
- **Cross-Platform** — Works seamlessly on Windows, macOS, and Linux.

---

## Requirements

Before installing Varex CLI, ensure your environment meets the following requirements:

### Node.js

- **Minimum version:** Node.js `18.0.0` or higher
- **Recommended version:** Node.js `20.x LTS` or `22.x LTS`

> Varex CLI leverages modern Node.js features. Versions below 18 are not supported.

### Package Managers

Varex CLI supports installation via any of the following package managers:

| Package Manager | Minimum Version | Command |
|-----------------|-----------------|---------|
| **npm** | `9.0.0` | `npm install -g varex-cli` |
| **pnpm** | `8.0.0` | `pnpm add -g varex-cli` |
| **Yarn** | `1.22.0` (Classic) / `4.0.0` (Berry) | `yarn global add varex-cli` |

### Supported Operating Systems

| OS | Version | Notes |
|----|---------|-------|
| **Windows** | Windows 10 / Windows 11 | PowerShell or Git Bash recommended |
| **Linux** | Ubuntu 20.04+, Debian 11+, Fedora 35+, Arch | Any modern distribution with Node.js 18+ |
| **macOS** | macOS 12 (Monterey) or higher | Both Intel and Apple Silicon (M1/M2/M3) supported |

---

## Installation

You can install Varex CLI globally using your preferred package manager. A global installation ensures the `varex` command is available everywhere on your system.

### npm

```bash
npm install -g varex-cli
```

### pnpm

```bash
pnpm add -g varex-cli
```

### yarn

```bash
yarn global add varex-cli
```

### Verify Installation

After installation, verify that Varex CLI is correctly installed by checking its version:

```bash
varex --version
```

Expected output:

```
varex-cli/2.4.1 linux-x64 node-v20.11.0
```

If you see the version number, Varex CLI is ready to use!

---

## Quick Start

Get up and running with Varex CLI in under 60 seconds. Follow this step-by-step guide to create your first project:

### Step 1: Install the CLI

```bash
npm install -g varex-cli
```

### Step 2: Create a New Project

Run the `new` command followed by your desired project name:

```bash
varex new my-api
```

### Step 3: Choose Your Framework

Varex CLI will prompt you to select a backend framework:

```
? Select a framework: (Use arrow keys)
> Express
  NestJS
```

### Step 4: Choose Your Architecture

Next, select the architectural pattern for your project:

```
? Select an architecture: (Use arrow keys)
> Layered Architecture
  Clean Architecture
```

### Step 5: Choose Your Language

Pick the language you want to use:

```
? Select a language: (Use arrow keys)
> TypeScript
  JavaScript
```

### Step 6: Install Dependencies

Varex CLI will automatically install all dependencies using your preferred package manager. You can choose between npm, pnpm, or yarn during the prompt.

### Step 7: Run Your Project

Once the generation is complete, navigate into your project and start the development server:

```bash
cd my-api
npm run dev
```

Your API is now running!

---

## CLI Commands

Varex CLI provides a comprehensive set of commands to manage your development workflow. Below is a reference table followed by detailed explanations of each command.

| Command | Alias | Description |
|---------|-------|-------------|
| `varex new <name>` | `n` | Create a new project with interactive prompts |
| `varex doctor` | — | Check environment requirements and dependencies |
| `varex info` | — | Show detailed CLI information and system stats |
| `varex version` | `v`, `--version` | Show the installed version of Varex CLI |
| `varex help` | `h`, `--help` | Show available commands and usage information |

---

### `varex new`

**Purpose:** Creates a new backend project with a complete folder structure, configuration files, and installed dependencies based on your selections.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `<name>` | `string` | Yes | The name of your new project. Used as the folder name and default package name. |
| `--framework`, `-f` | `string` | No | Pre-select a framework (`express`, `nestjs`). Skips the interactive prompt. |
| `--architecture`, `-a` | `string` | No | Pre-select an architecture (`layered`, `clean`). Skips the interactive prompt. |
| `--language`, `-l` | `string` | No | Pre-select a language (`typescript`, `javascript`). Skips the interactive prompt. |
| `--skip-install` | `boolean` | No | Skip automatic dependency installation. |
| `--skip-git` | `boolean` | No | Skip Git repository initialization. |
| `--package-manager`, `-pm` | `string` | No | Force a specific package manager (`npm`, `pnpm`, `yarn`). |

**Examples:**

Create a new project with interactive prompts:

```bash
varex new ecommerce-api
```

Create a project with all options pre-selected (non-interactive):

```bash
varex new users-service --framework express --architecture layered --language typescript
```

Create a project without installing dependencies:

```bash
varex new payment-service --skip-install
```

**Interactive Flow:**

When running `varex new` without flags, the CLI guides you through the following steps:

1. **Project name validation** — Ensures the name is valid and the directory does not already exist.
2. **Framework selection** — Choose between supported frameworks.
3. **Architecture selection** — Pick the architectural pattern.
4. **Language selection** — Choose JavaScript or TypeScript.
5. **Package manager selection** — Choose npm, pnpm, or yarn.
6. **Generation confirmation** — Review your choices before proceeding.
7. **File generation** — Creates all necessary files and folders.
8. **Dependency installation** — Installs packages using your chosen manager.
9. **Git initialization** — Initializes a Git repo with a `.gitignore` (unless skipped).
10. **Completion summary** — Displays next steps and available scripts.

---

### `varex doctor`

**Purpose:** Validates your development environment to ensure all requirements for using Varex CLI are met.

**What It Validates:**

| Check | Description |
|-------|-------------|
| **Node.js** | Verifies Node.js is installed and meets the minimum version (18+). |
| **Package Managers** | Checks for the presence of npm, pnpm, and yarn. |
| **Environment** | Validates environment variables and PATH configuration. |
| **Dependencies** | Ensures core CLI dependencies are not corrupted or missing. |
| **Permissions** | Checks write permissions for common project directories. |

**Example:**

```bash
varex doctor
```

**Expected Output:**

```
✓ Node.js version: 20.11.0
✓ npm version: 10.2.4
✓ pnpm version: 8.15.0
✓ yarn version: 1.22.21
✓ Environment variables: OK
✓ Write permissions: OK

Environment is ready for Varex CLI!
```

If any check fails, `varex doctor` provides actionable suggestions to fix the issue.

---

### `varex info`

**Purpose:** Displays detailed information about the Varex CLI installation, including version, system details, and configuration.

**Expected Output:**

```
Varex CLI Information
=====================

CLI Version:     2.4.1
Node Version:    20.11.0
Platform:        linux (x64)
Package Manager: npm (10.2.4)
Config Path:     /home/user/.config/varex-cli
Cache Path:      /home/user/.cache/varex-cli

Installed Templates:
  - express-layered-ts
  - express-layered-js
  - express-clean-ts
  - express-clean-js
  - nestjs-layered-ts
  - nestjs-clean-ts

Active Plugins:
  - none
```

**Example:**

```bash
varex info
```

---

### `varex version`

**Purpose:** Displays the currently installed version of Varex CLI. This is useful for bug reports, verifying updates, and checking compatibility.

**Example:**

```bash
varex --version
# or
varex -v
# or
varex version
```

**Expected Output:**

```
2.4.1
```

---

### `varex help`

**Purpose:** Shows a help menu with all available commands, their descriptions, and common usage examples.

**Example:**

```bash
varex --help
# or
varex -h
# or
varex help
```

**Expected Output:**

```
Usage: varex [options] [command]

CLI for creating modern API architectures

Options:
  -v, --version      output the version number
  -h, --help         display help for command

Commands:
  new [options] <name>   Create a new project
  doctor                 Check environment requirements
  info                   Show CLI information
  version                Show installed version
  help [command]         Show help for a specific command

For more information, visit https://github.com/your-org/varex-cli
```

---

## Project Generation Flow

Understanding how Varex CLI generates a project helps you appreciate the consistency and care put into every scaffolded application. Below is the complete flow from start to finish:

```text
+-----------------+
|   Start CLI     |
+--------+--------+
         |
         v
+-----------------+
| Enter project   |
| name            |
+--------+--------+
         |
         v
+-----------------+
| Select framework|
| (Express/NestJS)|
+--------+--------+
         |
         v
+-----------------+
| Select          |
| architecture    |
+--------+--------+
         |
         v
+-----------------+
| Select language |
| (JS/TS)         |
+--------+--------+
         |
         v
+-----------------+
| Select package  |
| manager         |
+--------+--------+
         |
         v
+-----------------+
| Confirm choices |
+--------+--------+
         |
         v
+-----------------+
| Generate files  |
| & folders       |
+--------+--------+
         |
         v
+-----------------+
| Install         |
| dependencies    |
+--------+--------+
         |
         v
+-----------------+
| Initialize Git  |
| (optional)      |
+--------+--------+
         |
         v
+-----------------+
| Project ready!  |
+-----------------+
```

### Detailed Flow Explanation

1. **Start CLI** — The user invokes `varex new <name>`. The CLI parses arguments and initializes the interactive session.
2. **Enter project name** — The CLI validates the project name against npm naming conventions and checks for directory conflicts.
3. **Select framework** — The user chooses between Express (lightweight, flexible) or NestJS (enterprise-grade, opinionated).
4. **Select architecture** — The user picks Layered Architecture (simple, traditional) or Clean Architecture (domain-driven, testable).
5. **Select language** — The user chooses TypeScript (typed, scalable) or JavaScript (simple, rapid).
6. **Select package manager** — The user chooses npm, pnpm, or yarn for dependency management.
7. **Confirm choices** — A summary is displayed for review. The user can go back and change selections if needed.
8. **Generate files** — The CLI copies the appropriate template, renames placeholders, and creates the folder structure.
9. **Install dependencies** — The selected package manager installs all runtime and development dependencies.
10. **Initialize Git** — A Git repository is initialized with a framework-appropriate `.gitignore`.
11. **Project ready** — A success message is shown with instructions on how to start the development server.

---

## Supported Frameworks

Varex CLI supports multiple backend frameworks, each tailored to different use cases and team preferences.

---

### Express

**Express** is a fast, unopinionated, minimalist web framework for Node.js. It is the most widely used framework in the Node.js ecosystem.

**Characteristics:**

| Aspect | Description |
|--------|-------------|
| **Philosophy** | Minimalist and flexible — gives you the tools without imposing structure. |
| **Learning Curve** | Low — easy to pick up for developers familiar with Node.js. |
| **Flexibility** | High — you decide your folder structure, middleware stack, and patterns. |
| **Performance** | Excellent — minimal overhead, ideal for high-throughput APIs. |
| **Ecosystem** | Massive — thousands of middleware packages available on npm. |

**Best Use Cases:**

- Rapid prototyping and MVPs
- Microservices and small-to-medium APIs
- Projects requiring custom architectural decisions
- Teams that prefer flexibility over convention

**Generated Features:**

- Pre-configured Express server with error handling
- Router setup with sample routes
- Environment configuration with `dotenv`
- Logger middleware (e.g., Morgan or Pino)
- CORS and security headers
- Hot reload with Nodemon (development)

---

### NestJS

**NestJS** is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It uses TypeScript by default and embraces OOP, FP, and FRP principles.

**Characteristics:**

| Aspect | Description |
|--------|-------------|
| **Philosophy** | Opinionated and enterprise-ready — enforces structure and best practices. |
| **Learning Curve** | Moderate — requires understanding of decorators, modules, and DI. |
| **Flexibility** | Moderate — highly extensible but follows strict conventions. |
| **Performance** | Very Good — built on top of Express/Fastify with additional optimizations. |
| **Ecosystem** | Rich — official support for GraphQL, WebSockets, Microservices, and more. |

**Key Concepts:**

- **Decorators** — Uses TypeScript decorators for routes, controllers, providers, and modules.
- **Dependency Injection** — Built-in IoC container for managing class dependencies.
- **Modularity** — Applications are composed of modules, making them highly maintainable.
- **CLI Integration** — NestJS has its own CLI, and Varex CLI complements it by providing project scaffolding.

**Best Use Cases:**

- Enterprise applications and large teams
- Complex domain logic requiring strict architectural boundaries
- Projects benefiting from TypeScript's type safety
- Applications requiring built-in support for microservices, GraphQL, or WebSockets

**Generated Features:**

- Pre-configured NestJS application module
- Sample controller with DTOs and validation pipes
- Service layer with dependency injection
- Global exception filter
- Configuration module with validation
- Swagger/OpenAPI documentation setup
- Unit and e2e test boilerplate

---

### Framework Comparison

| Feature | Express | NestJS |
|---------|---------|--------|
| **Philosophy** | Minimalist | Opinionated |
| **TypeScript** | Optional | First-class |
| **Decorators** | No | Yes |
| **Dependency Injection** | Manual | Built-in |
| **Modularity** | Manual | Native |
| **Enterprise Ready** | With effort | Yes |
| **Learning Curve** | Low | Moderate |
| **Community** | Very Large | Large |
| **Best For** | Flexibility, Speed | Structure, Scale |

---

## Supported Architectures

Varex CLI enforces architectural patterns that promote separation of concerns, testability, and maintainability. Choose the pattern that best fits your project's complexity and team expertise.

---

### Layered Architecture

**Layered Architecture** (also known as N-Tier Architecture) organizes code into horizontal layers, each with a specific responsibility. It is the most common and intuitive pattern for web applications.

**Layers:**

| Layer | Responsibility | Example Files |
|-------|---------------|---------------|
| **Controllers** | Handle HTTP requests and responses | `user.controller.ts` |
| **Services** | Contain business logic | `user.service.ts` |
| **Repositories** | Abstract data access | `user.repository.ts` |
| **Routes** | Define API endpoints and map to controllers | `user.routes.ts` |
| **Models** | Define data structures and schemas | `user.model.ts` |

**Generated Structure:**

```text
src/
├── controllers/
│   └── user.controller.ts
├── services/
│   └── user.service.ts
├── repositories/
│   └── user.repository.ts
├── routes/
│   └── user.routes.ts
├── models/
│   └── user.model.ts
├── config/
│   └── database.ts
├── middleware/
│   └── errorHandler.ts
├── utils/
│   └── logger.ts
└── app.ts
```

**Advantages:**

- **Simple to understand** — intuitive separation of concerns.
- **Easy to implement** — minimal boilerplate and overhead.
- **Widely adopted** — most developers are familiar with this pattern.
- **Good for small-to-medium projects** — scales well up to a certain complexity.

**When to Use:**

- Small to medium-sized APIs
- Teams new to architectural patterns
- Projects with straightforward business logic
- Rapid prototyping and MVPs

---

### Clean Architecture

**Clean Architecture** (popularized by Robert C. Martin) organizes code into concentric layers, with dependencies pointing inward toward the domain. It emphasizes independence from frameworks, UI, and databases.

**Layers:**

| Layer | Responsibility | Dependencies |
|-------|---------------|--------------|
| **Domain** | Core business entities and rules | None (innermost layer) |
| **Application** | Use cases and application logic | Domain |
| **Infrastructure** | External concerns (DB, HTTP, frameworks) | Application, Domain |
| **Presentation** | Controllers, DTOs, and input validation | Application, Domain |

**Generated Structure:**

```text
src/
├── domain/
│   ├── entities/
│   │   └── user.entity.ts
│   ├── repositories/
│   │   └── user.repository.interface.ts
│   └── value-objects/
│       └── email.vo.ts
├── application/
│   ├── use-cases/
│   │   └── create-user.use-case.ts
│   ├── dto/
│   │   └── create-user.dto.ts
│   └── services/
│       └── user.service.ts
├── infrastructure/
│   ├── database/
│   │   └── user.repository.impl.ts
│   ├── http/
│   │   └── express.server.ts
│   └── config/
│       └── env.config.ts
└── presentation/
    ├── controllers/
    │   └── user.controller.ts
    ├── middleware/
    │   └── auth.middleware.ts
    └── routes/
        └── user.routes.ts
```

**Advantages:**

- **Highly testable** — business logic is isolated from frameworks and infrastructure.
- **Framework independent** — you can swap Express for Fastify without touching domain code.
- **Scalable** — handles complex domains and large teams effectively.
- **Maintainable** — clear boundaries prevent spaghetti code.

**When to Use:**

- Large, complex applications
- Long-term projects requiring high maintainability
- Teams practicing Domain-Driven Design (DDD)
- Projects where testing is a top priority

---

### Architecture Comparison

| Aspect | Layered Architecture | Clean Architecture |
|--------|---------------------|--------------------|
| **Complexity** | Low | High |
| **Learning Curve** | Gentle | Steep |
| **Testability** | Good | Excellent |
| **Scalability** | Moderate | High |
| **Team Size** | Small-Medium | Medium-Large |
| **Framework Coupling** | Tight | Loose |
| **Boilerplate** | Minimal | Moderate |
| **Best For** | Simple APIs, MVPs | Enterprise, Complex Domains |

---

## Language Support

Varex CLI provides first-class support for both JavaScript and TypeScript, allowing you to choose the language that best fits your project and team.

---

### JavaScript

**JavaScript** is the native language of Node.js and remains a popular choice for backend development due to its simplicity and vast ecosystem.

**Advantages:**

| Advantage | Description |
|-----------|-------------|
| **Ease of Use** | No compilation step — write and run immediately. |
| **Rapid Development** | Faster iteration cycles without type checking overhead. |
| **Flexibility** | Dynamic typing allows for quick experimentation. |
| **Ecosystem** | Every npm package works out of the box without type definitions. |
| **Team Onboarding** | Easier for developers coming from frontend JavaScript. |

**Generated Configuration:**

- `package.json` with standard scripts
- `.eslintrc.js` for code linting
- `.prettierrc` for code formatting
- `jsconfig.json` for IDE IntelliSense (optional)

**Best For:**

- Rapid prototyping and proof-of-concepts
- Small teams or solo developers
- Projects with tight deadlines
- Developers less familiar with TypeScript

---

### TypeScript

**TypeScript** adds static type checking to JavaScript, enabling better tooling, safer refactoring, and improved developer experience at scale.

**Advantages:**

| Advantage | Description |
|-----------|-------------|
| **Static Typing** | Catch errors at compile time rather than runtime. |
| **Scalability** | Types act as documentation, making large codebases manageable. |
| **Maintainability** | Refactoring is safer and more confident with IDE support. |
| **Developer Experience** | Autocompletion, inline documentation, and navigation. |
| **Modern Features** | Access to the latest ECMAScript features with downlevel compilation. |

**Generated Configuration:**

- `tsconfig.json` with strict mode enabled
- `@types/*` packages for popular libraries
- `ts-node` or `tsx` for development execution
- Type definitions for custom modules

**Best For:**

- Large, long-term projects
- Teams with multiple developers
- Applications requiring high reliability
- Projects where refactoring is frequent

---

### Language Comparison

| Feature | JavaScript | TypeScript |
|---------|-----------|------------|
| **Compilation** | None | Required |
| **Type Safety** | Runtime only | Compile-time + Runtime |
| **IDE Support** | Basic | Excellent |
| **Learning Curve** | Low | Moderate |
| **Boilerplate** | Less | More (types, interfaces) |
| **Refactoring Safety** | Low | High |
| **Team Scalability** | Moderate | High |
| **Best For** | Speed, Simplicity | Scale, Maintainability |

---

## Generated Project Structure

When you create a project with Varex CLI, you receive a complete, production-ready folder structure. Below is an example of a project generated with **Express + Layered Architecture + TypeScript**:

```text
my-api/
├── src/
│   ├── controllers/
│   │   └── user.controller.ts
│   ├── services/
│   │   └── user.service.ts
│   ├── repositories/
│   │   └── user.repository.ts
│   ├── routes/
│   │   └── user.routes.ts
│   ├── models/
│   │   └── user.model.ts
│   ├── config/
│   │   └── database.ts
│   ├── middleware/
│   │   ├── errorHandler.ts
│   │   └── logger.ts
│   ├── utils/
│   │   └── helpers.ts
│   └── app.ts
├── tests/
│   ├── unit/
│   │   └── user.service.test.ts
│   └── integration/
│       └── user.routes.test.ts
├── .env.example
├── .env
├── .gitignore
├── .eslintrc.js
├── .prettierrc
├── tsconfig.json
├── nodemon.json
├── package.json
├── package-lock.json
└── README.md
```

### File-by-File Explanation

| File / Folder | Purpose |
|---------------|---------|
| `src/` | Contains all application source code. |
| `src/controllers/` | Handles incoming HTTP requests and outgoing responses. |
| `src/services/` | Contains business logic and orchestrates data flow. |
| `src/repositories/` | Abstracts database interactions and data access logic. |
| `src/routes/` | Defines API endpoints and maps them to controllers. |
| `src/models/` | Defines data structures, schemas, and types. |
| `src/config/` | Centralizes configuration (database, environment, etc.). |
| `src/middleware/` | Custom Express middleware (error handling, logging, auth). |
| `src/utils/` | Shared utility functions and helpers. |
| `src/app.ts` | Application entry point — sets up Express, middleware, and routes. |
| `tests/` | Contains all test files, organized by unit and integration. |
| `.env.example` | Template for environment variables (committed to Git). |
| `.env` | Actual environment variables (ignored by Git). |
| `.gitignore` | Specifies files and folders Git should ignore. |
| `.eslintrc.js` | ESLint configuration for code quality and consistency. |
| `.prettierrc` | Prettier configuration for code formatting. |
| `tsconfig.json` | TypeScript compiler configuration. |
| `nodemon.json` | Nodemon configuration for development auto-reload. |
| `package.json` | Project metadata, dependencies, and scripts. |
| `README.md` | Project documentation and setup instructions. |

---

## Examples

The following examples demonstrate how to use Varex CLI to create different types of projects.

---

### REST API

Create a standard REST API for managing products in an e-commerce application.

```bash
varex new products-api
```

**Selections:**

- Framework: `Express`
- Architecture: `Layered Architecture`
- Language: `TypeScript`

**Generated Endpoints:**

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/products` | List all products |
| `GET` | `/api/products/:id` | Get a single product |
| `POST` | `/api/products` | Create a new product |
| `PUT` | `/api/products/:id` | Update a product |
| `DELETE` | `/api/products/:id` | Delete a product |

**Next Steps:**

```bash
cd products-api
npm run dev
```

Visit `http://localhost:3000/api/products` to test the API.

---

### Authentication API

Create an authentication service with user registration, login, and token management.

```bash
varex new auth-service
```

**Selections:**

- Framework: `NestJS`
- Architecture: `Clean Architecture`
- Language: `TypeScript`

**Generated Features:**

- User entity and value objects
- Register and login use cases
- JWT token generation and validation
- Password hashing with bcrypt
- Global exception handling
- Swagger documentation at `/api/docs`

**Next Steps:**

```bash
cd auth-service
npm run start:dev
```

Test the authentication flow using the Swagger UI at `http://localhost:3000/api/docs`.

---

### Microservice

Create a lightweight microservice for handling payments.

```bash
varex new payment-service
```

**Selections:**

- Framework: `Express`
- Architecture: `Clean Architecture`
- Language: `JavaScript`

**Generated Features:**

- Domain-driven folder structure
- Payment entity and use cases
- Repository pattern for data access
- Health check endpoint
- Structured logging with Pino

**Next Steps:**

```bash
cd payment-service
npm start
```

---

## Best Practices

To get the most out of Varex CLI and maintain high-quality projects, follow these best practices:

### Folder Organization

- **Keep `src/` clean** — Only application code belongs here. Configuration, documentation, and build artifacts stay at the root.
- **One feature per folder** — Group related controllers, services, and repositories by feature (e.g., `users/`, `orders/`).
- **Avoid deep nesting** — Aim for a maximum depth of 3-4 levels to prevent navigation fatigue.

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Files | `kebab-case.ts` | `user-controller.ts` |
| Classes | `PascalCase` | `UserController` |
| Functions | `camelCase` | `getUserById` |
| Constants | `UPPER_SNAKE_CASE` | `MAX_RETRY_COUNT` |
| Interfaces | `PascalCase` with `I` prefix (optional) | `IUserRepository` |

### Dependency Management

- **Pin major versions** — Use exact versions or lockfiles (`package-lock.json`, `pnpm-lock.yaml`) to ensure reproducible builds.
- **Audit regularly** — Run `npm audit` or `pnpm audit` to identify and fix security vulnerabilities.
- **Keep dependencies minimal** — Only install packages you actively use. Remove unused dependencies promptly.

### Environment Variables

- **Never commit secrets** — Always add `.env` to `.gitignore`.
- **Use `.env.example`** — Provide a template with dummy values so new developers know what to configure.
- **Validate at startup** — Use a validation library (e.g., `joi`, `zod`) to ensure all required environment variables are present.

### Git Workflow

- **Commit often** — Make small, focused commits with clear messages.
- **Use conventional commits** — Follow the `type(scope): description` format (e.g., `feat(users): add password reset`).
- **Branch naming** — Use `feature/`, `bugfix/`, `hotfix/`, or `chore/` prefixes.

### Testing

- **Write tests alongside code** — Do not leave testing for later. Generate tests as you build features.
- **Aim for high coverage** — Target 80%+ code coverage for critical business logic.
- **Use test databases** — Never run integration tests against production databases.

---

## Troubleshooting

This section covers common issues you might encounter when using Varex CLI and provides step-by-step solutions.

---

### Command not found

**Symptom:**

```bash
$ varex --version
varex: command not found
```

**Causes & Solutions:**

| Cause | Solution |
|-------|----------|
| **Global bin not in PATH** | Add your global npm bin directory to your PATH. Run `npm bin -g` to find the path. |
| **Installation failed** | Reinstall with `npm install -g varex-cli` and check for errors. |
| **Permission denied** | Use a Node version manager (nvm, fnm) or fix npm permissions. |
| **Yarn global path** | For Yarn, ensure `yarn global bin` is in your PATH. |

**For Windows:**

```powershell
# Check global npm path
npm config get prefix
# Add to PATH: C:\Users\<YourUser>\AppData\Roaming\npm
```

**For Linux/macOS:**

```bash
# Add to ~/.bashrc or ~/.zshrc
export PATH="$PATH:$(npm bin -g)"
source ~/.bashrc
```

---

### Permission issues

**Symptom:**

```bash
npm ERR! Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/varex-cli'
```

**Solutions:**

1. **Use a Node version manager (Recommended):**

   ```bash
   # Install nvm
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   nvm install 20
   nvm use 20
   npm install -g varex-cli
   ```

2. **Change npm's default directory:**

   ```bash
   mkdir ~/.npm-global
   npm config set prefix '~/.npm-global'
   export PATH=~/.npm-global/bin:$PATH
   source ~/.profile
   ```

3. **Use `sudo` (Not recommended):**

   ```bash
   sudo npm install -g varex-cli
   ```

---

### Node version problems

**Symptom:**

```bash
$ varex doctor
✗ Node.js version: 16.20.0 (required: >= 18.0.0)
```

**Solutions:**

1. **Upgrade Node.js:**

   ```bash
   # Using nvm
   nvm install 20
   nvm use 20
   nvm alias default 20
   ```

2. **Check your active version:**

   ```bash
   node --version
   # Should output v18.0.0 or higher
   ```

3. **If using a version manager, ensure the correct version is active:**

   ```bash
   nvm list
   nvm use 20
   ```

---

### Dependency installation failures

**Symptom:**

```bash
npm ERR! code ECONNRESET
npm ERR! errno ECONNRESET
npm ERR! network request to https://registry.npmjs.org/... failed
```

**Solutions:**

| Cause | Solution |
|-------|----------|
| **Network issues** | Check your internet connection and retry. |
| **Registry timeout** | Increase timeout: `npm config set fetch-timeout 120000` |
| **Corrupted cache** | Clear npm cache: `npm cache clean --force` |
| **Registry mirror** | Use a mirror if behind a firewall: `npm config set registry https://registry.npmmirror.com` |
| **Lockfile conflicts** | Delete `package-lock.json` and `node_modules`, then reinstall. |

**For pnpm users:**

```bash
pnpm store prune
pnpm install
```

**For Yarn users:**

```bash
yarn cache clean
yarn install
```

---

### Package manager issues

**Symptom:** Varex CLI cannot detect or use your preferred package manager.

**Solutions:**

1. **Verify the package manager is installed:**

   ```bash
   npm --version
   pnpm --version
   yarn --version
   ```

2. **Force a specific package manager:**

   ```bash
   varex new my-api --package-manager pnpm
   ```

3. **If pnpm is not found after installation:**

   ```bash
   # Install pnpm
   npm install -g pnpm
   # Ensure it's in PATH
   which pnpm
   ```

4. **Yarn Berry (v2+) issues:**

   ```bash
   # Ensure corepack is enabled
   corepack enable
   corepack prepare yarn@stable --activate
   ```

---

## FAQ

### 1. What is Varex CLI?

Varex CLI is a command-line tool that scaffolds backend projects with predefined architectures, frameworks, and languages. It automates the tedious setup process so you can focus on writing business logic.

### 2. Is Varex CLI free to use?

Yes, Varex CLI is open-source and free to use under the MIT License.

### 3. Can I use Varex CLI without installing it globally?

Yes, you can use `npx` to run Varex CLI without a global installation:

```bash
npx varex-cli new my-api
```

### 4. What frameworks are supported?

Currently, Varex CLI supports **Express** and **NestJS**. Support for **Fastify**, **Koa**, and **Hapi** is planned for future releases.

### 5. Can I create custom templates?

Custom template support is on the roadmap. In the meantime, you can fork the Varex CLI repository and modify the built-in templates to suit your needs.

### 6. Does Varex CLI support monorepos?

While Varex CLI generates individual projects, you can place multiple generated projects within a monorepo structure (e.g., using Nx, Turborepo, or pnpm workspaces). Native monorepo scaffolding is planned for a future release.

### 7. Can I skip the interactive prompts?

Yes, use command-line flags to pre-select all options:

```bash
varex new my-api --framework express --architecture layered --language typescript --package-manager pnpm
```

### 8. How do I update Varex CLI?

Update to the latest version using your package manager:

```bash
npm update -g varex-cli
# or
pnpm update -g varex-cli
# or
yarn global upgrade varex-cli
```

### 9. Where are the templates stored?

Templates are bundled with the CLI package. You can view their location by running:

```bash
varex info
```

### 10. Can I contribute to Varex CLI?

Absolutely! We welcome contributions. See the [Contributing](#contributing) section for details on how to get involved.

### 11. Does Varex CLI generate tests?

Yes, every generated project includes a `tests/` folder with sample unit and integration tests. The test setup varies by framework (Jest for NestJS, Mocha/Jest for Express).

### 12. Can I use Varex CLI with Docker?

While Varex CLI does not currently generate Dockerfiles, you can easily add Docker support to any generated project. Docker template generation is on the [Roadmap](#roadmap).

### 13. What if I encounter a bug?

Please open an issue on our GitHub repository with the following information:

- Varex CLI version (`varex --version`)
- Node.js version (`node --version`)
- Operating system
- Steps to reproduce the bug
- Expected vs. actual behavior

### 14. Is there a GUI or web interface?

Not currently. Varex CLI is designed as a terminal-first tool for maximum speed and flexibility. A web-based project generator may be considered in the future.

### 15. Can I use Varex CLI in CI/CD pipelines?

Yes, Varex CLI supports non-interactive mode using flags, making it ideal for CI/CD pipelines:

```bash
varex new ci-project --framework express --architecture clean --language typescript --skip-git
```

---

## Roadmap

Varex CLI is actively developed. Here is a look at what is coming next:

| Feature | Status | Description |
|---------|--------|-------------|
| **More Frameworks** | Planned | Support for Fastify, Koa, Hapi, and AdonisJS. |
| **Plugin System** | Planned | Allow third-party plugins to extend CLI functionality and add custom generators. |
| **Custom Templates** | Planned | Load templates from local directories or remote Git repositories. |
| **Database Templates** | Planned | Auto-generate Prisma, TypeORM, Sequelize, or Mongoose configurations. |
| **Docker Support** | Planned | Generate `Dockerfile`, `docker-compose.yml`, and `.dockerignore` out of the box. |
| **Authentication Templates** | Planned | Pre-built auth modules with JWT, OAuth2, and session-based authentication. |
| **Testing Templates** | Planned | Enhanced test generation with coverage reports and CI-ready configurations. |
| **GraphQL Support** | Planned | Scaffold GraphQL APIs with resolvers, schemas, and type generation. |
| **WebSocket Support** | Planned | Generate real-time API structures with Socket.io or native WebSockets. |
| **Monorepo Scaffolding** | Planned | Generate Nx or pnpm workspace-based monorepos. |
| **Interactive Update** | Planned | `varex update` command to migrate existing projects to newer template versions. |

---

## Contributing

We welcome contributions from the community! Whether you want to report a bug, suggest a feature, or submit a pull request, here is how you can get involved:

### Getting Started

1. **Fork the repository** on GitHub.
2. **Clone your fork** locally:

   ```bash
   git clone https://github.com/your-username/varex-cli.git
   cd varex-cli
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Create a branch** for your feature or fix:

   ```bash
   git checkout -b feature/my-new-feature
   ```

### Development Guidelines

- Follow the existing code style (enforced by ESLint and Prettier).
- Write clear, concise commit messages following conventional commits.
- Add tests for new features.
- Update documentation if your changes affect user-facing behavior.
- Ensure all tests pass before submitting a pull request:

  ```bash
  npm test
  ```

### Submitting a Pull Request

1. Push your branch to your fork.
2. Open a pull request against the `main` branch of the original repository.
3. Fill out the pull request template with a clear description of your changes.
4. Wait for a maintainer to review your PR. Address any feedback promptly.

### Code of Conduct

This project adheres to a Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the maintainers.

---

## License

Varex CLI is licensed under the [MIT License](LICENSE).

```
MIT License

Copyright (c) 2026 Varex CLI Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Footer

<p align="center">
  Built with ❤️ using <strong>Varex CLI</strong>
</p>

<p align="center">
  <a href="https://github.com/your-org/varex-cli">GitHub</a> •
  <a href="https://www.npmjs.com/package/varex-cli">npm</a> •
  <a href="https://github.com/your-org/varex-cli/issues">Issues</a> •
  <a href="https://github.com/your-org/varex-cli/discussions">Discussions</a>
</p>
