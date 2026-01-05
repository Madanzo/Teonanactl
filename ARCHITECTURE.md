# 🏗️ Teonanactl Architecture Guide

This document explains the project structure, data flow, and key patterns used in the Teonanactl e-commerce application.

---

## 📐 High-Level Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         App.tsx                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                    Providers Layer                          │ │
│  │  QueryClientProvider → TooltipProvider → CartProvider      │ │
│  └────────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                    Layout Structure                         │ │
│  │  Header → Main Content (Routes) → Footer + CartDrawer      │ │
│  └────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📁 Folder Structure

```
src/
├── assets/              # Static images (hero, product photos)
├── components/
│   ├── cart/            # Shopping cart components
│   ├── layout/          # Header & Footer
│   ├── shop/            # Product-related components
│   └── ui/              # shadcn/ui component library (49 components)
├── contexts/            # React Context providers
├── data/                # Static data (products catalog)
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Route page components
└── types/               # TypeScript type definitions
```

---

## 🔄 Data Flow Diagram

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   products   │────▶│    Pages     │────▶│  Components  │
│   (data/)    │     │  (pages/)    │     │ (components/)│
└──────────────┘     └──────────────┘     └──────────────┘
                            │
                            ▼
                     ┌──────────────┐
                     │ CartContext  │
                     │ (contexts/)  │
                     └──────────────┘
                            │
                     ┌──────┴──────┐
                     ▼             ▼
              ┌──────────┐  ┌──────────┐
              │CartDrawer│  │Cart Page │
              └──────────┘  └──────────┘
```

---

## 📄 Pages

| Page | Route | Purpose |
|------|-------|---------|
| `Index.tsx` | `/` | Homepage with hero, values, and featured products |
| `Products.tsx` | `/productos` | Product catalog with category filtering |
| `ProductDetail.tsx` | `/productos/:slug` | Individual product page with variations |
| `Cart.tsx` | `/carrito` | Full cart page with order summary |
| `NotFound.tsx` | `*` | 404 error page |

---

## 🧩 Components

### Layout Components
| Component | Location | Purpose |
|-----------|----------|---------|
| `Header` | `layout/Header.tsx` | Navigation bar with logo, links, cart icon |
| `Footer` | `layout/Footer.tsx` | Site footer with links and info |

### Shop Components
| Component | Location | Purpose |
|-----------|----------|---------|
| `ProductCard` | `shop/ProductCard.tsx` | Product card for listings |
| `CartDrawer` | `cart/CartDrawer.tsx` | Slide-out cart panel |

### UI Components (shadcn/ui)
The `ui/` folder contains **49 pre-built components** from shadcn/ui:
- Form elements: `button`, `input`, `select`, `checkbox`, `radio-group`
- Display: `card`, `badge`, `avatar`, `skeleton`
- Feedback: `toast`, `alert`, `dialog`, `sheet`
- Navigation: `tabs`, `accordion`, `navigation-menu`
- And many more...

---

## 🗃️ Data Layer

### Product Type Structure

```typescript
interface Product {
  id: string;
  slug: string;                              // URL-friendly name
  name: string;
  description: string;
  longDescription?: string;
  basePrice: number;                         // Starting price
  category: 'thc' | 'cacao' | 'accessories'; // Product category
  tags: string[];                            // For filtering/display
  featuredImage: string;
  gallery: string[];
  variations: ProductVariation[];            // Size/quantity options
  trackInventory: boolean;
  status: 'draft' | 'active' | 'archived';
  featured: boolean;                         // Show on homepage
}

