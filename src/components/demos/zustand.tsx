import { useCounterStore } from "@/hooks/counter-store";
import { useState } from "react";
import { Minus, Plus, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function ZustandDemo() {
  const { count, increment, decrement, reset, incrementBy } = useCounterStore();
  const [customAmount, setCustomAmount] = useState("");

  function handleIncrementBy() {
    const amount = parseInt(customAmount);
    if (!isNaN(amount)) {
      incrementBy(amount);
      setCustomAmount("");
    }
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-primary">Zustand</h3>
        <p className="text-sm text-muted-foreground">Client state management</p>
      </div>

      <div className="space-y-4 rounded-lg border bg-card p-4">
        <div className="text-center">
          <div className="text-4xl font-bold text-primary tabular-nums">
            {count}
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Current count</p>
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
              onKeyDown={(e) => e.key === "Enter" && handleIncrementBy()}
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

        <Button onClick={reset} variant="outline" className="w-full" size="sm">
          <RotateCcw className="mr-2 h-3 w-3" />
          Reset
        </Button>
      </div>
    </div>
  );
}
