## Development Commands

- `pnpm run typecheck` - Run type check
- `pnpm run lint` - Run ESLint

## Code Policy

- Refer the README.md for preferred file tree structure when creating new files
- Use kebab case for file names
- Prefer named exports over default exports
- DO NOT add `import React from "react"` to the top of a new file
- ALWAYS USE the `cn` util for writing conditional tailwind classes. DO NOT use template literals
- Prefer using the `function` keyword when creating components/functions over arrow functions
- DO NOT write trivial comments
- ABSOLUTELY AVOID `any`. Always prefer `unknown` over `any`
- Narrow down types and avoid type assertions

## UI Components Best Practices

### Popover and Select Components in Dialogs

When using Popover or Select components inside Dialog components, always add `modal={true}` to prevent scroll behavior issues:

```tsx
// ✅ Good - Inside Dialog
<Popover modal={true}>
  <PopoverTrigger>...</PopoverTrigger>
  <PopoverContent>...</PopoverContent>
</Popover>

<Select modal={true}>
  <SelectTrigger>...</SelectTrigger>
  <SelectContent>...</SelectContent>
</Select>

// ✅ Good - Outside Dialog (default behavior)
<Popover>
  <PopoverTrigger>...</PopoverTrigger>
  <PopoverContent>...</PopoverContent>
</Popover>
```

**Why this matters:**
- Fixes scroll behavior when popovers/selects open inside dialogs
- Prevents the dialog from scrolling unexpectedly when dropdown content appears
- Ensures proper focus management and accessibility

**Reference:** [shadcn/ui issue #4759](https://github.com/shadcn-ui/ui/issues/4759)

### Dialog close button action

- **Never use `AlertDialogAction` or `DialogClose`** for actions that require loading states or error handling
- **Always use regular `Button`** in dialog footers when you need to:
  - Show loading states during async operations
  - Handle errors without auto-closing the dialog
  - Manually control when the dialog closes
- **Reason**: Both `AlertDialogAction` and `DialogClose` have built-in behavior that closes the dialog immediately on click, preventing proper UX during async operations
- **Use controlled dialogs**: For complex interactions, manage dialog state with `useState` and the `open` prop rather than relying on built-in close triggers
