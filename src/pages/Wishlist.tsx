import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 199.99,
      originalPrice: 299.99,
      image: '/placeholder.svg',
      category: 'Electronics',
      inStock: true
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 249.99,
      image: '/placeholder.svg',
      category: 'Electronics',
      inStock: true
    },
    {
      id: 3,
      name: 'Ergonomic Laptop Stand',
      price: 49.99,
      originalPrice: 79.99,
      image: '/placeholder.svg',
      category: 'Accessories',
      inStock: false
    },
    {
      id: 4,
      name: 'Portable Bluetooth Speaker',
      price: 89.99,
      image: '/placeholder.svg',
      category: 'Electronics',
      inStock: true
    }
  ];

  const handleRemoveFromWishlist = (id: number) => {
    // Handle remove from wishlist
    console.log('Remove from wishlist:', id);
  };

  const handleAddToCart = (id: number) => {
    // Handle add to cart
    console.log('Add to cart:', id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
          <p className="text-gray-600">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>

        {wishlistItems.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <CardTitle className="text-xl mb-2">Your wishlist is empty</CardTitle>
              <CardDescription>
                Start adding items you love to your wishlist
              </CardDescription>
              <Button className="mt-4">Continue Shopping</Button>
            </CardContent>
          </Card>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="aspect-square bg-gray-200 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                      onClick={() => handleRemoveFromWishlist(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    {!item.inStock && (
                      <Badge variant="secondary" className="absolute bottom-2 left-2">
                        Out of Stock
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription>{item.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">${item.price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${item.originalPrice}
                        </span>
                      )}
                    </div>
                  </CardContent>
                  <CardContent>
                    <Button 
                      className="w-full" 
                      disabled={!item.inStock}
                      onClick={() => handleAddToCart(item.id)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Separator className="my-8" />

            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Wishlist Summary</h3>
                <p className="text-gray-600">
                  Total value: $
                  {wishlistItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                </p>
              </div>
              <Button variant="outline">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add All to Cart
              </Button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;
