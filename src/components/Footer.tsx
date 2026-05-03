import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Smartphone,
  Headphones
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-light/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-bold">Stay Updated</h3>
            <p className="text-primary-foreground/80">
              Get exclusive deals, new arrivals, and tech insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="electric" className="sm:w-auto">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-primary-foreground/60">
              Join 50,000+ tech enthusiasts. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-electric rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AT</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">AkemTech</h1>
                <p className="text-xs text-primary-foreground/80 -mt-1">EXPRESS</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm">
             Ghana's premier destination for premium electronics and technology. 
              Quality products, unbeatable prices, lightning-fast delivery.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-white hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-white hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-white hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-white hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Quick Links</h4>
          <div className="space-y-3 text-sm">
            <Link to="/about" className="block text-primary-foreground/80 hover:text-white transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="block text-primary-foreground/80 hover:text-white transition-colors">
              Contact Us
            </Link>
            <Link to="/account" className="block text-primary-foreground/80 hover:text-white transition-colors">
              Track Your Order
            </Link>
            <Link to="/about" className="block text-primary-foreground/80 hover:text-white transition-colors">
              Shipping Info
            </Link>
            <Link to="/about" className="block text-primary-foreground/80 hover:text-white transition-colors">
              Returns & Refunds
            </Link>
            <Link to="/about" className="block text-primary-foreground/80 hover:text-white transition-colors">
              Size Guide
            </Link>
          </div>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Categories</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Smartphone className="h-4 w-4" />
                <Link to="/Electronics" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Electronics
                </Link>
              </div>
              <Link to="/Laptops" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Laptops & Computers
              </Link>
              <Link to="/Accessories" className="block text-primary-foreground/80 hover:text-white transition-colors">
                Accessories
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Get in Touch</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-accent-electric" />
                <div>
                  <p className="text-primary-foreground/80">
                     Lamashegu Street,<br />
                      Tamale N/R, Ghana.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent-electric" />
                <span className="text-primary-foreground/80">+233540595051/+233509200361</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent-electric" />
                <span className="text-primary-foreground/80">support@akemtech.com</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-3">
              <h5 className="font-medium text-sm">We Accept</h5>
              <div className="flex items-center space-x-2">
                <div className="bg-white rounded px-2 py-1">
                  <CreditCard className="h-4 w-4 text-gray-800" />
                </div>
                <span className="text-xs text-primary-foreground/80">
                  MTN Mobile Money, Vodafone Cash, AirtelTigo Money, Cyrptocurrency, Visa, Mastercard.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-light/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © 2025 AkemTech Express. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;