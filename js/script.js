// ===================================
// FreshFeast Restaurant Website
// Main JavaScript File
// ===================================

// ===================================
// Menu Data
// ===================================

const menuData = [
  {
    id: 1,
    name: 'Classic Smash Burger',
    category: 'mains',
    price: 85.00,
    rating: 4.9,
    description: 'Golden patties with premium chicken, freshly tossed salads and seasoning',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
    popular: true
  },
  {
    id: 2,
    name: 'Grilled Atlantic Salmon',
    category: 'mains',
    price: 145.00,
    rating: 4.8,
    description: 'Fresh Salmon with fish seasonings and herbs, served with fresh vegetables',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500',
    popular: true
  },
  {
    id: 3,
    name: 'Garden Fresh Bowl',
    category: 'mains',
    price: 95.00,
    rating: 4.7,
    description: 'Mixed greens, cherry tomatoes, avocado, and balsamic vinaigrette',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
    popular: true,
    badge: 'Healthy Choice'
  },
  {
    id: 4,
    name: 'Truffle Carbonara',
    category: 'mains',
    price: 120.00,
    rating: 4.9,
    description: 'Creamy pasta with pancetta, parmesan, and black truffle',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500',
    popular: true
  },
  {
    id: 5,
    name: 'Margherita Pizza',
    category: 'mains',
    price: 95.00,
    rating: 4.6,
    description: 'Fresh mozzarella, tomato sauce, basil, and olive oil',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500',
    popular: false
  },
  {
    id: 6,
    name: 'Grilled Chicken Wrap',
    category: 'mains',
    price: 75.00,
    rating: 4.5,
    description: 'Grilled chicken, lettuce, tomatoes, and special sauce',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500',
    popular: false
  },
  {
    id: 7,
    name: 'Caesar Salad',
    category: 'starters',
    price: 45.00,
    rating: 4.4,
    description: 'Romaine lettuce, parmesan, croutons, and Caesar dressing',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500',
    popular: false
  },
  {
    id: 8,
    name: 'Chicken Wings',
    category: 'starters',
    price: 55.00,
    rating: 4.7,
    description: 'Crispy wings with your choice of sauce',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500',
    popular: false
  },
  {
    id: 9,
    name: 'Loaded Nachos',
    category: 'starters',
    price: 50.00,
    rating: 4.6,
    description: 'Tortilla chips with cheese, jalapeños, and toppings',
    image: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=500',
    popular: false
  },
  {
    id: 10,
    name: 'Chocolate Lava Cake',
    category: 'desserts',
    price: 45.00,
    rating: 4.9,
    description: 'Warm chocolate cake with molten center',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500',
    popular: false
  },
  {
    id: 11,
    name: 'Tiramisu',
    category: 'desserts',
    price: 50.00,
    rating: 4.8,
    description: 'Classic Italian dessert with coffee and mascarpone',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500',
    popular: false
  },
  {
    id: 12,
    name: 'Fresh Lemonade',
    category: 'drinks',
    price: 30.00,
    rating: 4.5,
    description: 'Freshly squeezed lemonade with mint',
    image: 'images/freshlemonade.png',
    popular: false
  },
  {
    id: 13,
    name: 'Iced Coffee',
    category: 'drinks',
    price: 35.00,
    rating: 4.6,
    description: 'Cold brew coffee with ice and milk',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=500',
    popular: false
  }
];

