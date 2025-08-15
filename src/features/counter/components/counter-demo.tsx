import { Minus, Plus, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useCounterStore } from "../store/counter-store";
import { useState } from "react";

export function CounterDemo() {
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
    <div className="flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Zustand State Management</CardTitle>
          <CardDescription>
            Global state management with Zustand
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-6xl font-bold text-primary tabular-nums">
              {count}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Current count</p>
          </div>

          <div className="flex justify-center gap-2">
            <Button
              onClick={decrement}
              variant="outline"
              size="icon"
              className="h-12 w-12"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Button onClick={increment} size="icon" className="h-12 w-12">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2">
            <Label htmlFor="custom-amount">Custom increment</Label>
            <div className="flex gap-2">
              <Input
                id="custom-amount"
                type="number"
                placeholder="Enter amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleIncrementBy()}
              />
              <Button
                onClick={handleIncrementBy}
                disabled={!customAmount || isNaN(parseInt(customAmount))}
              >
                Add
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={reset} variant="outline" className="w-full">
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
