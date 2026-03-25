# FreshFeast Restaurant Website

A modern, responsive restaurant website built with HTML, CSS, and vanilla JavaScript. Features a clean design with an orange and sage green color scheme, complete food delivery platform with online ordering, user preferences, support system, and order tracking.

## 🎨 Design Specifications

### Color Palette
- **Primary (Orange)**: `hsl(25, 95%, 53%)` - #F97316
- **Accent (Sage Green)**: `hsl(140, 35%, 45%)` - #4A9964
- **Background**: `hsl(30, 50%, 98%)` - #FDFBF8
- **Foreground**: `hsl(25, 30%, 12%)` - #271D14
- **Muted**: `hsl(30, 20%, 94%)` - #F3F0ED
- **Secondary**: `hsl(140, 30%, 94%)` - #ECF5EE
- **Border**: `hsl(30, 20%, 88%)` - #E6E0D9

### Typography
- **Primary Font**: Inter (body text)
- **Heading Font**: Playfair Display (headings)

## 📁 Project Structure

```
FreshFeast/
│
├── index.html          # Home page with hero section and popular meals
├── menu.html           # Full menu with category filtering
├── gallery.html        # Image gallery with lightbox
├── order.html          # Order page with cart sidebar
├── cart.html           # Dedicated cart page
├── support.html        # Customer support and contact page
├── preferences.html    # User settings and preferences
├── about.html          # About us page with company info
├── track-order.html    # Order tracking with real-time status
│
├── css/
│   ├── variables.css    # CSS custom properties (colors, spacing, etc.)
│   ├── styles.css       # Global styles and base components
│   ├── menu.css         # Menu page specific styles
│   ├── gallery.css      # Gallery page specific styles
│   ├── order.css        # Order page specific styles
│   ├── cart.css         # Cart page specific styles
│   ├── support.css      # Support page specific styles
│   ├── preferences.css  # Preferences page specific styles
│   └── track-order.css  # Track order page specific styles
│
├── js/
│   ├── script.js       # Main JavaScript file with all functionality
│   └── data.js         # Menu and gallery data
│
└── images/             # Image assets (to be added)
```

## ✨ Features

### 1. Home Page
- Hero section with call-to-action buttons
- Popular meals showcase (dynamically loaded)
- "How It Works" section with step-by-step guide
- Why Choose Us features grid
- Responsive navigation with mobile menu

### 2. Menu Page
- Category filtering (All, Starters, Main Course, Desserts, Drinks)
- Grid layout of menu items
- Item cards with images, ratings, prices, and descriptions
- "Add to Cart" functionality
- Responsive design

### 3. Gallery Page
- Masonry-style image grid
- Lightbox modal for full-size image viewing
- Image navigation (prev/next)
- Keyboard shortcuts (Arrow keys, Escape)
- Hover effects

### 4. Order Page
- Browse all menu items
- Quantity selector for each item
- Live cart sidebar
- Order summary with subtotal and tax calculation
- Customer information form
- Order confirmation modal

### 5. Cart Page
- Dedicated cart view with larger item display
- Quantity adjustment controls
- Item removal functionality
- Order summary sidebar
- Promo code input (use code: FRESH10)
- Delivery fee calculation
- Checkout button

### 6. Support Page
- Contact form with category selection
- FAQ section with common questions
- Contact information cards (Phone, Email, Location)
- Business hours display
- Ticket ID generation on form submission
- Support ticket storage in localStorage

### 7. Preferences Page
- Six settings sections (Profile, Dietary, Notifications, Delivery, Payment, Privacy)
- Profile management (name, email, phone)
- Dietary preferences selection (Vegetarian, Vegan, Gluten-Free, etc.)
- Notification toggles (Order updates, Promotions, Newsletter)
- Saved address management
- Payment method management
- Privacy settings with account deletion
- All preferences saved to localStorage

### 8. About Page
- Company story and mission
- Statistics showcase (Customers, Dishes, Cities)
- Core values display
- Team member profiles
- Call-to-action section

### 9. Track Order Page
- Order number input form
- Real-time order status timeline
- Visual progress indicators
- Status badges (Placed, Confirmed, Preparing, Out for Delivery, Delivered)
- Estimated delivery time
- Order details display
- Smooth scroll animations

### 10. Shopping Cart System
- Persistent cart using localStorage
- Real-time cart badge counter
- Add/remove items across all pages
- Quantity management
- Total price calculation
- Toast notifications
- Cart synchronization across pages

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Local web server (Live Server, Python http.server, etc.)

