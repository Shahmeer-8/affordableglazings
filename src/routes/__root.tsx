import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { StickyQuote } from "../components/site/StickyQuote";

function NotFoundComponent() {
  return (
    <div className="min-h-screen grid place-items-center px-6 pt-24 pb-16 bg-soft-gray">
      <div className="max-w-lg text-center">
        <p className="text-xs font-bold tracking-[0.22em] uppercase text-brand-blue mb-4">404 · Not found</p>
        <h1 className="text-6xl md:text-7xl font-display font-semibold text-navy leading-none">
          This page has been reframed.
        </h1>
        <p className="mt-5 text-navy/60">
          The page you're looking for doesn't exist or may have moved. Let's get you back to something beautiful.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="bg-navy text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-brand-blue transition-colors">
            Go home
          </Link>
          <Link to="/contact" className="border border-navy/10 text-navy px-6 py-3 rounded-full text-sm font-semibold hover:bg-white transition-colors">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="min-h-screen grid place-items-center px-6 bg-soft-gray">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-display font-semibold text-navy">Something didn't load</h1>
        <p className="mt-3 text-navy/60">A crack in the glass. Try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="bg-navy text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-brand-blue"
          >
            Try again
          </button>
          <a href="/" className="border border-navy/10 px-6 py-3 rounded-full text-sm font-semibold">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Affordable Glazings — Premium UK Windows, Doors & Conservatories" },
      {
        name: "description",
        content:
          "Bespoke architectural glazing across the UK. A++ energy-rated windows, luxury doors and light-filled conservatories, expertly installed with a 10-year guarantee.",
      },
      { name: "author", content: "Affordable Glazings" },
      { property: "og:title", content: "Affordable Glazings — Premium UK Glazing" },
      { property: "og:description", content: "Bespoke windows, doors and conservatories, engineered in Britain." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Affordable Glazings" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0A1128" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-soft-gray text-navy">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <StickyQuote />
      </div>
    </QueryClientProvider>
  );
}
