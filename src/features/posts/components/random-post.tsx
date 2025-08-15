import { Loader2 } from "lucide-react";

import { useRandomPost } from "@/api/posts";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function RandomPost() {
  const {
    data: post,
    isLoading,
    isRefetching,
    error,
    refetch,
  } = useRandomPost();

  const loading = isLoading || isRefetching;

  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>TanStack React Query</CardTitle>
          <CardDescription>
            Random post from jsonplaceholder API
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
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
              <h3 className="leading-tight font-medium">
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {post.body.length > 120
                  ? `${post.body.substring(0, 80)}...`
                  : post.body}
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => refetch()}
            disabled={loading}
            className="w-full"
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? "Loading..." : "Randomize"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
