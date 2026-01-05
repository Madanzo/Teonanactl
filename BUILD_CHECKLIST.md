# 🚀 Teonanactl E-Commerce Build Checklist

**Project Overview:** Rebuild of microdosis.shopping — a custom e-commerce platform for ceremonial wellness products (THC microdosis, psilocybin, ceremonial cacao) serving the Mexican market.

---

## Phase 1: Foundation & Infrastructure

### Backend Setup (Firebase)

- [ ] Create Firebase project
- [ ] Configure Firestore database
  - [ ] Products collection schema
  - [ ] Orders collection schema
  - [ ] Users collection schema
  - [ ] Inventory collection schema
- [ ] Set up Firebase Authentication
  - [ ] Email/password auth
  - [ ] Phone number auth (popular in Mexico)
  - [ ] Guest checkout support
- [ ] Configure Firebase Storage (product images)
- [ ] Set up Cloud Functions for:
  - [ ] Order processing
  - [ ] Inventory management
  - [ ] Email triggers
  - [ ] Payment webhooks
- [ ] Configure security rules
- [ ] Set up development/staging/production environments

### CMS Integration (Sanity.io)

- [ ] Create Sanity project
- [ ] Define content schemas:
  - [ ] Products
  - [ ] Product categories
  - [ ] Blog posts (optional)
  - [ ] Team members
  - [ ] Testimonials
  - [ ] FAQ items
  - [ ] Page content (About, Services, etc.)
