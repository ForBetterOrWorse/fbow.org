# Copilot Custom Instructions

## Project Architecture

This is a Vue 3 + TypeScript single-page application for the "For Better or Worse" homepage, built with Vite and deployed to GitHub Pages.

**Key Stack:**

- Vue 3 Composition API with TypeScript
- Vite for build tooling with Vue DevTools plugin
- Vitest + Testing Library for unit testing
- ESLint + Prettier for code quality
- pnpm for package management (locked to v10.11.0 via `packageManager` field)
- GitHub Actions for CI/CD

## Project Structure & Patterns

**Main Application:**

- `src/App.vue` - Single-file component with scoped styles, uses semantic CSS variables
- `src/main.ts` - Entry point, imports fonts and base styles (router currently commented out)
- `src/assets/variables.css` - Color tokens and semantic variables (follow the two-block pattern)

**Testing Strategy:**

- Two test locations: `src/App.test.ts` and `src/__tests__/App.test.ts` (using different approaches)
- Uses Testing Library + Vue Test Utils for comprehensive component testing
- Test setup in `src/test/setup.ts` imports jest-dom matchers
- Vitest configured with jsdom environment

**Build & TypeScript:**

- Project uses TypeScript project references (`tsconfig.json` coordinates app/node/vitest configs)
- Build command runs type-check and build-only in parallel via `npm-run-all2`
- Vite uses `@` alias for `src/` directory

## Development Workflows

**Essential Commands:**

```bash
pnpm dev          # Development server with hot reload
pnpm build        # Production build (runs type-check + build-only in parallel)
pnpm test         # Run unit tests once
pnpm test:watch   # Run tests in watch mode
pnpm lint         # ESLint with auto-fix
pnpm format       # Prettier formatting for src/
```

**Testing Patterns:**

- Use Testing Library's `render()` and `screen` for DOM queries
- Use `@testing-library/jest-dom` matchers like `toBeInTheDocument()`
- Alternative: Vue Test Utils `mount()` for wrapper-based testing

## Project-Specific Conventions

**CSS Architecture:**

- Use CSS custom properties with semantic naming (`--text-color-primary` not `--gray00`)
- Color tokens in first `:root` block, semantic variables in second block
- Scoped styles preferred, import variables via `@import './assets/variables.css'`

**Vue Patterns:**

- Single-file components with `<template>`, `<style scoped>`
- TypeScript in `<script setup>` (when adding new components)
- Accessibility: Use proper heading hierarchy, consider visually hidden elements

**Package Management:**

- pnpm is locked via `packageManager` field - GitHub Actions auto-detect this version
- Node.js >=22 required (`engines` field enforced)

## Deployment & CI

**GitHub Actions:**

- Test workflow runs lint, type-check, unit tests, then build
- Deploy workflow builds and deploys to GitHub Pages on main branch pushes
- Uses pnpm version from `packageManager` field (no hardcoded versions)

## Commit Messages and PR Titles

- All commit messages and pull request titles **must follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification**.
- Use the format: `<type>[optional scope]: <description>`
- Example types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
- Scope (optional): A noun describing the section affected (e.g., `client`, `api`, `tools`)
- Description: A short, imperative summary of the change.
