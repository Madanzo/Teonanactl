# Project Checkpoint - Teonanácatl

**Date:** 2026-01-16
**Status:** App is functional, deployed to Firebase, and synced with GitHub.

## Project Overview
**Teonanácatl** is a React-based e-commerce platform for ceremonial wellness products (Microdoses, CBD, THC oils). It features a modern, clean design respecting ancestral traditions ("Medicina Tradicional Mexicana").

## Tech Stack
- **Framework:** React 18 (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, Shadcn UI, Lucide React (icons)
- **State Management:** React Context (CartContext), TanStack Query
- **Routing:** React Router DOM
- **Deployment:** Firebase Hosting
- **Package Manager:** NPM

## Folder Structure
```
/src
  /assets         # Images (logos, products, hero banners)
  /components     # Reusable UI components
    /layout       # Header, Footer
    /shop         # ProductCard, CartDrawer
    /ui           # Shadcn UI primitives
  /contexts       # CartContext
  /data           # products.ts (Product catalog)
  /lib            # Utilities (utils.ts)
  /pages          # Page views (Index, Products, Teonanacatl, Sagrado, etc.)
  /types          # TypeScript interfaces (Product, CartItem)
```

## Key Files & Purpose
- **`src/data/products.ts`**: The "database" file. Contains all product data, prices, variations, and descriptions.
- **`src/App.tsx`**: Main router configuration. Handles all routes including `/teonanacatl`, `/sagrado`, `/quienes-somos`.
- **`src/pages/Index.tsx`**: Landing page with "Conexión Sagrada" hero and featured products.
- **`src/pages/Teonanacatl.tsx`**: Dedicated page for Mushroom Microdoses (`microdosis` category).
- **`src/pages/Sagrado.tsx`**: Dedicated page for CBD and THC oils (`cbd`, `thc-oil` categories).
- **`src/pages/QuienesSomos.tsx`**: About Us page featuring founders Loredana Tavano & Arturo Martinez.
- **`firebase.json`**: Firebase Hosting configuration (rewrites all routes to index.html for SPA).

## Integrations
- **Firebase Hosting**: Production deployment.
- **Mercado Pago** (Planned/Pending): Not yet fully implemented, but objective mentions integration.

## Environment Variables
- None used in code currently. API keys (if added for Mercado Pago) should be in `.env`.

## Recent Changes
- **New Product Lines**: Added 4 Teonanácatl doses and 3 Sagrado oils.
- **Category System**: Refactored categories to `microdosis`, `cbd`, `thc-oil`.
- **New Pages**: Created dedicated pages for product lines and "Quiénes Somos".
- **Branding**: Updated Logo and Favicon.
- **Founders**: Added profile info and photos.

## Known Issues / TODOs
- **Dead Code**: `ProductDetail.tsx` and `ProductCard.tsx` contain logic and imports for deleted placeholder products (Cacao, Kit, etc.).
- **Unused Assets**: Several images in `src/assets` are from the old template and no longer used.
- **Category Display Logic**: `ProductDetail.tsx` has outdated conditional logic for displaying category names (checks for 'thc'/'cacao' which no longer exist).

## Next Steps
- Implement Mercado Pago integration.

---

## Cleanup Completed (2026-01-19)

### Removed Images (4 files)
- `src/assets/hero-ceremonial.jpg`
- `src/assets/product-cacao.jpg`
- `src/assets/product-kit.jpg`
- `src/assets/product-thc-sagrado.jpg`

### Removed UI Components (11 files)
- `accordion.tsx`, `chart.tsx`, `carousel.tsx`, `input-otp.tsx`
- `context-menu.tsx`, `menubar.tsx`, `slider.tsx`, `switch.tsx`
- `tabs.tsx`, `toggle.tsx`, `toggle-group.tsx`

### Uninstalled Dependencies (59 packages)
Removed: `@radix-ui/react-accordion`, `@radix-ui/react-context-menu`, `@radix-ui/react-hover-card`, `@radix-ui/react-menubar`, `@radix-ui/react-navigation-menu`, `@radix-ui/react-popover`, `@radix-ui/react-progress`, `@radix-ui/react-radio-group`, `@radix-ui/react-scroll-area`, `@radix-ui/react-select`, `@radix-ui/react-slider`, `@radix-ui/react-switch`, `@radix-ui/react-tabs`, `@radix-ui/react-toggle`, `@radix-ui/react-toggle-group`, `recharts`, `date-fns`, `react-day-picker`, `embla-carousel-react`, `input-otp`, `vaul`

### Code Refactored
- `ProductCard.tsx`: Removed dead image imports/mappings
- `ProductDetail.tsx`: Removed dead image imports/mappings, fixed category display logic
- `Cart.tsx`: Removed dead image imports/mappings

### Build Size Reduction
- CSS: 72KB → 65KB (saved ~7KB)
- JS: ~368KB (unchanged, tree-shaking handled unused code)
