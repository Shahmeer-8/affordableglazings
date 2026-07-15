import { createFileRoute, redirect } from "@tanstack/react-router";

// There is no products index page — each category (Windows, Doors, Rooflights,
// Conservatories) has its own landing page with the product range.
export const Route = createFileRoute("/products/")({
  beforeLoad: () => {
    throw redirect({ to: "/windows", hash: "range" });
  },
});
