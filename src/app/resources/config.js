const baseURL = "nextjs-portfolio.up.railway.app";

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": true,
  "/contact": true,
  "/infographic": true,
};

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
  "/work/automate-design-handovers-with-a-figma-to-code-pipeline": true,
};

const effects = {
  gradient: true,
  dots: false,
  lines: true,
};

const style = {
  theme: "dark", // dark | light
  neutral: "gray", // sand | gray | slate
  brand: "aqua", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "yellow", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
  colors: {
    orange: "#FFA500",
    yellow: "#FFD700",
    moss: "#8A9A5B",
    green: "#008000",
    emerald: "#50C878",
    aqua: "#00FFFF",
    cyan: "#00BCD4",
    blue: "#0000FF",
    indigo: "#4B0082",
    purple: "#8A3FFC",
    magenta: "#FF00FF",
    pink: "#FFC0CB",
    white: "#fff",
  },
};

const display = {
  residence: true,
  location: true,
  time: true,
};

const mailchimp = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    gradient: true,
    dots: false,
    lines: true,
  },
};

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL };
