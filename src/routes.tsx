import { Routes as RoutesConfig, Route } from "react-router";
import App from "./app";

export function Routes() {
  return (
    <RoutesConfig>
      <Route index element={<App />} />
    </RoutesConfig>
  );
}
