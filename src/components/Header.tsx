import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, ShoppingCart, User, Menu, Heart,
  Phone, Mail, X, Home, Package, LogOut,
  Monitor, Laptop, Smartphone, Headphones
} from "lucide-react";
import SessionManager from '@/utils/sessionManager';

const Header = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sessionStatus, setSessionStatus] = useState('');

  useEffect(() => {
    // Update session status periodically
    const updateSessionStatus = () => {
      if (SessionManager.isLoggedIn()) {
        const timeRemaining = SessionManager.getTimeRemainingDisplay();
        const isExpiringSoon = SessionManager.isSessionExpiringSoon();
        
        if (isExpiringSoon) {
          setSessionStatus(`Session expires in ${timeRemaining}`);
        } else {
          setSessionStatus(`Session active (${timeRemaining} remaining)`);
        }
      } else {
        setSessionStatus('Not logged in');
      }
    };

    updateSessionStatus();
    const interval = setInterval(updateSessionStatus, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    if ((window as any).handleLogout) {
      (window as any).handleLogout();
    }
  };

  return (
    <header className="w-full border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      {/* Top Bar - hidden on mobile */}
      <div className="hidden md:block border-b border-border/50 bg-muted/30">
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
            <div className="flex items-center space-x-4">
              <div className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                {sessionStatus}
              </div>
              <span>Free delivery on orders over ₵500</span>
              <Badge variant="secondary" className="bg-gradient-electric text-white">
                New Arrivals
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2 shrink-0">
            <div className="w-9 h-9 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-base">AT</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent leading-none">
                AkamTech
              </h1>
              <p className="text-xs text-muted-foreground">EXPRESS</p>
            </div>
          </Link>

          {/* Search Bar - desktop */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search for products, brands, and more..." 
                className="pl-10 pr-24 h-10 border-2 focus:border-accent-electric transition-colors"
              />
              <Button 
                variant="electric" 
                size="sm" 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-1">
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="hidden md:flex h-9 w-9">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative h-9 w-9">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent-electric text-white text-xs flex items-center justify-center p-0">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>

            <Link to="/account">
              <Button variant="ghost" size="icon" className="hidden md:flex h-9 w-9">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Mobile menu toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden h-9 w-9"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search products..." 
              className="pl-10 pr-4 h-10 w-full"
            />
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 py-2">
          <nav className="flex items-center justify-center space-x-8 text-sm">
            <Link to="/Electronics" className="text-foreground hover:text-accent-electric transition-colors font-medium">Electronics</Link>
            <Link to="/Laptops" className="text-muted-foreground hover:text-accent-electric transition-colors">Laptops</Link>
            <Link to="/Phones" className="text-muted-foreground hover:text-accent-electric transition-colors">Phones</Link>
            <Link to="/Accessories" className="text-muted-foreground hover:text-accent-electric transition-colors">Accessories</Link>
            <Link to="/Deals" className="text-accent-electric font-medium">Deals</Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background shadow-lg">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            <Link to="/home" onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm font-medium">
              <Home className="h-4 w-4" /> <span>Home</span>
            </Link>
            <Link to="/Electronics" onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
              <Monitor className="h-4 w-4" /> <span>Electronics</span>
            </Link>
            <Link to="/Laptops" onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
              <Laptop className="h-4 w-4" /> <span>Laptops</span>
            </Link>
            <Link to="/Phones" onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
              <Smartphone className="h-4 w-4" /> <span>Phones</span>
            </Link>
            <Link to="/Accessories" onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
              <Headphones className="h-4 w-4" /> <span>Accessories</span>
            </Link>
            <Link to="/Deals" onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm text-accent-electric font-medium">
              <Package className="h-4 w-4" /> <span>Deals</span>
            </Link>
            <div className="border-t border-border pt-2 mt-2 space-y-1">
              <Link to="/account" onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                <User className="h-4 w-4" /> <span>Account</span>
              </Link>
              <Link to="/wishlist" onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                <Heart className="h-4 w-4" /> <span>Wishlist</span>
              </Link>
              <button 
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm text-red-600 w-full text-left"
              >
                <LogOut className="h-4 w-4" /> <span>Logout</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;