// Gallery Data
const galleryData = [
  { id: 1, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800', title: 'Delicious Burger' },
  { id: 2, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800', title: 'Fresh Salad' },
  { id: 3, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800', title: 'Grilled Salmon' },
  { id: 4, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800', title: 'Pasta Dish' },
  { id: 5, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800', title: 'Pizza Slice' },
  { id: 6, image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800', title: 'Dessert' },
  { id: 7, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800', title: 'Restaurant Interior' },
  { id: 8, image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800', title: 'Coffee' }
];

// ===================================
// Cart Management
// ===================================

class CartManager {
  constructor() {
    this.cart = this.loadCart();
    this.updateCartBadge();
  }

  loadCart() {
    const savedCart = localStorage.getItem('freshfeastCart');
    return savedCart ? JSON.parse(savedCart) : [];
  }

  saveCart() {
    localStorage.setItem('freshfeastCart', JSON.stringify(this.cart));
    this.updateCartBadge();
  }

  addItem(item, quantity = 1) {
    const existingItem = this.cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({ ...item, quantity });
    }
    
    this.saveCart();
    this.showNotification(`${item.name} added to cart!`);
  }

  removeItem(itemId) {
    this.cart = this.cart.filter(item => item.id !== itemId);
    this.saveCart();
  }

  updateQuantity(itemId, quantity) {
    const item = this.cart.find(cartItem => cartItem.id === itemId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.saveCart();
    }
  }

  getCart() {
    return this.cart;
  }

  getTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getItemCount() {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    if (badge) {
      const count = this.getItemCount();
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
  }

  showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      background-color: var(--accent);
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 10000;
      animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  }
}

// Initialize cart manager
const cartManager = new CartManager();

// ===================================
// Mobile Menu Toggle
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      
      // Animate hamburger icon
      const spans = this.querySelectorAll('span');
      spans.forEach((span, index) => {
        span.style.transform = navMenu.classList.contains('active')
          ? index === 0 ? 'rotate(45deg) translate(5px, 5px)'
            : index === 1 ? 'opacity(0)'
            : 'rotate(-45deg) translate(5px, -5px)'
          : 'none';
      });
    });
  }

  // Initialize page-specific functionality
  initializePage();
});

// ===================================
// Page Initialization
// ===================================

function initializePage() {
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

  switch(page) {
    case 'index.html':
    case '':
      initializeHomePage();
      break;
    case 'menu.html':
      initializeMenuPage();
      break;
    case 'gallery.html':
      initializeGalleryPage();
      break;
    case 'order.html':
      initializeOrderPage();
      break;
    case 'cart.html':
      initializeCartPage();
      break;
    case 'support.html':
      initializeSupportPage();
      break;
    case 'preferences.html':
      initializePreferencesPage();
      break;
    case 'track-order.html':
      initializeTrackOrderPage();
      break;
  }
}

// ===================================
// Home Page
// ===================================

function initializeHomePage() {
  loadPopularMeals();
}

function loadPopularMeals() {
  const popularMealsContainer = document.getElementById('popularMeals');
  if (!popularMealsContainer) return;

  const popularMeals = menuData.filter(item => item.popular);
  
  popularMealsContainer.innerHTML = popularMeals.map(meal => `
    <div class="meal-card">
      <img src="${meal.image}" alt="${meal.name}" class="meal-card-image" onerror="this.src='https://via.placeholder.com/300x200?text=${encodeURIComponent(meal.name)}'">
      <div class="meal-card-content">
        <div class="meal-card-header">
          <h3 class="meal-card-title">${meal.name}</h3>
          <span class="meal-card-rating">⭐ ${meal.rating}</span>
        </div>
        <p class="meal-card-description">${meal.description}</p>
        <div class="meal-card-footer">
          <span class="meal-card-price">₵${meal.price.toFixed(2)}</span>
          <button class="meal-card-add" onclick="addToCartFromHome(${meal.id})"><span>Add to Cart</span></button>
        </div>
      </div>
    </div>
  `).join('');
}

function addToCartFromHome(itemId) {
  const item = menuData.find(m => m.id === itemId);
  if (item) {
    cartManager.addItem(item);
  }
}

// ===================================
// Menu Page
// ===================================

function initializeMenuPage() {
  let currentCategory = 'all';
  
  loadMenuItems(currentCategory);
  
  // Filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      currentCategory = this.dataset.category;
      loadMenuItems(currentCategory);
    });
  });
}

function loadMenuItems(category = 'all') {
  const menuGrid = document.getElementById('menuGrid');
  if (!menuGrid) return;

  const filteredItems = category === 'all' 
    ? menuData 
    : menuData.filter(item => item.category === category);

  menuGrid.innerHTML = filteredItems.map(item => `
    <div class="menu-item">
      <div style="position: relative;">
        <img src="${item.image}" alt="${item.name}" class="menu-item-image" onerror="this.src='https://via.placeholder.com/300x200?text=${encodeURIComponent(item.name)}'">
        ${item.badge ? `<span class="menu-item-badge">${item.badge}</span>` : ''}
      </div>
      <div class="menu-item-content">
        <div class="menu-item-header">
          <h3 class="menu-item-title">${item.name}</h3>
          <span class="menu-item-rating">⭐ ${item.rating}</span>
        </div>
        <p class="menu-item-description">${item.description}</p>
        <div class="menu-item-footer">
          <span class="menu-item-price">₵${item.price.toFixed(2)}</span>
          <button class="menu-item-btn" onclick="addToCartFromMenu(${item.id})"><span>Add to Cart</span></button>
        </div>
      </div>
    </div>
  `).join('');
}

