# Plastocore - Modern Manufacturing Website with E-Commerce
## Product Requirements Document

---

## Original Problem Statement
Build a modern business website for Plastocore with full e-commerce functionality. The website should showcase 8 product categories with real products from IndiaMART, enable online shopping with customization options, and serve as both a marketing platform and sales channel.

---

## Project Overview

**Company:** Plastocore  
**Industry:** Wire Harness & Cable Manufacturing  
**Location:** Ahmedabad, Gujarat, India  
**Contact:** +91-977-225-3784
**Established:** 2018  
**Type:** B2B Manufacturer & Supplier  

**Key Products:**
1. Customised Data Cable
2. Wire Harness
3. Cable Harness
4. Power Cable
5. Circular & Sensor Connector
6. Solar Connector & Harness
7. Waterproof Connector and Cable
8. Mobile Accessories

---

## Implementation Status

### ✅ Phase 1: Landing Page (Completed - December 2025)
- [x] Header with Plastocore logo and updated phone number
- [x] Hero section with tagline and supply chain mention
- [x] Product categories grid (8 categories with Shop buttons)
- [x] Capabilities section
- [x] About section with MSME certification
- [x] Testimonials section
- [x] Contact form
- [x] Footer with complete information

### ✅ Phase 2: E-Commerce System (Completed - December 2025)

#### Product Management
- [x] 8 main product categories
- [x] 20+ individual products with real data from IndiaMART
- [x] Product images, descriptions, prices, specifications
- [x] Stock status indicators

#### Product Listing Pages
- [x] Category-wise product display
- [x] Product cards with images and pricing
- [x] "In Stock" badges
- [x] Grid layout (responsive)
- [x] Navigation breadcrumbs

#### Product Detail Pages
- [x] Large product images
- [x] Detailed specifications table
- [x] Price display
- [x] Quantity selector (pieces)
- [x] Order type selection (Standard vs Customization)
- [x] Add to Cart functionality
- [x] Real-time stock status

#### Customization System
- [x] Radio button selection for customization
- [x] Dynamic form display when customization selected
- [x] Customization request form with fields:
  - Full Name *
  - Email Address *
  - Mobile Number *
  - Customization Details *
- [x] Form validation
- [x] Toast notifications for success
- [x] Automatic form reset after submission

#### Shopping Features
- [x] Quantity increase/decrease controls
- [x] Add to cart button (for standard products)
- [x] Bulk discount messaging
- [x] Certification indicators
- [x] Fast delivery promises

#### Navigation & Routing
- [x] React Router integration
- [x] Category pages: `/products/:categorySlug`
- [x] Product detail: `/product/:productId`
- [x] Back navigation buttons
- [x] Smooth transitions

---

## Technical Implementation

### Frontend Components Created
1. **ProductListing.jsx** - Category-wise product grid
2. **ProductDetail.jsx** - Individual product page with customization
3. Updated **ProductCategories.jsx** - Shop buttons integration
4. Updated **App.js** - Routing configuration

### Data Structure
- **productCategories**: 8 main categories
- **productsByCategory**: 20+ products organized by category
- Each product includes:
  - name, description, price, image
  - category, stock status
  - detailed specifications object

### Key Updates Made
1. ✅ Phone number changed to +91-977-225-3784
2. ✅ Hero subheading mentions "supplier and supply chain partner"
3. ✅ Product categories show "Shop" button instead of product count
4. ✅ MSME certification added, IEC removed
5. ✅ Customization radio button system implemented
6. ✅ Conditional form/cart display based on order type

---

## E-Commerce User Flow

### Standard Purchase Flow:
1. User clicks "Shop" on category card
2. Views product listing page
3. Clicks "View Details" on product
4. Selects "Standard Product" (default)
5. Adjusts quantity
6. Clicks "Add to Cart"
7. Success toast appears

### Customization Request Flow:
1. User navigates to product detail
2. Selects "Customization Required" radio button
3. Form appears with required fields
4. Fills in: name, email, mobile, custom specifications
5. Submits customization request
6. Success notification shown
7. Form auto-resets after 2 seconds

---

## Next Action Items

### P0 - Backend Development (Next Phase)
1. **Product APIs**
   - GET /api/products/categories
   - GET /api/products/category/:slug
   - GET /api/products/:id
   
2. **Customization Request API**
   - POST /api/customization-requests
   - Store in MongoDB: customer info + product details + requirements
   - Email notification to sales team

3. **Shopping Cart Backend**
   - POST /api/cart/add
   - GET /api/cart
   - PUT /api/cart/update
   - DELETE /api/cart/remove

4. **Order Management**
   - POST /api/orders
   - GET /api/orders/:id
   - Order tracking

### P1 - Enhanced Features
1. **Shopping Cart UI**
   - Cart icon in header with count
   - Cart page/drawer
   - Checkout flow

2. **Search & Filters**
   - Product search functionality
   - Price range filters
   - Category filters

3. **User Authentication**
   - Customer registration
   - Login/logout
   - Order history

4. **Payment Integration**
   - Payment gateway (Razorpay/Stripe)
   - Invoice generation
   - Payment confirmation emails

### P2 - Business Features
1. **Admin Dashboard**
   - Product management
   - Order management
   - Customer inquiries
   - Analytics

2. **Inventory Management**
   - Stock tracking
   - Low stock alerts
   - Bulk import/export

3. **Marketing Features**
   - Product recommendations
   - Related products
   - Recently viewed
   - Wishlist

---

## Database Schema (Planned)

### Products Collection
```
{
  _id: ObjectId,
  name: String,
  description: String,
  price: Number,
  category: String,
  categorySlug: String,
  image: String,
  specifications: Object,
  inStock: Boolean,
  stockQuantity: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Customization Requests Collection
```
{
  _id: ObjectId,
  productId: ObjectId,
  productName: String,
  customerName: String,
  email: String,
  mobile: String,
  customizationDetails: String,
  quantity: Number,
  status: String (pending/contacted/quoted/completed),
  createdAt: Date
}
```

### Cart Collection
```
{
  _id: ObjectId,
  userId: ObjectId (optional for guest),
  items: [{
    productId: ObjectId,
    quantity: Number,
    price: Number
  }],
  total: Number,
  createdAt: Date,
  updatedAt: Date
}
```

---

## Success Metrics

### E-Commerce KPIs
1. **Product Page Views** - Track which products are most viewed
2. **Add to Cart Rate** - % of product views that add to cart
3. **Customization Request Rate** - % choosing customization
4. **Form Completion Rate** - Customization form submissions
5. **Conversion Rate** - Orders / Total visitors

### Business Impact
- **Lead Generation**: Customization requests provide qualified leads
- **Sales Efficiency**: Standard orders reduce manual quote process
- **Customer Data**: Build database of customer preferences
- **Market Insights**: Understand which products drive most interest

---

## Current Features Summary

**✅ Fully Functional E-Commerce:**
- 8 product categories with real products
- Product listing and detail pages
- Dual purchase flow (standard + customization)
- Mobile-responsive design
- Professional UI with modern interactions
- Real product data from IndiaMART

**✅ Customization System:**
- Smart radio button selection
- Conditional form display
- Complete customer information capture
- Success feedback with toast notifications

**✅ Updated Information:**
- New phone number: +91-977-225-3784
- Supply chain positioning in hero
- MSME certification display
- Shop buttons on all categories

---

*Document updated: December 2025*  
*E-Commerce Phase: Complete (Frontend)*  
*Next Phase: Backend API Development*

