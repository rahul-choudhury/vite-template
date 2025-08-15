import { Counter } from "@/features/counter";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/counter")({
  component: CounterPage,
});

function CounterPage() {
  return <Counter />;
}