function addToCartFromMenu(itemId) {
  const item = menuData.find(m => m.id === itemId);
  if (item) {
    cartManager.addItem(item);
  }
}

// ===================================
// Gallery Page
// ===================================

function initializeGalleryPage() {
  loadGalleryImages();
  setupLightbox();
}

function loadGalleryImages() {
  const galleryGrid = document.getElementById('galleryGrid');
  if (!galleryGrid) return;

  galleryGrid.innerHTML = galleryData.map((item, index) => `
    <div class="gallery-item" onclick="openLightbox(${index})">
      <img src="${item.image}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/400?text=Gallery+Image'">
      <div class="gallery-item-overlay">
        <h3 class="gallery-item-title">${item.title}</h3>
      </div>
    </div>
  `).join('');
}

let currentLightboxIndex = 0;

function openLightbox(index) {
  currentLightboxIndex = index;
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  
  if (lightbox && lightboxImg && lightboxCaption) {
    const item = galleryData[index];
    lightboxImg.src = item.image;
    lightboxCaption.textContent = item.title;
    lightbox.classList.add('active');
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
  }
}

function nextImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % galleryData.length;
  openLightbox(currentLightboxIndex);
}

function prevImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + galleryData.length) % galleryData.length;
  openLightbox(currentLightboxIndex);
}

function setupLightbox() {
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightbox = document.getElementById('lightbox');

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);
  if (lightboxNext) lightboxNext.addEventListener('click', nextImage);
  
  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });
}

// ===================================
// Order Page
// ===================================

function initializeOrderPage() {
  loadOrderMenuItems();
  renderOrderCart();
  setupOrderForm();
}

function loadOrderMenuItems() {
  const orderMenuGrid = document.getElementById('orderMenuGrid');
  if (!orderMenuGrid) return;

  orderMenuGrid.innerHTML = menuData.map(item => `
    <div class="order-menu-item">
      <img src="${item.image}" alt="${item.name}" class="order-menu-item-image" onerror="this.src='https://via.placeholder.com/100?text=Food'">
      <div class="order-menu-item-details">
        <div class="order-menu-item-header">
          <h3 class="order-menu-item-title">${item.name}</h3>
          <span class="order-menu-item-price">₵${item.price.toFixed(2)}</span>
        </div>
        <p class="order-menu-item-description">${item.description}</p>
        <div class="order-menu-item-actions">
          <div class="quantity-selector" id="qty-selector-${item.id}">
            <button class="quantity-btn" onclick="updateOrderQuantity(${item.id}, -1)">-</button>
            <span class="quantity-value" id="qty-value-${item.id}">1</span>
            <button class="quantity-btn" onclick="updateOrderQuantity(${item.id}, 1)">+</button>
          </div>
          <button class="add-to-cart-btn" onclick="addToCartFromOrder(${item.id})"><span>Add to Cart</span></button>
        </div>
      </div>
    </div>
  `).join('');
}

let orderQuantities = {};

function updateOrderQuantity(itemId, change) {
  if (!orderQuantities[itemId]) orderQuantities[itemId] = 1;
  orderQuantities[itemId] = Math.max(1, orderQuantities[itemId] + change);
  
  const qtyValue = document.getElementById(`qty-value-${itemId}`);
  if (qtyValue) {
    qtyValue.textContent = orderQuantities[itemId];
  }
}

function addToCartFromOrder(itemId) {
  const item = menuData.find(m => m.id === itemId);
  const quantity = orderQuantities[itemId] || 1;
  
  if (item) {
    cartManager.addItem(item, quantity);
    orderQuantities[itemId] = 1; // Reset quantity
    const qtyValue = document.getElementById(`qty-value-${itemId}`);
    if (qtyValue) qtyValue.textContent = '1';
    renderOrderCart();
  }
}

