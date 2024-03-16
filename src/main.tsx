import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ClerkProvider } from "@clerk/clerk-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TradingPage from "./pages/TradingPage";


declare global {
  interface ImportMeta {
    env: {
      [key: string]: string | undefined;
      VITE_CLERK_PUBLISHABLE_KEY?: string;
    };
  }
}

const root = createRoot(document.getElementById("root")!);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    ),
  },
  {
    path: "/tradingpage",
    element: (
      <div>
        <TradingPage />
      </div>
    ),
  },
]);

root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
