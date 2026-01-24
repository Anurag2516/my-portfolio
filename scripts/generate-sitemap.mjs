import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const hostname = "https://anuragyadav.io";

// Extract routes from App.tsx
function extractRoutesFromAppTsx() {
  const appTsxPath = join(__dirname, "../src/App.tsx");
  const appTsxContent = readFileSync(appTsxPath, "utf-8");

  // Regex to match <Route path="..." /> patterns
  const routeRegex = /<Route\s+path=["']([^"']+)["']/g;
  const routes = [];
  let match;

  while ((match = routeRegex.exec(appTsxContent)) !== null) {
    const path = match[1];

    // Skip dynamic routes (containing :)
    if (path.includes(":")) {
      console.log(`⚠️  Skipping dynamic route: ${path}`);
      continue;
    }

    // Determine priority based on path
    let priority = 0.7;
    let changefreq = "weekly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path === "/projects") {
      priority = 0.9;
      changefreq = "weekly";
    }

    routes.push({
      url: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: new Date().toISOString(),
    });
  }

  return routes;
}

async function generateSitemap() {
  try {
    const routes = extractRoutesFromAppTsx();

    if (routes.length === 0) {
      console.error("❌ No routes found in App.tsx");
      process.exit(1);
    }

    console.log(`📍 Found ${routes.length} routes:`);
    routes.forEach((route) => console.log(`   - ${route.url}`));

    const sitemap = new SitemapStream({ hostname });
    const writeStream = createWriteStream(
      join(__dirname, "../public/sitemap.xml"),
    );

    sitemap.pipe(writeStream);

    routes.forEach((route) => {
      sitemap.write(route);
    });

    sitemap.end();

    await streamToPromise(sitemap);
    console.log("✅ Sitemap generated successfully at public/sitemap.xml");
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
    process.exit(1);
  }
}

generateSitemap();
