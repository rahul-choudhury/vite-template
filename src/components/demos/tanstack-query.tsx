import { useRandomPost } from "@/api/posts";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function TanstackQueryDemo() {
  const {
    data: post,
    isLoading,
    isRefetching,
    error,
    refetch,
  } = useRandomPost();

  const loading = isLoading || isRefetching;

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-primary">TanStack Query</h3>
        <p className="text-sm text-muted-foreground">Server state management</p>
      </div>

      <div className="space-y-4 rounded-lg border bg-card p-4">
        {loading && (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-3 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        )}
        {error && (
          <div className="text-sm text-destructive">
            Failed to load post. Please try again.
          </div>
        )}
        {post && !loading && (
          <div className="space-y-2">
            <h4 className="leading-tight font-medium">
              {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {post.body.length > 120
                ? `${post.body.substring(0, 80)}...`
                : post.body}
            </p>
          </div>
        )}

        <Button
          onClick={() => refetch()}
          disabled={loading}
          className="w-full"
          variant="outline"
        >
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {loading ? "Loading..." : "Randomize Post"}
        </Button>
      </div>
    </div>
  );
}
