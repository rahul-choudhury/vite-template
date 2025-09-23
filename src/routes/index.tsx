import { Card, CardContent } from "@/components/ui/card";
import { TanstackQueryDemo } from "@/components/demos/tanstack-query";
import { ZustandDemo } from "@/components/demos/zustand";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="grid min-h-screen place-items-center p-4">
      <Card className="w-full max-w-4xl">
        <CardContent>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <TanstackQueryDemo />
            <ZustandDemo />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
