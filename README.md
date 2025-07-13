# React Vite Template

A React starter template that allows you to quickly get started with a new React project. It uses the following:

- **Vite** - Lightning fast build tool with SWC compiler
- **React 19** - Latest React with TypeScript support
- **TypeScript** - Full type safety with strict configuration
- **shadcn/ui** - Beautiful, accessible components built on Radix UI
- **Tailwind CSS v4** - Latest Tailwind with CSS variables
- **TanStack Query** - Powerful server state management
- **Deployment Config** - Includes Dockerfile and Github Actions workflow for deployments via coolify

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
