import { Card, CardContent } from "@/components/ui/card";
import { TanstackQueryDemo } from "@/components/demos/tanstack-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="grid min-h-screen place-items-center p-4">
      <Card className="w-full max-w-2xl">
        <CardContent>
          <TanstackQueryDemo />
        </CardContent>
      </Card>
    </div>
  );
}