function renderOrderCart() {
  const cartItems = document.getElementById('cartItems');
  const cartSummary = document.getElementById('cartSummary');
  const orderForm = document.getElementById('orderForm');
  
  if (!cartItems) return;

  const cart = cartManager.getCart();

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty. Add items to get started!</p>';
    if (cartSummary) cartSummary.style.display = 'none';
    if (orderForm) orderForm.style.display = 'none';
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/60?text=Food'">
      <div class="cart-item-details">
        <div class="cart-item-header">
          <h4 class="cart-item-title">${item.name}</h4>
          <button class="cart-item-remove" onclick="removeFromOrderCart(${item.id})" aria-label="Remove item"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        <p class="cart-item-price">₵${item.price.toFixed(2)}</p>
        <div class="cart-item-quantity">
          <button onclick="updateCartItemQuantity(${item.id}, ${item.quantity - 1})">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateCartItemQuantity(${item.id}, ${item.quantity + 1})">+</button>
        </div>
      </div>
    </div>
  `).join('');

  const subtotal = cartManager.getTotal();
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  if (cartSummary) {
    cartSummary.style.display = 'block';
    document.getElementById('cartSubtotal').textContent = `₵${subtotal.toFixed(2)}`;
    document.getElementById('cartTax').textContent = `₵${tax.toFixed(2)}`;
    document.getElementById('cartTotal').textContent = `₵${total.toFixed(2)}`;
  }

  if (orderForm) {
    orderForm.style.display = 'block';
  }
}

function removeFromOrderCart(itemId) {
  cartManager.removeItem(itemId);
  renderOrderCart();
}

function updateCartItemQuantity(itemId, newQuantity) {
  if (newQuantity < 1) {
    cartManager.removeItem(itemId);
  } else {
    cartManager.updateQuantity(itemId, newQuantity);
  }
  renderOrderCart();
}

function setupOrderForm() {
  const orderForm = document.getElementById('orderForm');
  if (!orderForm) return;

  orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('customerName').value,
      phone: document.getElementById('customerPhone').value,
      email: document.getElementById('customerEmail').value,
      address: document.getElementById('deliveryAddress').value,
      instructions: document.getElementById('specialInstructions').value,
      cart: cartManager.getCart(),
      total: cartManager.getTotal()
    };

    // Generate order ID
    const orderId = 'ORD-' + Date.now().toString().slice(-8);
    
    // Show confirmation modal
    document.getElementById('orderIdDisplay').textContent = orderId;
    document.getElementById('orderConfirmModal').classList.add('active');

    // Clear cart and form
    cartManager.clearCart();
    orderForm.reset();
    renderOrderCart();

    console.log('Order submitted:', formData);
  });

  // Modal close button
  const closeModalBtn = document.getElementById('closeModalBtn');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', function() {
      document.getElementById('orderConfirmModal').classList.remove('active');
    });
  }
}

// ===================================
// Cart Page
// ===================================

function initializeCartPage() {
  renderCartPage();
  setupCartPageActions();
}

function renderCartPage() {
  const cartItemsList = document.getElementById('cartItemsList');
  const emptyCartMessage = document.getElementById('emptyCartMessage');
  const orderSummaryCard = document.getElementById('orderSummaryCard');
  
  if (!cartItemsList) return;

  const cart = cartManager.getCart();

  if (cart.length === 0) {
    if (emptyCartMessage) emptyCartMessage.style.display = 'block';
    if (orderSummaryCard) orderSummaryCard.style.display = 'none';
    cartItemsList.style.display = 'none';
    return;
  }

  if (emptyCartMessage) emptyCartMessage.style.display = 'none';
  if (orderSummaryCard) orderSummaryCard.style.display = 'block';
  cartItemsList.style.display = 'block';

  cartItemsList.innerHTML = cart.map(item => `
    <div class="cart-page-item">
      <img src="${item.image}" alt="${item.name}" class="cart-page-item-image" onerror="this.src='https://via.placeholder.com/100?text=Food'">
      <div class="cart-page-item-info">
        <h3 class="cart-page-item-name">${item.name}</h3>
        <p class="cart-page-item-price">₵${item.price.toFixed(2)}</p>
      </div>
      <div class="cart-page-item-controls">
        <div class="cart-page-quantity">
          <button onclick="updateCartPageQuantity(${item.id}, ${item.quantity - 1})">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateCartPageQuantity(${item.id}, ${item.quantity + 1})">+</button>
        </div>
        <button class="cart-page-remove" onclick="removeFromCartPage(${item.id})" aria-label="Remove item"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    </div>
  `).join('');

  updateCartSummary();
}

function updateCartSummary() {
  const subtotal = cartManager.getTotal();
  const deliveryFee = 15.00; // Realistic delivery fee for KNUST campus area
  const total = subtotal + deliveryFee;

  const summarySubtotal = document.getElementById('summarySubtotal');
  const summaryDelivery = document.getElementById('summaryDelivery');
  const summaryTotal = document.getElementById('summaryTotal');

  if (summarySubtotal) summarySubtotal.textContent = `₵${subtotal.toFixed(2)}`;
  if (summaryDelivery) summaryDelivery.textContent = `₵${deliveryFee.toFixed(2)}`;
  if (summaryTotal) summaryTotal.textContent = `₵${total.toFixed(2)}`;
}

function updateCartPageQuantity(itemId, newQuantity) {
  if (newQuantity < 1) {
    cartManager.removeItem(itemId);
  } else {
    cartManager.updateQuantity(itemId, newQuantity);
  }
  renderCartPage();
}

function removeFromCartPage(itemId) {
  cartManager.removeItem(itemId);
  renderCartPage();
}

function setupCartPageActions() {
  const checkoutBtn = document.getElementById('checkoutBtn');
  const applyPromoBtn = document.getElementById('applyPromoBtn');

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function() {
      if (cartManager.getItemCount() === 0) {
        alert('Your cart is empty!');
        return;
      }
      // Redirect to order page or checkout
      window.location.href = 'order.html';
    });
  }

  if (applyPromoBtn) {
    applyPromoBtn.addEventListener('click', function() {
      const promoInput = document.getElementById('promoCodeInput');
      const code = promoInput.value.trim().toUpperCase();
      
      if (code === 'FRESH10') {
        alert('Promo code applied! 10% discount');
        // Apply discount logic here
      } else if (code) {
        alert('Invalid promo code');
      }
    });
  }
}

// ===================================
// Support Page
// ===================================

function initializeSupportPage() {
  const supportForm = document.getElementById('supportForm');
  
  if (supportForm) {
    supportForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const category = document.getElementById('category').value;
      const message = document.getElementById('message').value;
      
      // Generate ticket ID
      const ticketId = 'FS-' + Date.now().toString().slice(-8);
      
      // Store support ticket
      const tickets = JSON.parse(localStorage.getItem('freshfeast_support_tickets') || '[]');
      tickets.push({
        id: ticketId,
        name,
        email,
        category,
        message,
        status: 'Open',
        date: new Date().toISOString()
      });
      localStorage.setItem('freshfeast_support_tickets', JSON.stringify(tickets));
      
      // Show success message
      alert(`Thank you for contacting us! Your ticket ID is ${ticketId}. We'll get back to you within 24 hours.`);
      supportForm.reset();
    });
  }
}

