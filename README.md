# rico-docs

Documentation site for the **Rico Shopify theme** — a premium, conversion-focused storefront theme available on the Shopify Theme Store.

## Overview

`rico-docs` is a self-contained, static documentation portal built with vanilla HTML, CSS, and JavaScript. It requires no build tools, no npm, and no frameworks — just open `index.html` in a browser or serve the folder with any static file server.

## Features

- **Three-column layout** — fixed sidebar navigation, scrollable main content, and a sticky table of contents
- **Client-side search** — instant filtering across all pages via a desktop dropdown and a mobile slide-in panel
- **Collapsible nav groups** — accordion-style sub-menus with smooth animations
- **Scroll-spy TOC** — right-side "On This Page" list highlights the active section as you scroll
- **Pagination** — Previous / Next navigation between pages
- **Fully responsive** — adapts from widescreen desktop down to 320px phones
- **Keyboard accessible** — Ctrl+K opens search; Escape closes all panels
- **Zero dependencies** — no frameworks, no bundler, no runtime requirements

## File Structure

rico-docs/
├── index.html      # Shell HTML — layout, header, sidebar, TOC wiring
├── style.css       # All styles — reset, variables, layout, components, responsive
├── script.js       # Interactivity — navigation, search, scroll-spy, sidebar
├── content.js      # Page content — all documentation pages as a JS data map
└── README.md       # This file
