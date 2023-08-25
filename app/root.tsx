import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import { OverlayProvider } from "react-aria";

import styles from "./tailwind.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function App() {
  return (
    <html lang="en" className="h-full bg-neutral-100">
      <head>
        <Meta />
        <Links />
      </head>

      <body className="h-full">
        {/* If we comment out the OverlayProvider tags, HMR works */}
        <OverlayProvider className="h-full">
          <Outlet />
        </OverlayProvider>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
