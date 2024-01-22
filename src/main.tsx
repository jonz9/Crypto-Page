import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

const root = createRoot(document.getElementById("root")!);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

root.render(
  <React.StrictMode>
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        signIn: { baseTheme: dark },
      }}
      publishableKey={PUBLISHABLE_KEY}
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
