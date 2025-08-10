import { RandomPost } from "@/features/posts/components/random-post";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <RandomPost />;
}
