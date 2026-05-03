import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  Heart,
  Phone,
  Mail
} from "lucide-react";

const Header = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="w-full border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="border-b border-border/50 bg-muted/30">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>+233 540 95051</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-3 w-3" />
                <span>support@akamtech.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>Free delivery on orders over ₵500</span>
              <Badge variant="secondary" className="bg-gradient-electric text-white">
                New Arrivals
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AT</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                AkamTech
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">EXPRESS</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search for products, brands, and more..." 
                className="pl-10 pr-4 h-11 border-2 focus:border-accent-electric transition-colors"
              />
              <Button 
                variant="electric" 
                size="sm" 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-9"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
          <Link to="/wishlist">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
          </Link>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent-electric text-white text-xs flex items-center justify-center">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>

          <Link to="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search products..." 
              className="pl-10 pr-4 h-10"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center justify-center space-x-8 text-sm">
            <Link to="/Electronics" className="text-foreground hover:text-accent-electric transition-colors font-medium">
              Electronics
            </Link>
            <Link to="/Laptops" className="text-muted-foreground hover:text-accent-electric transition-colors">
              Laptops
            </Link>
            <Link to="/Phones" className="text-muted-foreground hover:text-accent-electric transition-colors">
              Phones
            </Link>
            <Link to="/Accessories" className="text-muted-foreground hover:text-accent-electric transition-colors">
              Accessories
            </Link>
            <Link to="/Deals" className="text-accent-electric font-medium">
              Deals 🔥
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
