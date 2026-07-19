// Docusaurus client module — runs once per page load in the browser.
// Prints a small branded message to the browser console.

const ASCII_ART = String.raw`
███████╗██╗      ██████╗ ██╗    ██╗██╗  ██╗████████╗██████╗  █████╗
██╔════╝██║     ██╔═══██╗██║    ██║╚██╗██╔╝╚══██╔══╝██╔══██╗██╔══██╗
█████╗  ██║     ██║   ██║██║ █╗ ██║ ╚███╔╝    ██║   ██████╔╝███████║
██╔══╝  ██║     ██║   ██║██║███╗██║ ██╔██╗    ██║   ██╔══██╗██╔══██║
██║     ███████╗╚██████╔╝╚███╔███╔╝██╔╝ ██╗   ██║   ██║  ██║██║  ██║
╚═╝     ╚══════╝ ╚═════╝  ╚══╝╚══╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝
`;

const MESSAGE = "👋 Hey, curious mind!\n\nWe're Flowxtra — building the future of hiring with AI-powered recruitment software.\n\n🐛 Found something interesting? office@flowxtra.com";

// Docusaurus only invokes a client module's default export for named
// lifecycle hooks (e.g. onRouteDidUpdate) — a plain import has no other
// hook, so the banner must run as a top-level side effect on module load.
if (typeof window !== 'undefined' && !window.__flowxtraBannerShown) {
  window.__flowxtraBannerShown = true;
  console.log('%c' + ASCII_ART, 'color:#4c6971;font-family:monospace;font-weight:bold;');
  console.log('%c' + MESSAGE, 'color:#4c6971;font-size:13px;line-height:1.6;');
}
