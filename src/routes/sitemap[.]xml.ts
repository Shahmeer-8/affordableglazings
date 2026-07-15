import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";
const productSlugs = ["sashwindows", "casementwindows", "heritagewindows", "baywindows", "flushwindows", "singledoors", "crittalldoors", "frenchdoors", "slidingdoors", "bifoldingdoors", "slimrooflight", "pyramidrooflight", "conservatories"];
const paths = ["/", "/about", "/windows", "/doors", "/rooflights", "/conservatories", "/roofline", "/repairs", "/commercial", "/gallery", ...productSlugs.map((s) => `/products/${s}`), "/testimonials", "/blog", "/faq", "/quote", "/privacy", "/terms", "/cookies"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
