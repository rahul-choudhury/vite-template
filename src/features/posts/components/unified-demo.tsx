import { Loader2, Minus, Plus, RotateCcw } from "lucide-react";
import { useState } from "react";

import { useRandomPost } from "@/api/posts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { useCounterStore } from "@/features/counter/store/counter-store";

export function UnifiedDemo() {
  const {
    data: post,
    isLoading,
    isRefetching,
    error,
    refetch,
  } = useRandomPost();

  const { count, increment, decrement, reset, incrementBy } = useCounterStore();
  const [customAmount, setCustomAmount] = useState("");

  const loading = isLoading || isRefetching;

  function handleIncrementBy() {
    const amount = parseInt(customAmount);
    if (!isNaN(amount)) {
      incrementBy(amount);
      setCustomAmount("");
    }
  }

  return (
    <div className="grid min-h-screen place-items-center p-4">
      <Card className="w-full max-w-4xl">
        <CardContent>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* TanStack Query Demo */}
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-primary">
                  TanStack Query
                </h3>
                <p className="text-sm text-muted-foreground">
                  Server state management
                </p>
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

            {/* Zustand Demo */}
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-primary">Zustand</h3>
                <p className="text-sm text-muted-foreground">
                  Client state management
                </p>
              </div>

              <div className="space-y-4 rounded-lg border bg-card p-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary tabular-nums">
                    {count}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Current count
                  </p>
                </div>

                <div className="flex justify-center gap-2">
                  <Button
                    onClick={decrement}
                    variant="outline"
                    size="icon"
                    className="h-10 w-10"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Button onClick={increment} size="icon" className="h-10 w-10">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="custom-amount" className="text-xs">
                    Custom increment
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="Amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      onKeyDown={(e) =>
                        e.key === "Enter" && handleIncrementBy()
                      }
                      className="text-sm"
                    />
                    <Button
                      onClick={handleIncrementBy}
                      disabled={!customAmount || isNaN(parseInt(customAmount))}
                      size="sm"
                    >
                      Add
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={reset}
                  variant="outline"
                  className="w-full"
                  size="sm"
                >
                  <RotateCcw className="mr-2 h-3 w-3" />
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
