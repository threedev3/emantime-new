import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import * as Sentry from "@sentry/react";
import App from "./App.jsx";

Sentry.init({
  dsn: import.meta.env.VITE_APP_SENTRY_TOKEN_KEY,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
