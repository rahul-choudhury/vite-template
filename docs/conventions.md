# Conventions

## Tailwind Classes

Always use the `cn` utility for conditional classes:

```tsx
// Good
<div className={cn("base-class", isActive && "active-class")} />

// Bad - don't use template literals
<div className={`base-class ${isActive ? "active-class" : ""}`} />
```

## Zod Schemas

Use Zod v4 syntax. Reference: https://zod.dev/v4/changelog