- [ ] Set up Sanity Studio
- [ ] Configure image CDN (Sanity's built-in)
- [ ] Create editorial workflow for content team
- [ ] Connect Sanity to Next.js frontend

---

## Phase 2: Core E-Commerce Features

### Product System

- [ ] Product listing page with filters
  - [ ] Category filter (THC, Cacao, Accessories)
  - [ ] Price range filter
  - [ ] Sort options (price, name, featured)
- [ ] Product detail page
  - [ ] Image gallery with zoom
  - [ ] Variation selector (size/quantity)
  - [ ] Price display with discounts
  - [ ] Stock availability indicator
  - [ ] Add to cart functionality
  - [ ] Related products section
- [ ] Search functionality
- [ ] Product quick view (optional)

### Shopping Cart

- [ ] Cart context with state management
- [ ] Add/remove/update items
- [ ] Cart drawer (slide-out panel)
- [ ] Cart page
- [ ] Cart persistence (localStorage → Firebase for logged-in users)
- [ ] Save for later functionality
- [ ] Cart item stock validation

### Checkout Flow

- [ ] Checkout page layout
- [ ] Guest checkout option
- [ ] Step 1: Contact information
  - [ ] Email
  - [ ] Phone number
- [ ] Step 2: Shipping address
  - [ ] Mexican address format
  - [ ] State/municipality selectors
  - [ ] Postal code validation
  - [ ] Save address for future orders
- [ ] Step 3: Shipping method
  - [ ] Shipping cost calculation
  - [ ] Delivery time estimates
  - [ ] Free shipping threshold display
- [ ] Step 4: Payment
  - [ ] Payment method selection
  - [ ] Order summary review
- [ ] Order confirmation page
- [ ] Order confirmation email trigger

### Payment Processing

- [ ] Research & select primary gateway (OpenPay vs Conekta vs Mercado Pago)
- [ ] Payment gateway integration
  - [ ] Credit/debit cards
  - [ ] OXXO cash payments
  - [ ] SPEI bank transfer
  - [ ] Mercado Pago (if using)
- [ ] Payment webhook handlers
- [ ] Failed payment handling
- [ ] Refund processing capability
- [ ] Payment receipts/invoices
- [ ] 3D Secure authentication

### User Accounts

- [ ] Registration page
- [ ] Login page
- [ ] Password reset flow
- [ ] User dashboard
  - [ ] Order history
  - [ ] Order detail view
  - [ ] Track shipment
  - [ ] Saved addresses
  - [ ] Account settings
- [ ] Wishlist/favorites (optional)

---

## Phase 3: Essential Pages & Content

### Informational Pages

- [ ] Homepage
  - [ ] Hero section
  - [ ] Value propositions
  - [ ] Featured products
  - [ ] Testimonials section
  - [ ] Newsletter signup
  - [ ] Instagram feed (optional)
- [ ] Quiénes Somos (About)
  - [ ] Company story/mission
  - [ ] Team profiles (Dr. Arturo, Dra. Loredana)
  - [ ] Credentials & certifications
  - [ ] Scientific methodology
- [ ] Servicios (Services)
  - [ ] Microdosis therapeutic protocols
  - [ ] Individual sessions
  - [ ] Group experiences
  - [ ] Booking/inquiry system
- [ ] FAQ / Preguntas Frecuentes
  - [ ] Product usage questions
  - [ ] Shipping & delivery
  - [ ] Payment methods
  - [ ] Returns & refunds
- [ ] Contact page
  - [ ] Contact form
  - [ ] WhatsApp integration
  - [ ] Location/hours (if applicable)
  - [ ] Email addresses
- [ ] Blog (optional, for SEO)

### Legal & Compliance Pages

- [ ] Términos y Condiciones
- [ ] Aviso de Privacidad (required by Mexican law)
- [ ] Política de Envíos
- [ ] Política de Devoluciones
- [ ] Disclaimer médico (medical disclaimer)
- [ ] Cookie policy & consent banner

---

## Phase 4: Marketing & Communication

### Email System

- [ ] Select email provider (SendGrid, Postmark, etc.)
- [ ] Transactional emails:
  - [ ] Order confirmation
  - [ ] Shipping notification
  - [ ] Delivery confirmation
  - [ ] Password reset
  - [ ] Account welcome
- [ ] Email templates (branded, responsive)
- [ ] Newsletter integration (Merkad Agency)
- [ ] Abandoned cart emails (optional)

### SEO & Analytics

- [ ] Meta tags for all pages
- [ ] Open Graph tags (social sharing)
- [ ] Structured data (JSON-LD)
  - [ ] Organization
  - [ ] Products
  - [ ] Breadcrumbs
  - [ ] FAQ
- [ ] XML sitemap
- [ ] robots.txt
- [ ] Google Analytics 4 setup
- [ ] Google Search Console
- [ ] Facebook Pixel (if advertising)

### Social & Support

- [ ] WhatsApp Business integration
- [ ] Social media links
- [ ] Share buttons on products
- [ ] Customer reviews system (optional)

---

## Phase 5: Admin & Operations

### Admin Dashboard

- [ ] Order management
  - [ ] Order list with filters
  - [ ] Order detail view
  - [ ] Update order status
  - [ ] Print packing slips
- [ ] Inventory management
  - [ ] Stock levels
  - [ ] Low stock alerts
  - [ ] Inventory adjustments
- [ ] Customer management
  - [ ] Customer list
  - [ ] Customer order history
- [ ] Basic analytics
  - [ ] Sales overview
  - [ ] Top products
  - [ ] Revenue reports
- [ ] Discount codes (optional)

### Shipping & Fulfillment

- [ ] Shipping carrier integration (or manual)
- [ ] Shipping label generation (optional)
- [ ] Tracking number management
- [ ] Delivery zones configuration

---

## Phase 6: Quality & Performance

### Testing

- [ ] Unit tests for critical functions
- [ ] Integration tests for checkout flow
- [ ] Payment gateway testing (sandbox)
- [ ] Mobile responsiveness testing
- [ ] Cross-browser testing
- [ ] Accessibility audit (WCAG)
- [ ] Load testing

### Performance Optimization

- [ ] Image optimization (WebP, lazy loading)
- [ ] Code splitting
- [ ] Caching strategy
- [ ] CDN configuration
- [ ] Core Web Vitals optimization
- [ ] Lighthouse audit (target 90+)

### Security

- [ ] HTTPS enforcement
- [ ] Input validation & sanitization
- [ ] CSRF protection
- [ ] Rate limiting
- [ ] Security headers
- [ ] PCI compliance considerations
- [ ] Regular dependency updates

---

## Phase 7: Launch

### Pre-Launch

- [ ] Content review & proofreading
- [ ] Final QA testing
- [ ] Payment gateway go-live
- [ ] DNS configuration
- [ ] SSL certificate
- [ ] Backup system configured
- [ ] Monitoring & alerting setup
- [ ] 404 page
- [ ] Error handling & logging

### Launch Day

- [ ] Deploy to production
- [ ] Smoke testing
- [ ] Monitor for errors
- [ ] Team training on admin panel

### Post-Launch

- [ ] Monitor analytics
- [ ] Gather user feedback
- [ ] Bug fixes & iterations
- [ ] SEO monitoring
- [ ] Performance monitoring

---

## 📊 Technical Decisions

| Decision | Options | Status |
|----------|---------|--------|
| Payment Gateway | OpenPay / Conekta / Mercado Pago | 🔲 Research |
| Hosting | Vercel / Firebase Hosting | 🔲 Decide |
| Email Provider | SendGrid / Postmark / Resend | 🔲 Research |
| Shipping Integration | Manual / API integration | 🔲 Decide |
| Admin Panel | Custom / Firebase Admin / Sanity | 🔲 Decide |

---

## 🔗 Dependencies & Integrations

| Service | Purpose | Account Status |
|---------|---------|----------------|
| Firebase | Backend, auth, database | 🔲 Create |
| Sanity.io | Content management | 🔲 Create |
| OpenPay/Conekta | Payment processing | 🔲 Apply |
| Merkad Agency | Newsletter | ✅ Existing |
| WhatsApp Business | Customer support | 🔲 Verify |
| Google Analytics | Analytics | 🔲 Create |
| Domain | microdosis.shopping | ✅ Existing |

---

## ⏱️ Timeline Estimate

| Phase | Duration | Dependencies |
|-------|----------|--------------|
| Phase 1: Foundation | 2-3 weeks | — |
| Phase 2: Core E-Commerce | 3-4 weeks | Phase 1 |
| Phase 3: Pages & Content | 2 weeks | Phase 1 |
| Phase 4: Marketing | 1-2 weeks | Phase 2, 3 |
| Phase 5: Admin | 2 weeks | Phase 2 |
| Phase 6: Quality | 1-2 weeks | All above |
| Phase 7: Launch | 1 week | All above |
| **Total** | **12-16 weeks** | |

---

## ⚠️ Important Notes

> [!WARNING]
> **Payment processing is the biggest risk** — Start gateway application early (can take 1-2 weeks for approval)

> [!TIP]
> Content creation (Quiénes Somos, Services, FAQ) can happen in parallel with development

> [!IMPORTANT]
> - Consider soft launch with limited products before full catalog
> - Mexican payment methods (OXXO, SPEI) are **essential** for local market
> - WhatsApp is **critical** for Mexican e-commerce customer service

---

## 📋 Quick Status

```
Phase 1: Foundation      [░░░░░░░░░░] 0%
Phase 2: Core E-Commerce [░░░░░░░░░░] 0%
Phase 3: Pages & Content [░░░░░░░░░░] 0%
Phase 4: Marketing       [░░░░░░░░░░] 0%
Phase 5: Admin           [░░░░░░░░░░] 0%
Phase 6: Quality         [░░░░░░░░░░] 0%
Phase 7: Launch          [░░░░░░░░░░] 0%
```

*Last updated: 2026-01-05*
