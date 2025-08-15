import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <nav className="border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <div className="flex gap-6">
              <Link
                to="/"
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground [&.active]:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                TanStack Query
              </Link>
              <Link
                to="/counter"
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground [&.active]:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                Zustand
              </Link>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </QueryClientProvider>
  ),
});
