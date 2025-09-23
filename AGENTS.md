## Development Commands

- `pnpm run typecheck` - Run type check
- `pnpm run lint` - Run ESLint
- `pnpm run test` - Run Tests

## Code Policy

- Refer the README.md for preferred file tree structure when creating new files
- Use kebab case for file names
- Prefer named exports over default exports
- DO NOT add `import React from "react"` to the top of a new file
- ALWAYS USE the `cn` util for writing conditional tailwind classes. DO NOT use template literals
- Prefer using the `function` keyword when creating components/functions over arrow functions
- DO NOT add comments to the code you produce unless it is some complex logic
- ABSOLUTELY AVOID `any`. Always prefer `unknown` over `any`
- Narrow down types and avoid type assertions

## When you need to call tools from the shell, **use this rubric**:

- Find Files: `fd`
- Find Code Structure (TS/TSX): `ast-grep`
  - **Default to TypeScript:**  
    - `.ts` → `ast-grep --lang ts -p '<pattern>'`  
    - `.tsx` (React) → `ast-grep --lang tsx -p '<pattern>'`
  - For other languages, set `--lang` appropriately (e.g., `--lang rust`).
- Select among matches: pipe to `fzf`
- JSON: `jq`
- YAML/XML: `yq`

If ast-grep is available avoid tools `rg` or `grep` unless a plain‑text search is explicitly requested.

## shadcn/ui components Best Practices

### Popover and Select Components in Dialogs

 When using Popover or Select components inside Dialog components, always add `modal={true}` to prevent scroll behavior issues.
 
### Dialog close button action

- **Never use `AlertDialogAction` or `DialogClose`** for actions that require loading states or error handling
- **Always use regular `Button`** in dialog footers when you need to:
  - Show loading states during async operations
  - Handle errors without auto-closing the dialog
  - Manually control when the dialog closes
- **Use controlled dialogs for async operation**: Manage dialog state with `useState` and the `open` prop rather than relying on built-in close triggers
