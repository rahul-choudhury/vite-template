# React Vite Template

A React starter template that allows you to quickly get started with a new React project. It uses the following:

- **Vite** - Lightning fast build tool with SWC compiler
- **React 19** - Latest React with TypeScript support
- **TypeScript** - Full type safety with strict configuration
- **shadcn/ui** - Beautiful, accessible components built on Radix UI
- **Tailwind CSS v4** - Latest Tailwind with CSS variables
- **TanStack Query** - Powerful server state management
- **TanStack Router** - Type-safe routing with file-based route generation
- **Deployment Config** - Includes Dockerfile and Github Actions workflow for deployments via coolify

## Project Structure

This template follows the [Bulletproof React](https://github.com/alan2207/bulletproof-react) architecture to ensure the codebase is scalable, maintainable, and well-organized. The structure promotes a clear separation of concerns and a unidirectional data flow.

Most of the application code resides in the `src` directory:

```sh
src
├── api/         # Global API hooks and request definitions
├── components/  # Shared, reusable UI components (e.g., from shadcn/ui)
├── config/      # Application configuration files (e.g., env variables)
├── features/    # Self-contained feature modules
│   └── posts/
│       └── components/
├── hooks/       # Shared, reusable React hooks
├── lib/         # Shared libraries and helper functions (e.g., api client, utils)
├── routes/      # Route definitions for TanStack Router
└── types/       # Shared TypeScript types and interfaces
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
- **Unidirectional Flow**: Dependencies flow in one direction: `shared code` -> `features`. This prevents circular dependencies and makes the architecture predictable.

## Testing

This template advocates for colocating tests with their corresponding source files. This approach makes it easy to find and manage tests, as they live directly alongside the code they are testing. Test files should follow the naming convention `[filename].test.tsx`.

Here is an example of the test structure within a feature directory:

```sh
src/
└── features/
    └── counter/
        ├── index.tsx
        ├── index.test.tsx       # Test for index.tsx
        └── components/
            ├── counter-demo.tsx
            └── counter-demo.test.tsx # Test for counter-demo.tsx
```

This strategy improves discoverability and simplifies test imports, making the development workflow more efficient.

## Getting Started

### Using degit (Recommended)

```bash
npx degit rahul-choudhury/vite-template my-project
cd my-project
cp .env.sample .env.local
pnpm install
pnpm dev
```

### Using git clone

```bash
git clone https://github.com/rahul-choudhury/vite-template.git my-project
cd my-project
cp .env.sample .env.local
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
