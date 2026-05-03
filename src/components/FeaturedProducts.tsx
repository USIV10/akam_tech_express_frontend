import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { getFeaturedProducts } from '@/data/products';

const products = getFeaturedProducts();

const FeaturedProducts = () => {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GH', {
      style: 'currency',
      currency: 'GHS',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="bg-gradient-electric text-white">
            Featured Products
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Trending
            </span> This Week
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular products with unbeatable prices and premium quality
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="group relative overflow-hidden border-0 bg-card shadow-product hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                    <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Badge */}
                  <Badge className={`absolute top-4 left-4 ${product.badgeColor} text-white`}>
                    {product.badge}
                  </Badge>

                  {/* Discount Badge */}
                  {product.discount > 0 && (
                    <Badge variant="destructive" className="absolute top-4 left-20">
                      -{product.discount}%
                    </Badge>
                  )}
                </div>

                <CardContent>
                  {/* Product Info */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                      <h3 className="font-semibold text-lg group-hover:text-accent-electric transition-colors">
                        {product.name}
                      </h3>
                      
                      {/* Quick Specs */}
                      <div className="flex flex-wrap gap-1">
                        {product.quickSpecs.map((spec, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-warning fill-current' : 'text-muted-foreground'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-foreground">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-muted-foreground line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-success">You save {formatPrice(product.originalPrice - product.price)}</p>
                    </div>

                    {/* Stock Status */}
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${product.inStock ? 'text-success' : 'text-destructive'}`}>
                        {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                      </span>
                      <span className="text-sm text-muted-foreground">Only 3 left!</span>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2 pt-2">
                      <Button
                        variant="cart"
                        className="flex-1"
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            quantity: 1,
                            image: product.image,
                          });
                        }}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                     <Link to={`/product/${product.id}`} onClick={(e) => e.stopPropagation()}>
                        <Button variant="premium" className="flex-1 w-full">
                          Buy Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-2 border-accent-electric text-accent-electric hover:bg-accent-electric hover:text-white">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
