# Project Structure

```
src
├── api/         # Global API hooks and request definitions
├── components/  # Shared UI components (shadcn/ui)
├── config/      # Configuration (env variables)
├── features/    # Self-contained feature modules
├── hooks/       # Shared React hooks
├── lib/         # Helper functions (api client, utils)
├── routes/      # TanStack Router definitions
└── types/       # Shared TypeScript types
```

## Feature Modules

Features are self-contained modules with their own scoped code:

```
src/features/{feature-name}
├── assets/      # Feature-specific static files
├── components/  # Scoped components
├── hooks/       # Scoped hooks
├── stores/      # Scoped state (Zustand/Redux)
├── types/       # Scoped types
└── utils/       # Scoped utilities
```
