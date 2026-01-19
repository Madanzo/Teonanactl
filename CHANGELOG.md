# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2026-01-19

### Added
- `CHECKPOINT_2026-01-16.md` - Project state documentation
- `CLEANUP_CANDIDATES.md` - Audit of unnecessary files
- `CHANGELOG.md` - Version history tracking
- `DECISIONS.md` - Technical decisions log
- `TODO.md` - Task backlog
- `/checkpoints` folder for periodic snapshots

### Removed
- 4 unused image assets (old placeholders)
- 11 unused Shadcn UI components
- 59 unused npm dependencies (Radix primitives, recharts, date-fns, etc.)

### Changed
- Refactored `ProductCard.tsx`, `ProductDetail.tsx`, `Cart.tsx` to remove dead code
- Updated category display logic for new categories (microdosis, cbd, thc-oil)
- CSS bundle reduced from 72KB to 65KB

---

## [1.0.0] - 2026-01-16

### Added
- **Teonanácatl Page** (`/teonanacatl`) - Dedicated microdosis product page
- **Sagrado Page** (`/sagrado`) - CBD and THC oil products page
- **Quiénes Somos Page** (`/quienes-somos`) - About page with founders
- 4 Teonanácatl microdosis products (TEO, NANA, SABIN, NANA SH)
- 3 Sagrado oil products (CBD Original, San Pedro+CBD, THC Original)
- New category system: `microdosis`, `cbd`, `thc-oil`
- Logo integration (header, footer, favicon)
- Firebase Hosting deployment configuration
- Updated SEO meta tags and Open Graph data

### Changed
- Hero image updated to ceremonial mushroom banner
- Product descriptions updated with Lion's Mane + cacao/niacin ingredients
- Navigation updated to include Teonanácatl and Sagrado links

### Removed
- 6 placeholder products (old template content)

---

## [0.1.0] - 2026-01-05

### Added
- Initial project setup with Vite + React + TypeScript
- Shadcn/ui component library integration
- Cart functionality with localStorage persistence
- Product catalog with variations
- Responsive design with Tailwind CSS
- Basic pages: Home, Products, Product Detail, Cart
