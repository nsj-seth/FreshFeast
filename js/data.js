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
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop',
    popular: true
  },
  {
    id: 2,
    name: 'Grilled Atlantic Salmon',
    category: 'mains',
    price: 145.00,
    rating: 4.8,
    description: 'Fresh Salmon with fish seasonings and herbs, served with fresh vegetables',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=400&fit=crop',
    popular: true
  },
  {
    id: 3,
    name: 'Garden Fresh Bowl',
    category: 'mains',
    price: 95.00,
    rating: 4.7,
    description: ' Mixed greens, cherry tomatoes, avocado, and balsamic vinaigrette',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=400&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=400&fit=crop',
    popular: true
  },
  {
    id: 5,
    name: 'Margherita Pizza',
    category: 'mains',
    price: 95.00,
    rating: 4.6,
    description: 'Fresh mozzarella, tomato sauce, basil, and olive oil',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&h=400&fit=crop',
    popular: false
  },
  {
    id: 6,
    name: 'Grilled Chicken Wrap',
    category: 'mains',
    price: 75.00,
    rating: 4.5,
    description: 'Grilled chicken, lettuce, tomatoes, and special sauce',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&h=400&fit=crop',
    popular: false
  },
  {
    id: 7,
    name: 'Caesar Salad',
    category: 'starters',
    price: 45.00,
    rating: 4.4,
    description: 'Romaine lettuce, parmesan, croutons, and Caesar dressing',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&h=400&fit=crop',
    popular: false
  },
  {
    id: 8,
    name: 'Chicken Wings',
    category: 'starters',
    price: 55.00,
    rating: 4.7,
    description: 'Crispy wings with your choice of sauce',
    image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=500&h=400&fit=crop',
    popular: false
  },
  {
    id: 9,
    name: 'Loaded Nachos',
    category: 'starters',
    price: 50.00,
    rating: 4.6,
    description: 'Tortilla chips with cheese, jalapeños, and toppings',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500&h=400&fit=crop',
    popular: false
  },
  {
    id: 10,
    name: 'Chocolate Lava Cake',
    category: 'desserts',
    price: 45.00,
    rating: 4.9,
    description: 'Warm chocolate cake with molten center',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&h=400&fit=crop',
    popular: false
  },
  {
    id: 11,
    name: 'Tiramisu',
    category: 'desserts',
    price: 50.00,
    rating: 4.8,
    description: 'Classic Italian dessert with coffee and mascarpone',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=400&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=500&h=400&fit=crop',
    popular: false
  }
];

// Gallery Data
const galleryData = [
  { id: 1, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=600&fit=crop', title: 'Delicious Burger' },
  { id: 2, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=600&fit=crop', title: 'Fresh Salad' },
  { id: 3, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=600&fit=crop', title: 'Grilled Salmon' },
  { id: 4, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=600&fit=crop', title: 'Pasta Dish' },
  { id: 5, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=600&fit=crop', title: 'Pizza Slice' },
  { id: 6, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=600&fit=crop', title: 'Dessert' },
  { id: 7, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=600&fit=crop', title: 'Restaurant Interior' },
  { id: 8, image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=600&fit=crop', title: 'Coffee' }
];

export { menuData, galleryData };
