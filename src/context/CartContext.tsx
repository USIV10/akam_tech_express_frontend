import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import axios from 'axios';

// Define the shape of a cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Define the shape of the cart context
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  syncCartWithServer: () => Promise<void>;
  isLoading: boolean;
}

// Create the cart context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Define the props for the CartProvider
interface CartProviderProps {
  children: ReactNode;
}

// Create the CartProvider component
export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Check if user is logged in
  const isUserLoggedIn = () => {
    return !!localStorage.getItem('token');
  };

  // Get auth headers
  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  // Sync cart with server
  const syncCartWithServer = async () => {
    if (!isUserLoggedIn()) {
      // Load from localStorage if not logged in
      const savedCart = localStorage.getItem('guestCart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.get('/api/user/cart', {
        headers: getAuthHeaders()
      });
      setCartItems(response.data.cart || []);
    } catch (error) {
      console.error('Error syncing cart:', error);
      // Fallback to localStorage if server fails
      const savedCart = localStorage.getItem('guestCart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Save cart to server or localStorage
  const saveCart = async (items: CartItem[]) => {
    if (isUserLoggedIn()) {
      try {
        await axios.put('/api/user/cart', { cart: items }, {
          headers: getAuthHeaders()
        });
      } catch (error) {
        console.error('Error saving cart to server:', error);
        // Fallback to localStorage
        localStorage.setItem('guestCart', JSON.stringify(items));
      }
    } else {
      // Save to localStorage for guest users
      localStorage.setItem('guestCart', JSON.stringify(items));
    }
  };

  // Initialize cart on mount
  useEffect(() => {
    syncCartWithServer();
  }, []);

  // Add item to cart
  const addToCart = async (item: CartItem) => {
    const newItems = cartItems.map((i) =>
      i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
    );
    
    const existingItem = cartItems.find((i) => i.id === item.id);
    const updatedCart = existingItem ? newItems : [...cartItems, { ...item, quantity: 1 }];
    
    setCartItems(updatedCart);
    await saveCart(updatedCart);
  };

  // Remove item from cart
  const removeFromCart = async (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    await saveCart(updatedCart);
  };

  // Update item quantity
  const updateQuantity = async (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    await saveCart(updatedCart);
  };

  // Clear the cart
  const clearCart = async () => {
    setCartItems([]);
    if (isUserLoggedIn()) {
      try {
        await axios.delete('/api/user/cart', {
          headers: getAuthHeaders()
        });
      } catch (error) {
        console.error('Error clearing cart on server:', error);
      }
    }
    localStorage.removeItem('guestCart');
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        syncCartWithServer,
        isLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
