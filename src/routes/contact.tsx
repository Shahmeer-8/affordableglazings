import { createFileRoute, redirect } from "@tanstack/react-router";

// About and Contact are now a single page. Preserve the /contact URL by
// redirecting to the contact section of the merged About page.
export const Route = createFileRoute("/contact")({
  beforeLoad: () => {
    throw redirect({ to: "/about", hash: "contact" });
  },
});
