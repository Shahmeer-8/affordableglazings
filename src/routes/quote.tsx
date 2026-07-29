import { createFileRoute, redirect } from "@tanstack/react-router";

// The Fast Quote form now lives in the footer on every page, so a dedicated
// quote page would render a second copy of it (duplicate DOM ids and two
// competing forms). Bookmarked /quote traffic is sent to that form instead.
export const Route = createFileRoute("/quote")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "quote" });
  },
});
