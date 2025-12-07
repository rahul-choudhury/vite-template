## Getting Started

### Using degit (Recommended)

```bash
npx degit rahul-choudhury/vite-template my-project
cd my-project
cp .env.sample .env.local
bun run install
bun run dev
```

### Using git clone

```bash
git clone https://github.com/rahul-choudhury/vite-template.git my-project
cd my-project
cp .env.sample .env.local
rm -rf .git
bun run install
bun run dev
```

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
