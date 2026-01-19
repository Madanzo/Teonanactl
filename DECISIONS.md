# Technical Decisions Log

This document records key technical choices made during development and the reasoning behind them. This helps future contributors (including future you) understand *why* things are built the way they are.

---

## Architecture Decisions

### 1. Static Product Data (No Database)
**Decision:** Store products in `src/data/products.ts` as a static array.

**Why:**
- Early stage project, no need for dynamic content yet
- Faster iteration without backend complexity
- Zero database costs
- Products change infrequently (manual updates are acceptable)

**Trade-off:** Adding/editing products requires code deploy. Will migrate to Firebase/Supabase when catalog grows beyond ~50 products.

---

### 2. Firebase Storage for Product Images (Not Local Assets)
**Decision:** Host product images on Firebase Storage with direct URLs.

**Why:**
- Keeps repository size small
- CDN delivery for better performance
- Easy to update images without code changes
- Same hosting provider as deployment (Firebase)

**Trade-off:** External dependency. If Firebase Storage has issues, images break.

---

### 3. Category System Refactor (v1.0.0)
**Decision:** Changed categories from `thc | cacao | accessories` to `microdosis | cbd | thc-oil`.

**Why:**
- Original categories were too generic for actual product lines
- "Microdosis" better describes Teonanácatl mushroom products
- Separating CBD and THC oils allows clearer product organization
- Matches business terminology used by founders

---

### 4. Separate Product Pages (Teonanácatl, Sagrado)
**Decision:** Create dedicated landing pages for each product line instead of just using category filters.

**Why:**
- Better SEO with unique page titles/meta
- Allows custom hero sections and educational content
- More marketing control per product line
- Improves user onboarding for each product type

**Trade-off:** More pages to maintain. Worth it for improved conversion.

---

### 5. Cart Persistence with localStorage
**Decision:** Use browser localStorage for cart state.

**Why:**
- No authentication system yet
- Simple implementation
- Works across page refreshes
- No backend required

**Trade-off:** Cart doesn't sync across devices. Will need user accounts for that.

---

### 6. Shadcn/ui Over Full Component Library
**Decision:** Use shadcn/ui (copy components into project) instead of a published library like MUI or Chakra.

**Why:**
- Full control over component styling
- No version lock-in or breaking updates
- Tailwind-native, matches our stack
- Only include components we actually use

**Trade-off:** Manual updates if upstream fixes bugs. After cleanup, we removed unused components.

---

### 7. Firebase Hosting Over Vercel
**Decision:** Deploy to Firebase Hosting instead of Vercel.

**Why:**
- Already using Firebase Storage for images
- Better integration with future Firebase services (Firestore, Functions)
- Single billing relationship
- Client is familiar with Firebase console

---

## Pending Decisions

### Payment Integration
**Options under consideration:**
- **Mercado Pago** - Preferred for Mexican market (OXXO, SPEI support)
- **Stripe** - Better international support, more developer-friendly

**Leaning toward:** Mercado Pago for initial launch due to target market.

### Authentication
**Options:**
- Firebase Auth (simple, integrates with hosting)
- Auth0 (more features, separate billing)
- No auth (guest checkout only)

**Current status:** Guest checkout planned for MVP. Auth deferred.

---

## Code Style Decisions

### TypeScript Strict Mode
- Using `strict: true` for better type safety
- All components are typed, no `any` escape hatches

### Import Paths
- Using `@/` alias for src folder (configured in vite.config.ts)
- Cleaner imports: `@/components/ui/button` vs `../../../components/ui/button`

### Component Naming
- Pages: PascalCase, match route (e.g., `ProductDetail.tsx` → `/productos/:slug`)
- Components: PascalCase function components
- Files match export names