### Installation

1. **Clone or extract the project**
   ```bash
   cd FreshFeast
   ```

2. **Add your images** (optional)
   - Place food images in the `images/` folder
   - Update image paths in `js/script.js` if needed
   - Current implementation uses Unsplash placeholder images

3. **Open the website**
   - **Option A**: Double-click `index.html` to open in browser
   - **Option B**: Use Live Server (VSCode extension)
   - **Option C**: Start a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # PHP
     php -S localhost:8000
     ```
   - Then navigate to `http://localhost:8000`

## 🎯 Usage

### For Users
1. **Browse Menu**: View all available dishes with prices and descriptions
2. **Add to Cart**: Click "Add to Cart" on any item
3. **View Cart**: Click the cart icon in navigation to see your items
4. **Adjust Quantities**: Use +/- buttons in cart to modify quantities
5. **Apply Promo Code**: Use code "FRESH10" for 10% discount on cart page
6. **Checkout**: Fill in delivery information and submit order
7. **Track Order**: Enter your order number on the Track Order page to see status
8. **Get Support**: Use the Support page to contact us with questions
9. **Set Preferences**: Customize your experience in the Settings page
10. **Learn About Us**: Visit the About page to learn more about FreshFeast

### For Developers

#### Adding Menu Items
Edit the `menuData` array in `js/script.js`:
```javascript
{
  id: 14,
  name: 'Your Dish Name',
  category: 'mains', // mains, starters, desserts, drinks
  price: 19.99,
  rating: 4.8,
  description: 'Description of your dish',
  image: 'path/to/image.jpg',
  popular: false, // true to show on home page
  badge: 'New' // optional badge text
}
```

#### Adding Gallery Images
Edit the `galleryData` array in `js/script.js`:
```javascript
{
  id: 9,
  image: 'path/to/image.jpg',
  title: 'Image Title'
}
```

#### Customizing Colors
Edit `css/variables.css` to change the color scheme:
```css
:root {
  --primary: hsl(25, 95%, 53%);
  --accent: hsl(140, 35%, 45%);
  /* ... other colors */
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1280px and above
- **Tablet**: 768px - 1279px
- **Mobile**: Below 768px

Mobile features:
- Hamburger menu navigation
- Stacked layouts
- Touch-friendly buttons
- Optimized image sizes

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid, animations
- **JavaScript (ES6+)**: Classes, modules, arrow functions, template literals
- **LocalStorage**: Cart persistence
- **Google Fonts**: Inter and Playfair Display

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance Considerations
- External images loaded via CDN (Unsplash)
- CSS organized by page for better maintainability
- Minimal JavaScript - vanilla JS only, no frameworks
- LocalStorage for cart state management

## 📝 Team Roles & Responsibilities

Based on the project proposal:
- **Project Manager**: Team coordination, milestone tracking
- **Front-End Developers**: HTML structure, CSS styling, page layouts
- **JavaScript Developer**: Interactivity, cart system, validations
- **UI/UX Designers**: Wireframes, visual design, user flow
- **QA Engineer**: Testing, bug tracking, responsiveness
- **Documentation Lead**: Project documentation
- **Deployment Lead**: Version control, deployment

## 🎨 Customization Guide

### Changing Restaurant Name
1. Update `<title>` tags in all HTML files
2. Change `.logo` text in navigation sections
3. Update footer branding

### Modifying Delivery Fee
In `js/script.js`, find:
```javascript
const deliveryFee = 3.99;
```

### Adjusting Tax Rate
In `js/script.js`, find:
```javascript
const tax = subtotal * 0.1; // 10% tax
```

## 🐛 Known Issues & Future Enhancements

### Future Enhancements
- [ ] Backend integration for real orders
- [ ] Payment gateway integration
- [ ] User authentication and order history
- [ ] Restaurant location map
- [ ] Real-time order tracking
- [ ] Email notifications
- [ ] Reviews and ratings system
- [ ] Favorites/wishlist feature
- [ ] Multiple delivery addresses

## 📄 License

This project was created as part of a web-based concepts project (January 2026).

## 📞 Contact

For questions or support:
- Email: info@freshfeast.com
- Phone: 0243521850
- Location: KNUST Campus

---

**Project Date**: January 29, 2026  
**Project Name**: FreshFeast Organic Food Ordering Platform  
**Built with**: ❤️ HTML, CSS, and JavaScript
