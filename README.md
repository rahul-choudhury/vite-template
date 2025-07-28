# React Vite Template

A React starter template that allows you to quickly get started with a new React project. It uses the following:

- **Vite** - Lightning fast build tool with SWC compiler
- **React 19** - Latest React with TypeScript support
- **TypeScript** - Full type safety with strict configuration
- **shadcn/ui** - Beautiful, accessible components built on Radix UI
- **Tailwind CSS v4** - Latest Tailwind with CSS variables
- **TanStack Query** - Powerful server state management
- **Deployment Config** - Includes Dockerfile and Github Actions workflow for deployments via coolify

## Project Structure

This template follows the [Bulletproof React](https://github.com/alan2207/bulletproof-react) architecture to ensure the codebase is scalable, maintainable, and well-organized. The structure promotes a clear separation of concerns and a unidirectional data flow.

Most of the application code resides in the `src` directory:

```sh
src
├── app/         # Core app setup: routing, providers, and main component
├── api/         # Global API hooks and request definitions
├── assets/      # Static assets (images, fonts, etc.)
├── components/  # Shared, reusable UI components (e.g., from shadcn/ui)
├── features/    # Self-contained feature modules
│   └── posts/
│       └── components/
├── lib/         # Shared libraries and helper functions (e.g., api client, utils)
├── types/       # Shared TypeScript types and interfaces
└── utils/       # Shared utility functions
```

A feature module can contain its own scoped assets, components, hooks, types, and utility functions:

```sh
src/features/awesome-feature
|
+-- assets/      # Feature-specific static files
+-- components/  # Scoped React components
+-- hooks/       # Scoped React hooks
+-- stores/      # Scoped state stores (e.g., Zustand, Redux)
+-- types/       # Scoped TypeScript types
+-- utils/       # Scoped utility functions
```

Key principles:

- **Feature-Based Modules**: Each business feature (e.g., `posts`, `users`) is a self-contained module inside `src/features`.
- **Shared Code**: Code that can be used across multiple features or the entire app lives in top-level directories like `components`, `lib`, and `hooks`.
- **Unidirectional Flow**: Dependencies flow in one direction: `shared code` -> `features` -> `app`. This prevents circular dependencies and makes the architecture predictable.

## Getting Started

### Using degit (Recommended)

```bash
npx degit rahul-choudhury/vite-template my-project
cd my-project
cp .env .env.local
pnpm install
pnpm dev
```

### Using git clone

```bash
git clone https://github.com/rahul-choudhury/vite-template.git my-project
cd my-project
cp .env .env.local
rm -rf .git
pnpm install
pnpm dev
```

## Demo

The template includes a working demo that showcases:

- TanStack Query usage with loading states
- API integration with JSONPlaceholder
- shadcn/ui components in action
- Proper error handling and loading states

## Deployment

This template includes GitHub Actions workflow for deployment via Coolify. To set up deployments:

1. First, install Coolify on your VPS by following the [Coolify installation guide](https://coolify.io/docs/installation)
2. Add your Coolify variables as GitHub repository secrets. Follow the [Coolify GitHub Actions documentation](https://coolify.io/docs/knowledge-base/git/github/github-actions) for complete setup instructions

## Customization

1. **Update package.json** - Change name, description, and author
2. **Configure Tailwind** - Modify design tokens in `index.css`
3. **Add components** - Use shadcn/ui CLI to add more components
4. **Environment setup** - Configure your API endpoints in `.env`

## Pre-commit Hooks

This template uses [Husky](https://typicode.github.io/husky/) to manage pre-commit hooks. Before each commit, the following checks are automatically performed on the staged files:

- **Formatting**: [Prettier](https://prettier.io/) formats your code to ensure a consistent style.
- **Linting**: [ESLint](https://eslint.org/) checks for potential errors and enforces code quality rules.

This helps maintain a clean and consistent codebase without any manual effort. The configuration can be found in the `lint-staged` section of the `package.json` file.
