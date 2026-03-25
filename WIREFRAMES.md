# FreshFeast Project Wireframes
## Comprehensive UI/UX Design Documentation

**Project:** FreshFeast Organic Food Ordering Platform  
**Date:** March 5, 2026  
**Version:** 1.0  
**Contact:** info@freshfeast.com | 0243521850

---

## Table of Contents
1. [Design System Overview](#design-system-overview)
2. [Homepage Wireframe](#homepage-wireframe)
3. [Menu Page Wireframe](#menu-page-wireframe)
4. [Order Page Wireframe](#order-page-wireframe)
5. [Cart Page Wireframe](#cart-page-wireframe)
6. [Gallery Page Wireframe](#gallery-page-wireframe)
7. [Track Order Wireframe](#track-order-wireframe)
8. [Support Page Wireframe](#support-page-wireframe)
9. [Preferences Page Wireframe](#preferences-page-wireframe)
10. [About Page Wireframe](#about-page-wireframe)
11. [Responsive Layouts](#responsive-layouts)

---

## Design System Overview

### Color Palette
```
Primary (Orange):    #F97316 - hsl(25, 95%, 53%)
Accent (Sage Green): #4A9964 - hsl(140, 35%, 45%)
Background:          #FDFBF8 - hsl(30, 50%, 98%)
Foreground:          #271D14 - hsl(25, 30%, 12%)
Muted:               #F3F0ED - hsl(30, 20%, 94%)
Secondary:           #ECF5EE - hsl(140, 30%, 94%)
Border:              #E6E0D9 - hsl(30, 20%, 88%)
```

### Typography
- **Headings:** Playfair Display (Serif)
- **Body:** Inter (Sans-serif)
- **Font Sizes:** Responsive using clamp()
  - H1: clamp(2.5rem, 5vw, 4rem)
  - H2: clamp(2rem, 4vw, 3rem)
  - Body: 1rem (16px)

### Spacing System
- **Base Unit:** 0.25rem (4px)
- **Scale:** xs(0.5rem), sm(0.75rem), md(1rem), lg(1.5rem), xl(2rem), 2xl(3rem), 3xl(4rem)

### Border Radius
- **Small:** 0.375rem
- **Medium:** 0.5rem
- **Large:** 0.75rem
- **Full:** 9999px

---

## 1. Homepage Wireframe

### Layout Structure
```
┌─────────────────────────────────────────────────┐
│              NAVIGATION BAR                     │
│  Logo                     Menu Links    Cart(3) │
│  [FreshFeast]  [Home][Menu][About][Support]     │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                 HERO SECTION                    │
│                                                 │
│       Welcome to FreshFeast                     │
│    Organic Food Delivered Fresh to Your Door    │
│                                                 │
│    [Order Now]    [View Menu]                   │
│                                                 │
│  Decorative gradient background with floating   │
│  animated circles                               │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│           POPULAR MEALS SECTION                 │
│                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│  │  Image   │  │  Image   │  │  Image   │     │
│  │          │  │          │  │          │     │
│  ├──────────┤  ├──────────┤  ├──────────┤     │
│  │ Burger   │  │ Salmon   │  │  Salad   │     │
│  │ ⭐ 4.9   │  │ ⭐ 4.8   │  │ ⭐ 4.7   │     │
│  │          │  │          │  │          │     │
│  │ ₵14.99   │  │ ₵22.99   │  │ ₵16.99   │     │
│  │[Add Cart]│  │[Add Cart]│  │[Add Cart]│     │
│  └──────────┘  └──────────┘  └──────────┘     │
│                                                 │
│  Grid continues with 4-6 items...               │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│           HOW IT WORKS SECTION                  │
│                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│  │    1     │  │    2     │  │    3     │     │
│  │  Browse  │  │  Order   │  │ Receive  │     │
│  │          │  │          │  │          │     │
│  │ Explore  │  │ Add to   │  │ Fast     │     │
│  │ our menu │  │ your cart│  │ delivery │     │
│  └──────────┘  └──────────┘  └──────────┘     │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│         WHY CHOOSE US SECTION                   │
│                                                 │
│  ┌───────┐  ┌───────┐  ┌───────┐  ┌───────┐   │
│  │ 🍃    │  │ 🚚    │  │ 👨‍🍳   │  │ ⭐    │   │
│  │Fresh  │  │ Fast  │  │Expert │  │Quality│   │
│  │Organic│  │Delivery│ │ Chefs │  │Service│   │
│  └───────┘  └───────┘  └───────┘  └───────┘   │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                  FOOTER                         │
│                                                 │
│  About Us     Quick Links     Contact Us        │
│  - Our Story  - Menu          - Phone:          │
│  - Mission    - Order         0243521850        │
│  - Values     - Track         - Email:          │
│               - Support       info@freshfeast   │
│                               - Location:       │
│                               KNUST Campus      │
│                                                 │
│  Social Links: [FB][IG][TW]                     │
│                                                 │
│  © 2026 FreshFeast. All rights reserved.        │
└─────────────────────────────────────────────────┘
```

### Key Features
- **Sticky Navigation:** Glassmorphism effect on scroll
- **Hero Section:** Gradient background with animated floating elements
- **Meal Cards:** Hover effects with image zoom and shadow lift
- **Responsive Grid:** 3 columns → 2 columns → 1 column
- **CTA Buttons:** Gradient backgrounds with shine animation

---

## 2. Menu Page Wireframe

### Layout Structure
```
┌─────────────────────────────────────────────────┐
│              NAVIGATION BAR                     │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│              PAGE HEADER                        │
│          Our Delicious Menu                     │
│    Explore our wide variety of organic dishes   │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│           CATEGORY FILTERS                      │
│                                                 │
│  [All] [Starters] [Mains] [Desserts] [Drinks]  │
│  ^^^^                                           │
│  Active filter highlighted with primary color   │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│            MENU ITEMS GRID                      │
│                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│  │  Image   │  │  Image   │  │  Image   │     │
│  │  200px   │  │  200px   │  │  200px   │     │
│  ├──────────┤  ├──────────┤  ├──────────┤     │
│  │Item Name │  │Item Name │  │Item Name │     │
│  │⭐ Rating │  │⭐ Rating │  │⭐ Rating │     │
│  │          │  │          │  │          │     │
│  │Description│  │Description│  │Description│     │
│  │          │  │          │  │          │     │
│  │₵ Price   │  │₵ Price   │  │₵ Price   │     │
│  │[Add Cart]│  │[Add Cart]│  │[Add Cart]│     │
│  └──────────┘  └──────────┘  └──────────┘     │
│                                                 │
│  Grid continues with filtered items...          │
│  Min-max(260px, 1fr) responsive grid           │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                  FOOTER                         │
└─────────────────────────────────────────────────┘
```

### Interactive Elements
- **Filter Tabs:** Smooth transition when switching categories
- **Card Hover:** Image scales up, card lifts with enhanced shadow
- **Add to Cart:** Ripple effect animation from center
- **Dynamic Rendering:** JavaScript filters items by category

---

## 3. Order Page Wireframe

### Layout Structure
```
┌─────────────────────────────────────────────────┐
│              NAVIGATION BAR                     │
└─────────────────────────────────────────────────┘

┌──────────────────────────┬──────────────────────┐
│    MENU SECTION (70%)    │  CART SIDEBAR (30%)  │
│                          │                      │
│  ┌────────────────────┐  │  ┌────────────────┐ │
│  │  Item Image        │  │  │  Your Cart     │ │
│  │                    │  │  │                │ │
│  ├────────────────────┤  │  ├────────────────┤ │
│  │ Item Name          │  │  │ Item 1   ₵14.99│ │
│  │ Description        │  │  │ Qty: [2] [×]   │ │
│  │                    │  │  │                │ │
│  │ [Qty: 1]  ₵Price   │  │  │ Item 2   ₵22.99│ │
│  │    [Add to Cart]   │  │  │ Qty: [1] [×]   │ │
│  └────────────────────┘  │  │                │ │
│                          │  ├────────────────┤ │
│  ┌────────────────────┐  │  │ Subtotal: ₵52  │ │
│  │  Item Image        │  │  │ Tax (10%): ₵5  │ │
│  │                    │  │  │ Total:    ₵57  │ │
│  └────────────────────┘  │  │                │ │
│                          │  │  [Checkout]    │ │
│  Grid continues...       │  └────────────────┘ │
│                          │                      │
└──────────────────────────┴──────────────────────┘

┌─────────────────────────────────────────────────┐
│          CHECKOUT FORM SECTION                  │
│  (Appears after clicking Checkout)              │
│                                                 │
│  Customer Information                           │
│  ┌─────────────────────────────────────┐       │
│  │ Full Name: [___________________]    │       │
│  │ Email:     [___________________]    │       │
│  │ Phone:     [___________________]    │       │
│  │ Address:   [___________________]    │       │
│  │ City:      [___________________]    │       │
│  │                                     │       │
│  │ [Place Order]  [Cancel]             │       │
│  └─────────────────────────────────────┘       │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                  FOOTER                         │
└─────────────────────────────────────────────────┘
```

### Features
- **Sticky Cart Sidebar:** Remains visible while scrolling
- **Real-time Updates:** Cart updates immediately  on add/remove
- **Quantity Controls:** Increment/decrement buttons with validation
- **Form Validation:** Client-side validation with error messages
- **Confirmation Modal:** Displays order confirmation with order ID

---

## 4. Cart Page Wireframe

### Layout Structure  
```
┌─────────────────────────────────────────────────┐
│              NAVIGATION BAR                     │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│              PAGE HEADER                        │
│              Your Shopping Cart                 │
└─────────────────────────────────────────────────┘

┌──────────────────────────┬──────────────────────┐
│    CART ITEMS (65%)      │ ORDER SUMMARY (35%)  │
│                          │                      │
│  ┌────────────────────┐  │  ┌────────────────┐ │
│  │[Img]  Item Name    │  │  │ Order Summary  │ │
│  │       Description  │  │  │                │ │
│  │       ₵14.99       │  │  │ Subtotal: ₵52  │ │
│  │       [-][2][+][×] │  │  │ Delivery: ₵3.99│ │
│  └────────────────────┘  │  │ Tax (10%): ₵5  │ │
│                          │  │ ───────────────│ │
│  ┌────────────────────┐  │  │ Total:   ₵61   │ │
│  │[Img]  Item Name    │  │  │                │ │
│  │       Description  │  │  ├────────────────┤ │
│  │       ₵22.99       │  │  │ Promo Code:    │ │
│  │       [-][1][+][×] │  │  │ [_________]    │ │
│  └────────────────────┘  │  │    [Apply]     │ │
│                          │  │                │ │
│  Continue Shopping →     │  │  [Checkout]    │ │
│                          │  └────────────────┘ │
└──────────────────────────┴──────────────────────┘

┌─────────────────────────────────────────────────┐
│          RECOMMENDED ITEMS                      │
│  You might also like...                         │
│                                                 │
│  [Item Card] [Item Card] [Item Card]            │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                  FOOTER                         │
└─────────────────────────────────────────────────┘
```

### Features
- **Large Item Display:** Bigger images and clear pricing
- **Quantity Controls:** Visual feedback on button press
- **Remove Item:** Confirmation before deletion
- **Promo Code:** "FRESH10" gives 10% discount
- **Empty State:** Message with CTA when cart is empty
- **Persistent Storage:** Cart saved to localStorage

---

## 5. Gallery Page Wireframe

### Layout Structure
```
┌─────────────────────────────────────────────────┐
│              NAVIGATION BAR                     │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│              PAGE HEADER                        │
│              Our Gallery                        │
│       Feast your eyes on our creations          │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│           MASONRY GRID GALLERY                  │
│                                                 │
│  ┌──────┐ ┌────────────┐ ┌──────┐             │
│  │      │ │            │ │      │             │
│  │ Img1 │ │   Img2     │ │ Img3 │             │
│  │      │ │            │ │      │             │
│  └──────┘ └────────────┘ └──────┘             │
│                                                 │
│  ┌────────────┐ ┌──────┐ ┌──────┐             │
│  │            │ │      │ │      │             │
│  │   Img4     │ │ Img5 │ │ Img6 │             │
│  │            │ │      │ │      │             │
│  └────────────┘ └──────┘ └──────┘             │
│                                                 │
│  ┌──────┐ ┌──────┐ ┌────────────┐             │
│  │      │ │      │ │            │             │
│  │ Img7 │ │ Img8 │ │   Img9     │             │
│  │      │ │      │ │            │             │
│  └──────┘ └──────┘ └────────────┘             │
│                                                 │
│  Hover: Image overlay with title                │
│  Click: Opens lightbox modal                    │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│           LIGHTBOX MODAL                        │
│  (Appears on image click)                       │
│                                                 │
│  ┌───────────────────────────────────┐         │
│  │                [×]                │         │
│  │                                   │         │
│  │  [◄]       Full Image       [►]  │         │
│  │                                   │         │
│  │         Image Title               │         │
│  └───────────────────────────────────┘         │
│                                                 │
│  Black transparent overlay behind modal         │
│  Keyboard navigation: Arrow keys, Esc           │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                  FOOTER                         │
└─────────────────────────────────────────────────┘
```

### Interactive Features
- **Hover Effects:** Image zoom with overlay showing title
- **Lightbox:** Full-screen image viewer
- **Navigation:** Previous/Next buttons and keyboard shortcuts
- **Responsive:** Grid adjusts from 3→2→1 columns
- **Smooth Transitions:** Fade and scale animations

---

## 6. Track Order Wireframe

### Layout Structure
```
┌─────────────────────────────────────────────────┐
│              NAVIGATION BAR                     │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│              PAGE HEADER                        │
│              Track Your Order                   │
│       Enter your order ID to track delivery     │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│          TRACKING INPUT SECTION                 │
│                                                 │
│          ┌─────────────────────────┐           │
│          │ Order ID: [__________]  │           │
│          │      [Track Order]      │           │
│          └─────────────────────────┘           │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│         ORDER STATUS TIMELINE                   │
│  (After searching for order)                    │
│                                                 │
│  Order #ORD-2024-001                            │
│  Status: Out for Delivery                       │
│                                                 │
│  ●━━━━━━━ Order Placed      ✓                  │
│    └─ Mar 5, 2026 10:30 AM                     │
│                                                 │
│  ●━━━━━━━ Preparing        ✓                  │
│    └─ Mar 5, 2026 10:45 AM                     │
│                                                 │
│  ●━━━━━━━ Out for Delivery  ← Current          │
│    └─ Mar 5, 2026 11:15 AM                     │
│                                                 │
│  ○━━━━━━━ Delivered                            │
│    └─ Estimated: 12:00 PM                      │
│                                                 │
│  Delivery Person: John Doe                      │
│  Contact: 0243521850                            │
│                                                 │
│  ┌───────────────────────┐                     │
│  │ Estimated Arrival     │                     │
│  │     30 minutes        │                     │
│  │  [View on Map]        │                     │
│  └───────────────────────┘                     │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│         ORDER DETAILS CARD                      │
│                                                 │
│  Delivery Address:                              │
│  KNUST Campus                                   │
│  Phone: 0243521850                              │
│                                                 │
│  ───────────────────                           │
│                                                 │
│  Order Items:                                   │
│  • Classic Smash Burger (x2) ... ₵29.98        │
│  • Grilled Atlantic Salmon (x1) .. ₵22.99      │
│                                                 │
│  Subtotal: ₵52.97                               │
│  Delivery: ₵3.99                                │
│  Total: ₵56.96                                  │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                  FOOTER                         │
└─────────────────────────────────────────────────┘
```

### Features
- **Real-time Status:** Progress indicator with checkmarks
- **Timeline:** Visual representation of order journey
- **Estimated Time:** Dynamic countdown timer
- **Contact Info:** Easy access to delivery person details
- **Responsive:** Stacks vertically on mobile

---

## 7. Support Page Wireframe

### Layout Structure
```
┌─────────────────────────────────────────────────┐
│              NAVIGATION BAR                     │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│              PAGE HEADER                        │
│           Customer Support                      │
│       We're here to help you anytime            │
└─────────────────────────────────────────────────┘

┌──────────────────────────┬──────────────────────┐
│   CONTACT FORM (60%)     │ INFO CARDS (40%)     │
│                          │                      │
│  Get in Touch            │  ┌────────────────┐ │
│  ┌────────────────────┐  │  │ 📞 Quick Call  │ │
│  │ Name: [_________]  │  │  │                │ │
│  │ Email: [________]  │  │  │  0243521850    │ │
│  │ Subject: [______]  │  │  │  Available 24/7│ │
│  │ Category:          │  │  └────────────────┘ │
│  │ [v Dropdown]       │  │                      │
│  │ Message:           │  │  ┌────────────────┐ │
│  │ [_____________]    │  │  │ ✉ Email Us     │ │
│  │ [_____________]    │  │  │                │ │
│  │                    │  │  │ info@          │ │
│  │ [Submit Ticket]    │  │  │ freshfeast.com │ │
│  └────────────────────┘  │  └────────────────┘ │
│                          │                      │
│                          │  ┌────────────────┐ │
│                          │  │ 📍 Find Us     │ │
│                          │  │                │ │
│                          │  │ KNUST Campus   │ │
│                          │  │ [Directions]   │ │
│                          │  └────────────────┘ │
└──────────────────────────┴──────────────────────┘

┌─────────────────────────────────────────────────┐
│              FAQ SECTION                        │
│                                                 │
│  Frequently Asked Questions                     │
│                                                 │
│  ▼ How do I place an order?                    │
│    You can browse our menu and add items...    │
│                                                 │
│  ▸ What is your delivery time?                 │
│                                                 │
│  ▸ Do you offer refunds?                       │
│                                                 │
│  ▸ How can I track my order?                   │
│                                                 │
│  ▸ What payment methods do you accept?         │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│          BUSINESS HOURS                         │
│                                                 │
│  Monday - Friday: 10:00 AM - 10:00 PM          │
│  Saturday - Sunday: 9:00 AM - 11:00 PM         │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                  FOOTER                         │
└─────────────────────────────────────────────────┘
```

### Features
- **Form Validation:** Real-time validation with error messages
- **Ticket System:** Generates unique ticket ID
- **FAQ Accordion:** Expandable/collapsible answers
- **Multi-channel Support:** Phone, email, and form options
- **localStorage:** Saves submitted tickets

---

## 8. Preferences Page Wireframe

### Layout Structure
```
┌─────────────────────────────────────────────────┐
│              NAVIGATION BAR                     │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│              PAGE HEADER                        │
│           Account Preferences                   │
│       Customize your FreshFeast experience      │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│          SETTINGS TABS                          │
│  [Profile] [Notifications] [Delivery] [Privacy] │
│   ^^^^^^                                        │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│          PROFILE TAB CONTENT                    │
│                                                 │
│  Profile Picture                                │
│  ┌──────┐                                       │
│  │      │  [Change Photo]                       │
│  │ IMG  │                                       │
│  └──────┘                                       │
│                                                 │
│  ┌────────────────────────────────────┐        │
│  │ Full Name:  [John Doe         ]   │        │
│  │ Email:      [john@email.com   ]   │        │
│  │ Phone:      [0243521850       ]   │        │
│  │ Birthday:   [Jan 1, 1990      ]   │        │
│  │                                    │        │
│  │ [Save Changes]  [Cancel]           │        │
│  └────────────────────────────────────┘        │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│       NOTIFICATION PREFERENCES                  │
│                                                 │
│  ┌────────────────────────────────────┐        │
│  │ [✓] Email notifications            │        │
│  │ [✓] SMS notifications              │        │
│  │ [✓] Order updates                  │        │
│  │ [ ] Promotional offers             │        │
│  │ [✓] Newsletter                     │        │
│  │                                    │        │
│  │ [Save Preferences]                 │        │
│  └────────────────────────────────────┘        │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│         DELIVERY ADDRESSES                      │
│                                                 │
│  ┌────────────────────────────────────┐        │
│  │ [Default] Home                     │        │
│  │ KNUST Campus                       │        │
│  │ [Edit] [Remove]                    │        │
│  └────────────────────────────────────┘        │
│                                                 │
│  ┌────────────────────────────────────┐        │
│  │ Work                               │        │
│  │ Tech Junction, Kumasi              │        │
│  │ [Edit] [Remove] [Set as Default]   │        │
│  └────────────────────────────────────┘        │
│                                                 │
│  [+ Add New Address]                            │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│         DIETARY PREFERENCES                     │
│                                                 │
│  ┌────────────────────────────────────┐        │
│  │ Dietary Restrictions:              │        │
│  │ [✓] Vegetarian                     │        │
│  │ [ ] Vegan                          │        │
│  │ [ ] Gluten-free                    │        │
│  │ [✓] Nut allergy                    │        │
│  │                                    │        │
│  │ [Save Preferences]                 │        │
│  └────────────────────────────────────┘        │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│         PAYMENT METHODS                         │
│                                                 │
│  ┌────────────────────────────────────┐        │
│  │ [Default] •••• •••• •••• 1234      │        │
│  │ Expires: 12/25                     │        │
│  │ [Edit] [Remove]                    │        │
│  └────────────────────────────────────┘        │
│                                                 │
│  [+ Add Payment Method]                         │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                  FOOTER                         │
└─────────────────────────────────────────────────┘
```

### Features
- **Tab Navigation:** Smooth transitions between sections
- **Form Validation:** Real-time validation
- **Toggle Switches:** Animated checkbox toggles
- **Address Management:** Add, edit, remove addresses
- **localStorage:** Saves all preferences
- **Responsive:** Single column on mobile

---

## 9. About Page Wireframe

### Layout Structure
```
┌─────────────────────────────────────────────────┐
│              NAVIGATION BAR                     │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│              HERO SECTION                       │
│                                                 │
│              About FreshFeast                   │
│     Bringing Fresh Organic Food to Your Table   │
│                                                 │
│  Background: Gradient with overlay image        │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│           OUR STORY SECTION                     │
│                                                 │
│  ┌────────────┐  ┌─────────────────────┐       │
│  │            │  │ Our Story           │       │
│  │   Image    │  │                     │       │
│  │            │  │ Founded in 2024,    │       │
│  │   of       │  │ FreshFeast started  │       │
│  │            │  │ with a simple       │       │
│  │   Team     │  │ mission: to deliver │       │
│  │            │  │ fresh, organic food │       │
│  │            │  │ to health-conscious │       │
│  └────────────┘  │ individuals...      │       │
│                  │                     │       │
│                  │ [Learn More]        │       │
│                  └─────────────────────┘       │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│           MISSION & VISION                      │
│                                                 │
│  ┌────────────────┐  ┌────────────────┐        │
│  │ 🎯 Our Mission │  │ 👁 Our Vision  │        │
│  │                │  │                │        │
│  │ To provide     │  │ To be the      │        │
│  │ fresh, organic │  │ leading...     │        │
│  │ meals...       │  │                │        │
│  └────────────────┘  └────────────────┘        │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│           CORE VALUES                           │
│                                                 │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐       │
│  │ 🌱   │  │ 💚   │  │ ⭐   │  │ 🤝   │       │
│  │Fresh │  │Health│  │Quality│  │Trust │       │
│  └──────┘  └──────┘  └──────┘  └──────┘       │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│           TEAM SECTION                          │
│                                                 │
│  Meet Our Team                                  │
│                                                 │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐       │
│  │Photo │  │Photo │  │Photo │  │Photo │       │
│  │      │  │      │  │      │  │      │       │
│  │Chef  │  │Chef  │  │Chef  │  │Chef  │       │
│  │John  │  │Jane  │  │Mike  │  │Sara  │       │
│  └──────┘  └──────┘  └──────┘  └──────┘       │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│           STATISTICS                            │
│                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │  10,000+ │ │   500+   │ │   98%    │       │
│  │  Orders  │ │   Menu   │ │   Happy  │       │
│  │ Delivered│ │   Items  │ │Customers │       │
│  └──────────┘ └──────────┘ └──────────┘       │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                  FOOTER                         │
└─────────────────────────────────────────────────┘
```

### Features
- **Hero with Parallax:** Background image with parallax effect
- **Text & Image Sections:** Alternating layout for visual interest
- **Animated Counters:** Numbers count up on scroll
- **Team Cards:** Hover effects with social media links
- **Responsive:** Stacks vertically on mobile

---

## 10. Responsive Layouts

### Breakpoints
```
Mobile:     max-width: 480px
Tablet:     max-width: 768px
Desktop:    > 768px
```

### Mobile Layout (≤480px)
```
┌─────────────────┐
│   NAVIGATION    │
│  Logo    [☰]    │
└─────────────────┘

┌─────────────────┐
│                 │
│  Hero Section   │
│  (Full Width)   │
│                 │
└─────────────────┘

┌─────────────────┐
│   Meal Card     │
│   (Full Width)  │
└─────────────────┘
┌─────────────────┐
│   Meal Card     │
└─────────────────┘
┌─────────────────┐
│   Meal Card     │
└─────────────────┘

┌─────────────────┐
│     Footer      │
│  (Stacked)      │
└─────────────────┘
```

### Tablet Layout (481px-768px)
```
┌───────────────────────────┐
│      NAVIGATION           │
│  Logo   Menu Links  Cart  │
└───────────────────────────┘

┌───────────────────────────┐
│     Hero Section          │
└───────────────────────────┘

┌─────────────┐┌────────────┐
│  Meal Card  ││ Meal Card  │
└─────────────┘└────────────┘
┌─────────────┐┌────────────┐
│  Meal Card  ││ Meal Card  │
└─────────────┘└────────────┘

┌───────────────────────────┐
│        Footer             │
│    (2 Columns)            │
└───────────────────────────┘
```

### Desktop Layout (>768px)
```
┌─────────────────────────────────────┐
│          NAVIGATION                 │
│  Logo    Menu Links        Cart(3)  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│         Hero Section                │
└─────────────────────────────────────┘

┌───────┐┌───────┐┌───────┐┌───────┐
│ Meal  ││ Meal  ││ Meal  ││ Meal  │
│ Card  ││ Card  ││ Card  ││ Card  │
└───────┘└───────┘└───────┘└───────┘

┌─────────────────────────────────────┐
│             Footer                  │
│      (4 Columns)                    │
└─────────────────────────────────────┘
```

### Mobile Menu
```
┌─────────────────┐
│  Logo      [×]  │  ← Close button
├─────────────────┤
│                 │
│    Home         │
│    Menu         │
│    Gallery      │
│    About        │
│    Order        │
│    Support      │
│    Track        │
│    Cart (3)     │
│                 │
└─────────────────┘

Hamburger Animation:
[☰] → [×]
```

---

## Design Patterns & Interactions

### 1. Button States
```
Default:   Solid color, subtle shadow
Hover:     Lift effect (-2px), enhanced shadow, gradient shift
Active:    Pressed down (+1px), reduced shadow
Disabled:  50% opacity, cursor: not-allowed
```

### 2. Card Animations
```
Hover:
- Image: scale(1.1)
- Card: translateY(-8px) scale(1.02)
- Shadow: Intensifies
- Background: Gradient overlay fades in
```

### 3. Form Validation
```
Valid Input:   Green border, checkmark icon
Invalid:       Red border, error message below
Focus:         Primary color border, glow effect
```

### 4. Loading States
```
Skeleton Screens: Pulsing gray blocks
Spinners: Circular gradient animation
Progress Bars: Smooth width transition
```

### 5. Transitions
```
Standard: 0.3s ease
Fast:     0.15s ease-out
Slow:     0.5s ease-in-out
```

---

## Accessibility Features

### Color Contrast
- All text meets WCAG AA standards (4.5:1 ratio)
- Primary orange #F97316 on white: 3.8:1 (Large text only)
- Foreground #271D14 on white: 14.2:1 ✓

### Keyboard Navigation
- Tab order follows logical flow
- Focus indicators visible
- Skip to main content link
- All interactive elements keyboard accessible

### Screen Reader Support
- Semantic HTML5 elements
- ARIA labels on icons
- Alt text on images
- Form labels properly associated

### Touch Targets
- Minimum 44x44 pixels
- Adequate spacing between buttons
- Swipe gestures for gallery navigation

---

## Performance Optimizations

### Image Optimization
- Lazy loading below fold
- Responsive images with srcset
- WebP format with fallbacks
- Unsplash CDN for fast delivery

### CSS
- Critical CSS inlined
- Non-critical CSS deferred
- CSS custom properties for theming
- Minified and compressed

### JavaScript
- Vanilla JS (no framework overhead)
- Event delegation
- LocalStorage for persistence
- Debounced scroll handlers

---

## Print Styling

### Page Break Control
```
Section breaks: page-break-after: always
Keep together: page-break-inside: avoid
```

### Print-specific Styles
- Remove navigation and footer
- Black and white friendly
- Expand collapsed sections
- Show URLs for links

---

## Browser Support

### Minimum Requirements
- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Mobile Safari: iOS 12+
- Chrome Mobile: Last 2 versions

### Graceful Degradation
- CSS Grid with flexbox fallback
- Backdrop-filter with solid color fallback
- CSS animations optional (prefers-reduced-motion)

---

## Future Enhancements

### Planned Features
1. Dark mode toggle
2. PWA capabilities
3. Real-time order tracking map
4. Voice search
5. AR menu preview
6. Multi-language support
7. Chat bot support
8. Social media integration
9. Loyalty points system
10. Recipe sharing feature

---

## Conclusion

This wireframe documentation provides a comprehensive overview of the FreshFeast platform's user interface and experience design. All wireframes follow modern web design principles with focus on:

- **User-Centric Design:** Intuitive navigation and clear CTAs
- **Responsive Layout:** Optimized for all devices
- **Visual Hierarchy:** Proper use of typography and spacing
- **Performance:** Fast loading and smooth interactions
- **Accessibility:** WCAG compliant
- **Scalability:** Modular design system

For questions or clarifications, contact:
- Email: info@freshfeast.com
- Phone: 0243521850
- Location: KNUST Campus

---

**Document Version:** 1.0  
**Last Updated:** March 5, 2026  
**Created By:** FreshFeast Development Team
