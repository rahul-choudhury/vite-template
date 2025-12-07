## Project Structure

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

## Scripts
- `bun run lint` does lint check via eslint
- `bun run typecheck` does typecheck via tsc

## Coding Style & Naming Conventions
- Use `PascalCase` for React components, `camelCase` for hooks/utilities, `SNAKE_CASE` for global variables and `kebab-case` for directories and file names
- DO NOT add `import React from "react"` to the top of a new react component file. This is a legacy pattern
- ALWAYS use the `cn` util for writing conditional tailwind classes. DO NOT use template literals
- DO NOT use `any` at all costs. Always prefer `unknown` over `any`
- ALWAYS Narrow down types and AVOID type assertions/casting
- Before adding an useEffect to the codebase, refer @docs/you-might-not-need-an-effect.md
- Before creating zod schemas, refer @docs/zod-migration-guide.md

## shadcn/ui components Best Practices

### Popover and Select Components in Dialogs
When using Popover or Select components inside Dialog components, always add `modal={true}` to prevent scroll behavior issues
 
### Dialog close button action
- **Never use `AlertDialogAction` or `DialogClose`** for actions that require loading states or error handling
- **Always use regular `Button`** in dialog footers when you need to:
  - Show loading states during async operations
  - Handle errors without auto-closing the dialog
  - Manually control when the dialog closes
- **Use controlled dialogs for async operation**: Manage dialog state with `useState` and the `open` prop rather than relying on built-in close triggers
