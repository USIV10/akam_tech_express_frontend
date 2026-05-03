export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  images?: string[];
  category: string;
  description?: string;
  specifications?: string[];
  quickSpecs?: string[];
  inStock?: boolean;
  discount?: number;
  badge?: string;
  badgeColor?: string;
}

export const allProducts: Product[] = [
  // Laptops
  {
    id: 1,
    name: "MacBook Pro 16-inch",
    price: 899999,
    originalPrice: 1099999,
    rating: 4.9,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=400&fit=crop"
    ],
    category: "Laptops",
    description: "Powerful laptop for professionals",
    specifications: ["M3 Pro chip", "16GB RAM", "1TB SSD", "16.2-inch Liquid Retina XDR display"],
    quickSpecs: ["M3 Pro chip", "16GB RAM", "1TB SSD"],
    inStock: true,
    discount: 18,
    badge: "Bestseller",
    badgeColor: "bg-success"
  },
  {
    id: 2,
    name: "Dell XPS 15",
    price: 649999,
    originalPrice: 749999,
    rating: 4.7,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=400&fit=crop"
    ],
    category: "Laptops",
    description: "Premium Windows laptop",
    specifications: ["Intel i7", "16GB RAM", "512GB SSD", "15.6-inch 4K display"],
    inStock: true,
    discount: 13,
    badge: "Popular",
    badgeColor: "bg-accent-electric"
  },
  {
    id: 3,
    name: "HP Spectre x360",
    price: 549999,
    rating: 4.6,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=400&fit=crop"
    ],
    category: "Laptops",
    description: "Convertible 2-in-1 laptop",
    specifications: ["Intel i5", "8GB RAM", "256GB SSD", "13.3-inch touchscreen"],
    inStock: true
  },
  {
    id: 4,
    name: "Lenovo ThinkPad X1",
    price: 799999,
    rating: 4.8,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=400&fit=crop"
    ],
    category: "Laptops",
    description: "Business-class laptop",
    specifications: ["Intel i7", "16GB RAM", "1TB SSD", "14-inch display"],
    inStock: true,
    badge: "Business",
    badgeColor: "bg-secondary"
  },
  {
    id: 5,
    name: "Asus ROG Zephyrus",
    price: 899999,
    originalPrice: 999999,
    rating: 4.5,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=400&fit=crop"
    ],
    category: "Laptops",
    description: "Gaming laptop",
    specifications: ["AMD Ryzen 9", "32GB RAM", "1TB SSD", "RTX 4070", "15.6-inch 240Hz"],
    inStock: true,
    discount: 10,
    badge: "Gaming",
    badgeColor: "bg-destructive"
  },
  {
    id: 6,
    name: "Microsoft Surface Laptop 5",
    price: 699999,
    rating: 4.4,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=400&fit=crop"
    ],
    category: "Laptops",
    description: "Sleek and portable",
    specifications: ["Intel i5", "8GB RAM", "256GB SSD", "13.5-inch touchscreen"],
    inStock: true
  },

  // Phones
  {
    id: 7,
    name: "iPhone 15 Pro Max",
    price: 649999,
    originalPrice: 749999,
    rating: 4.8,
    reviews: 324,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop"
    ],
    category: "Phones",
    description: "Premium smartphone",
    specifications: ["A17 Pro chip", "256GB storage", "Titanium design", "Pro camera system"],
    quickSpecs: ["A17 Pro chip", "256GB", "Pro Camera"],
    inStock: true,
    discount: 13,
    badge: "Flagship",
    badgeColor: "bg-accent-electric"
  },
  {
    id: 8,
    name: "Samsung Galaxy S23 Ultra",
    price: 599999,
    rating: 4.7,
    reviews: 278,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop"
    ],
    category: "Phones",
    description: "Android flagship",
    specifications: ["Snapdragon 8 Gen 2", "256GB storage", "S Pen", "200MP camera"],
    inStock: true
  },
  {
    id: 9,
    name: "Google Pixel 8 Pro",
    price: 549999,
    originalPrice: 649999,
    rating: 4.6,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop"
    ],
    category: "Phones",
    description: "AI-powered smartphone",
    specifications: ["Google Tensor G3", "128GB storage", "Advanced camera", "7 years updates"],
    inStock: true,
    discount: 15,
    badge: "AI Power",
    badgeColor: "bg-success"
  },
  {
    id: 10,
    name: "OnePlus 11",
    price: 449999,
    rating: 4.5,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop"
    ],
    category: "Phones",
    description: "Fast and smooth",
    specifications: ["Snapdragon 8 Gen 2", "128GB storage", "100W charging", "Hasselblad camera"],
    inStock: true
  },
  {
    id: 11,
    name: "Xiaomi 13 Pro",
    price: 499999,
    rating: 4.4,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop"
    ],
    category: "Phones",
    description: "Feature-packed",
    specifications: ["Snapdragon 8 Gen 2", "256GB storage", "Leica camera", "120W charging"],
    inStock: true
  },
  {
    id: 12,
    name: "Nothing Phone (2)",
    price: 399999,
    rating: 4.3,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop"
    ],
    category: "Phones",
    description: "Unique design",
    specifications: ["Snapdragon 8+ Gen 1", "256GB storage", "Glyph Interface", "Clean Android"],
    inStock: true,
    badge: "Unique",
    badgeColor: "bg-secondary"
  },

  // Accessories
  {
    id: 13,
    name: "AirPods Pro (2nd Gen)",
    price: 129999,
    originalPrice: 149999,
    rating: 4.8,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=400&fit=crop"
    ],
    category: "Accessories",
    description: "Wireless earbuds",
    specifications: ["Active Noise Cancellation", "Adaptive EQ", "MagSafe charging", "30hr battery"],
    quickSpecs: ["Noise Cancellation", "MagSafe", "30hr battery"],
    inStock: true,
    discount: 13,
    badge: "Popular",
    badgeColor: "bg-success"
  },
  {
    id: 14,
    name: "Apple Watch Series 9",
    price: 199999,
    rating: 4.7,
    reviews: 289,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3f436f25d4d1?w=600&h=400&fit=crop"
    ],
    category: "Accessories",
    description: "Smartwatch",
    specifications: ["S9 chip", "45mm", "GPS", "18hr battery", "Double tap gesture"],
    inStock: true
  },
  {
    id: 15,
    name: "Samsung Galaxy Watch 6",
    price: 149999,
    rating: 4.6,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3f436f25d4d1?w=600&h=400&fit=crop"
    ],
    category: "Accessories",
    description: "Android smartwatch",
    specifications: ["Wear OS", "44mm", "ECG", "40hr battery", "Rotating bezel"],
    inStock: true
  },
  {
    id: 16,
    name: "Logitech MX Master 3S",
    price: 49999,
    rating: 4.8,
    reviews: 345,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1586816879360-004f5b0c51c7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop"
    ],
    category: "Accessories",
    description: "Wireless mouse",
    specifications: ["Ergonomic design", "8000 DPI", "USB-C charging", "70 days battery"],
    inStock: true,
    badge: "Premium",
    badgeColor: "bg-accent-electric"
  },
  {
    id: 17,
    name: "Apple Magic Keyboard",
    price: 69999,
    rating: 4.5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1586816879360-004f5b0c51c7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop"
    ],
    category: "Accessories",
    description: "Wireless keyboard",
    specifications: ["Scissor mechanism", "USB-C", "Backlit keys", "Bluetooth 5.0"],
    inStock: true
  },
  {
    id: 18,
    name: "Anker 737 Power Bank",
    price: 39999,
    originalPrice: 49999,
    rating: 4.7,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1598931626145-4cffefc3260d?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1598931626145-4cffefc3260d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1586816879360-004f5b0c51c7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop"
    ],
    category: "Accessories",
    description: "High-capacity power bank",
    specifications: ["24000mAh", "140W output", "PD 3.1", "Digital display"],
    inStock: true,
    discount: 20,
    badge: "Fast Charge",
    badgeColor: "bg-destructive"
  },

  // Electronics
  {
    id: 19,
    name: "Sony 65-inch 4K TV",
    price: 399999,
    originalPrice: 499999,
    rating: 4.6,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=400&fit=crop"
    ],
    category: "Electronics",
    description: "Smart TV",
    specifications: ["4K HDR", "Google TV", "Dolby Atmos", "X1 processor"],
    inStock: true,
    discount: 20,
    badge: "Smart TV",
    badgeColor: "bg-success"
  },
  {
    id: 20,
    name: "Bose QuietComfort Headphones",
    price: 199999,
    rating: 4.8,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=400&fit=crop"
    ],
    category: "Electronics",
    description: "Noise-cancelling headphones",
    specifications: ["ANC", "20hr battery", "Bluetooth 5.3", "Comfortable fit"],
    inStock: true
  },
  {
    id: 21,
    name: "PlayStation 5",
    price: 299999,
    rating: 4.9,
    reviews: 789,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&h=400&fit=crop"
    ],
    category: "Electronics",
    description: "Gaming console",
    specifications: ["8-core AMD", "16GB RAM", "825GB SSD", "4K gaming", "Ray tracing"],
    inStock: true,
    badge: "Gaming",
    badgeColor: "bg-destructive"
  },
  {
    id: 22,
    name: "Canon EOS R6 Mark II",
    price: 899999,
    rating: 4.7,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1566864222010-d45675442c31?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1566864222010-d45675442c31?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=600&h=400&fit=crop"
    ],
    category: "Electronics",
    description: "Mirrorless camera",
    specifications: ["24MP full-frame", "4K video", "IBIS", "40fps continuous"],
    inStock: true
  },
  {
    id: 23,
    name: "Sonos Era 300",
    price: 249999,
    rating: 4.5,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop"
    ],
    category: "Electronics",
    description: "Smart speaker",
    specifications: ["Spatial audio", "WiFi + Bluetooth", "Voice control", "Dolby Atmos"],
    inStock: true
  },
  {
    id: 24,
    name: "iPad Pro 12.9-inch",
    price: 499999,
    originalPrice: 599999,
    rating: 4.8,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=400&fit=crop"
    ],
    category: "Electronics",
    description: "Tablet computer",
    specifications: ["M2 chip", "1TB storage", "Liquid Retina XDR", "Thunderbolt"],
    inStock: true,
    discount: 17,
    badge: "Pro",
    badgeColor: "bg-accent-electric"
  }
];

// Helper functions to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter(product => product.category === category);
};

export const getDiscountedProducts = (): Product[] => {
  return allProducts.filter(product => product.discount && product.discount > 0);
};

export const getFeaturedProducts = (): Product[] => {
  return allProducts.filter(product => 
    product.id === 1 || // MacBook Pro 16-inch (Bestseller)
    product.id === 7 || // iPhone 15 Pro Max (Flagship)
    product.id === 13   // AirPods Pro (Popular)
  );
};
