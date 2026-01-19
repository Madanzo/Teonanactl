# Cleanup Candidates

The following files and dependencies have been identified as potentially unnecessary and are candidates for removal.

## 1. Unused Assets (Images)
These images are present in `src/assets` but are either not imported or used only by dead code.
- [ ] `src/assets/hero-ceremonial.jpg` (Replaced by `hero-ceremonial-shrooms.png`)
- [ ] `src/assets/product-cacao.jpg` (Old product placeholder)
- [ ] `src/assets/product-kit.jpg` (Old product placeholder)
- [ ] `src/assets/product-thc-sagrado.jpg` (Old product placeholder)

## 2. Dead Code (Logic)
Code segments that reference the old/deleted products.
- [ ] **`src/components/shop/ProductCard.tsx`**: Remove imports of old images and the `productImages` mapping object.
- [ ] **`src/pages/ProductDetail.tsx`**: Remove imports of old images and the `productImages` mapping object.
- [ ] **`src/pages/ProductDetail.tsx`**: Update category display logic (lines 99-102) which references deleted categories (`thc`, `cacao`, `accessories`).

## 3. Unused UI Components (Shadcn UI)
These components are installed but not used in the application.
- [ ] `src/components/ui/accordion.tsx`
- [ ] `src/components/ui/chart.tsx`
- [ ] `src/components/ui/carousel.tsx`
- [ ] `src/components/ui/input-otp.tsx`
- [ ] `src/components/ui/calendar.tsx` (if present)
- [ ] `src/components/ui/context-menu.tsx`
- [ ] `src/components/ui/menubar.tsx`
- [ ] `src/components/ui/pagination.tsx` (if present)
- [ ] `src/components/ui/resizable.tsx` (if present)
- [ ] `src/components/ui/scroll-area.tsx` (if present)
- [ ] `src/components/ui/select.tsx` (if present - check usage)
- [ ] `src/components/ui/slider.tsx`
- [ ] `src/components/ui/switch.tsx`
- [ ] `src/components/ui/tabs.tsx`
- [ ] `src/components/ui/toggle.tsx`
- [ ] `src/components/ui/toggle-group.tsx`

## 4. Unused Dependencies (package.json)
Libraries associated with the unused components above.
- [ ] `@radix-ui/react-accordion`
- [ ] `@radix-ui/react-context-menu`
- [ ] `@radix-ui/react-hover-card`
- [ ] `@radix-ui/react-menubar`
- [ ] `@radix-ui/react-navigation-menu`
- [ ] `@radix-ui/react-popover` (Check usage, might be used by Dialog/Dropdown)
- [ ] `@radix-ui/react-progress`
- [ ] `@radix-ui/react-radio-group`
- [ ] `@radix-ui/react-scroll-area`
- [ ] `@radix-ui/react-select` (Check usage)
- [ ] `@radix-ui/react-slider`
- [ ] `@radix-ui/react-switch`
- [ ] `@radix-ui/react-tabs`
- [ ] `@radix-ui/react-toggle`
- [ ] `@radix-ui/react-toggle-group`
- [ ] `recharts`
- [ ] `date-fns`
- [ ] `react-day-picker`
- [ ] `embla-carousel-react`
- [ ] `input-otp`
- [ ] `vaul` (Drawer component - used in CartDrawer? Check `src/components/cart/CartDrawer.tsx`)

> **Note on Dependencies:** Removing Shadcn dependencies is safe only if we delete the corresponding component files. I recommend keeping them if you plan to expand the app features soon. For a strict cleanup, they can be removed.

## Summary
- **Files to delete:** ~4 images, ~10-15 UI component files.
- **Dependencies to uninstall:** ~15-20 packages.
- **Code to refactor:** 2 files (`ProductCard.tsx`, `ProductDetail.tsx`).