// ===================================
// Preferences Page
// ===================================

function initializePreferencesPage() {
  // Load saved preferences
  loadPreferences();
  
  // Settings navigation
  const settingsNav = document.querySelectorAll('.settings-nav a');
  const settingsSections = document.querySelectorAll('.settings-section');
  
  settingsNav.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      
      // Update active nav
      settingsNav.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
      
      // Show target section
      settingsSections.forEach(section => section.classList.remove('active'));
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
      }
    });
  });
  
  // Save profile
  const saveProfileBtn = document.querySelector('#profile-settings .btn-primary');
  if (saveProfileBtn) {
    saveProfileBtn.addEventListener('click', function() {
      const fullName = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      
      savePreference('profile', { fullName, email, phone });
      showPreferencesNotification('Profile updated successfully!');
    });
  }
  
  // Dietary preferences
  const dietaryCheckboxes = document.querySelectorAll('#dietary-settings input[type="checkbox"]');
  dietaryCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const preferences = Array.from(dietaryCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
      savePreference('dietary', preferences);
      showPreferencesNotification('Dietary preferences saved!');
    });
  });
  
  // Notification toggles
  const notificationToggles = document.querySelectorAll('#notification-settings input[type="checkbox"]');
  notificationToggles.forEach(toggle => {
    toggle.addEventListener('change', function() {
      const notifications = {};
      notificationToggles.forEach(t => {
        notifications[t.id] = t.checked;
      });
      savePreference('notifications', notifications);
      showPreferencesNotification('Notification settings updated!');
    });
  });
  
  // Add address button
  const addAddressBtn = document.querySelector('#delivery-settings .btn-secondary');
  if (addAddressBtn) {
    addAddressBtn.addEventListener('click', function() {
      alert('Add New Address feature coming soon!');
    });
  }
  
  // Add payment method button
  const addPaymentBtn = document.querySelector('#payment-settings .btn-secondary');
  if (addPaymentBtn) {
    addPaymentBtn.addEventListener('click', function() {
      alert('Add Payment Method feature coming soon!');
    });
  }
  
  // Delete account button
  const deleteAccountBtn = document.querySelector('#privacy-settings .btn-danger');
  if (deleteAccountBtn) {
    deleteAccountBtn.addEventListener('click', function() {
      if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
        localStorage.clear();
        alert('Account deleted successfully!');
        window.location.href = 'index.html';
      }
    });
  }
}

