import { createRequire } from "node:module";
import path from "node:path";

// Turbopack's PostCSS loader cannot resolve this plugin by name, and a static
// import pulls native addons into the bundle. Load it from the project root.
const require = createRequire(path.join(process.cwd(), "package.json"));
const tailwindcss = require("@tailwindcss/postcss");

const config = {
  plugins: [tailwindcss()],
};

export default config;