interface ProductVariation {
  id: string;
  sku: string;
  name: string;                    // e.g., "4 unidades", "250g"
  price: number;
  compareAtPrice?: number;         // Original price (for discounts)
  inventoryQuantity: number;
  attributes: {
    quantity: number;
    unit: string;
  };
}
```

### Product Categories
1. **THC** - Microdosis products (THC Sagrado, Luna Llena, Equilibrio)
2. **Cacao** - Ceremonial cacao products
3. **Accessories** - Kits, incense, and ceremonial items

### Data Functions (`src/data/products.ts`)
```typescript
products                 // Array of all products
getProductBySlug(slug)   // Find product by URL slug
getFeaturedProducts()    // Get products marked as featured
getProductsByCategory()  // Filter by category
```

---

## 🛒 Cart System

### Cart Context (`src/contexts/CartContext.tsx`)

The cart uses React Context with localStorage persistence:

```typescript
interface CartContextType {
  cart: Cart;                                    // Current cart state
  addToCart(product, variation, quantity);       // Add item
  removeFromCart(productId, variationId);        // Remove item
  updateQuantity(productId, variationId, qty);   // Change quantity
  clearCart();                                   // Empty cart
  isCartOpen: boolean;                           // Drawer visibility
  setIsCartOpen(open);                           // Toggle drawer
}

interface Cart {
  items: CartItem[];    // Array of cart items
  subtotal: number;     // Calculated total price
  itemCount: number;    // Total items in cart
}
```

### Cart Flow
```
User clicks "Add to Cart"
        │
        ▼
┌─────────────────┐
│  addToCart()    │ ──▶ Updates cart state
└─────────────────┘
        │
        ▼
┌─────────────────┐
│ localStorage    │ ──▶ Persists cart
└─────────────────┘
        │
        ▼
┌─────────────────┐
│ CartDrawer      │ ──▶ Opens automatically
└─────────────────┘
```

---

## 🎨 Styling System

### Tailwind CSS Configuration

The project uses a custom ceremonial theme defined in `tailwind.config.ts`:

**Color Palette:**
- `primary` - Sage green tones
- `secondary` - Terracotta/earth tones
- `gold` - Ceremonial gold accents
- `cream` - Light background tones
- `sage` - Green accent colors

**Custom Utilities:**
- `.container-ceremonial` - Centered content container
- `.btn-gold` - Gold ceremonial button
- `.badge-sage` - Sage-colored badge
- `.divider-sacred` - Decorative divider
- `.text-display` - Large display typography
- `.text-heading` - Section headings

### CSS Files
| File | Purpose |
|------|---------|
| `index.css` | Global styles, CSS variables, custom utilities |
| `App.css` | App-specific layout styles |

---

## 🔗 Routing

Using React Router v6:

```tsx
<Routes>
  <Route path="/"                element={<Index />} />
  <Route path="/productos"       element={<Products />} />
  <Route path="/productos/:slug" element={<ProductDetail />} />
  <Route path="/carrito"         element={<Cart />} />
  <Route path="*"                element={<NotFound />} />
</Routes>
```

---

## 🧪 Key Libraries

| Library | Version | Purpose |
|---------|---------|---------|
| `react` | 18.3 | UI framework |
| `react-router-dom` | 6.30 | Client-side routing |
| `@tanstack/react-query` | 5.83 | Data fetching & caching |
| `tailwindcss` | 3.4 | Utility-first CSS |
| `lucide-react` | 0.462 | Icon library |
| `sonner` | 1.7 | Toast notifications |
| `vaul` | 0.9 | Drawer component |
| `zod` | 3.25 | Schema validation |

---

## 🚀 Build & Development

### Development Server
```bash
npm run dev    # Starts Vite dev server at localhost:5173
```

### Production Build
```bash
npm run build  # Creates optimized build in dist/
npm run preview # Preview production build locally
```

### Key Config Files
| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite bundler configuration |
| `tailwind.config.ts` | Tailwind CSS customization |
| `tsconfig.json` | TypeScript configuration |
| `components.json` | shadcn/ui configuration |

---

## 📝 Adding New Features

### Adding a New Product
1. Edit `src/data/products.ts`
2. Add new product object with all required fields
3. Add product images to `src/assets/`

### Adding a New Page
1. Create component in `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`
3. Add navigation link in `Header.tsx`

### Adding a New Component
1. For UI components: run `npx shadcn-ui@latest add [component]`
2. For custom components: create in appropriate folder under `components/`

---

## 🔮 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Payment processing (Stripe)
- [ ] Order management system
- [ ] Admin dashboard
- [ ] Email notifications