function loadPreferences() {
  const preferences = JSON.parse(localStorage.getItem('freshfeast_preferences') || '{}');
  
  // Load profile
  if (preferences.profile) {
    const { fullName, email, phone } = preferences.profile;
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    
    if (fullNameInput) fullNameInput.value = fullName || '';
    if (emailInput) emailInput.value = email || '';
    if (phoneInput) phoneInput.value = phone || '';
  }
  
  // Load dietary preferences
  if (preferences.dietary) {
    preferences.dietary.forEach(pref => {
      const checkbox = document.querySelector(`#dietary-settings input[value="${pref}"]`);
      if (checkbox) checkbox.checked = true;
    });
  }
  
  // Load notification settings
  if (preferences.notifications) {
    Object.entries(preferences.notifications).forEach(([key, value]) => {
      const toggle = document.getElementById(key);
      if (toggle) toggle.checked = value;
    });
  }
}

function savePreference(key, value) {
  const preferences = JSON.parse(localStorage.getItem('freshfeast_preferences') || '{}');
  preferences[key] = value;
  localStorage.setItem('freshfeast_preferences', JSON.stringify(preferences));
}

function showPreferencesNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    background-color: var(--accent);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10000;
    animation: slideIn 0.3s ease-out;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// ===================================
// Track Order Page
// ===================================

function initializeTrackOrderPage() {
  const trackForm = document.getElementById('trackForm');
  const orderDetails = document.getElementById('orderDetails');
  
  if (trackForm) {
    trackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const orderNumber = document.getElementById('orderNumber').value;
      
      // Simulate order tracking (in real app, this would be an API call)
      if (orderNumber) {
        displayOrderTracking(orderNumber);
      }
    });
  }
}

function displayOrderTracking(orderNumber) {
  const orderDetails = document.getElementById('orderDetails');
  if (!orderDetails) return;
  
  // Show order details
  orderDetails.style.display = 'block';
  
  // Update order number
  const orderNumSpan = orderDetails.querySelector('h2 span');
  if (orderNumSpan) {
    orderNumSpan.textContent = orderNumber;
  }
  
  // Simulate order status (in real app, fetch from API)
  const statuses = ['placed', 'confirmed', 'preparing', 'out-for-delivery', 'delivered'];
  const currentStatusIndex = Math.floor(Math.random() * statuses.length);
  const currentStatus = statuses[currentStatusIndex];
  
  // Update timeline
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    if (index < currentStatusIndex) {
      item.classList.add('completed');
      item.classList.remove('active');
    } else if (index === currentStatusIndex) {
      item.classList.add('active');
      item.classList.remove('completed');
    } else {
      item.classList.remove('active', 'completed');
    }
  });
  
  // Update status badge
  const statusBadge = document.querySelector('.status-badge');
  if (statusBadge) {
    statusBadge.textContent = currentStatus.replace('-', ' ').toUpperCase();
    statusBadge.className = 'status-badge ' + currentStatus;
  }
  
  // Update ETA
  const etaSpan = document.querySelector('.order-detail-item span:last-child');
  if (etaSpan && currentStatusIndex < statuses.length - 1) {
    const minutes = (statuses.length - currentStatusIndex) * 10;
    etaSpan.textContent = `${minutes} minutes`;
  } else if (etaSpan) {
    etaSpan.textContent = 'Delivered';
  }
  
  // Scroll to order details
  orderDetails.scrollIntoView({ behavior: 'smooth' });
}


// ===================================
// CSS Animations (Add to head if needed)
// ===================================

const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ===================================
// Enhanced UI Features
// ===================================

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '0';
      entry.target.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, 100);
      
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll('.meal-card, .feature-card, .step-card, section > .container > h2');
  animatedElements.forEach(el => observer.observe(el));
});

// Export functions to global scope for onclick handlers
window.addToCartFromHome = addToCartFromHome;
window.addToCartFromMenu = addToCartFromMenu;
window.addToCartFromOrder = addToCartFromOrder;
window.updateOrderQuantity = updateOrderQuantity;
window.removeFromOrderCart = removeFromOrderCart;
window.updateCartItemQuantity = updateCartItemQuantity;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.nextImage = nextImage;
window.prevImage = prevImage;
window.updateCartPageQuantity = updateCartPageQuantity;
window.removeFromCartPage = removeFromCartPage;
