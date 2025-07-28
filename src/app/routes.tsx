import { Route, Routes as RoutesConfig } from "react-router";
import { App } from ".";

export function Routes() {
  return (
    <RoutesConfig>
      <Route index element={<App />} />
    </RoutesConfig>
  );
}
