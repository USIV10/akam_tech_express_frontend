import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Truck, Shield, Star, Timer, LucideTimer, TimerIcon } from "lucide-react";
import heroImage from "@/assets/headphones-hero.jpg";
import { time } from 'console';
import { TIMEOUT } from 'dns/promises';
import { getTime } from 'date-fns';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-accent/10">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-gradient-electric text-white w-fit">
                <Zap className="h-3 w-3 mr-1" />
                New Launch - Limited Time
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Premium Tech
                </span>
                <br />
                <span className="text-foreground">
                  Delivered Fast
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Discover the latest in premium electronics with lightning-fast delivery 
                across Ghana. Quality guaranteed, prices unmatched.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-warning fill-current" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <Truck className="h-4 w-4 text-success" />
                <span>24hr Delivery</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4 text-accent-electric" />
                <span>2 Year Warranty</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button variant="hero" size="lg" className="group">
                  Shop Now
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/products">
                <Button variant="outline" size="lg" className="border-2">
                  Explore Categories
                </Button>
              </Link>
            </div>

            {/* Promo Banner */}
            <div className="bg-gradient-glass backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Flash Sale Active!</h3>
                  <p className="text-muted-foreground">Up to 50% off selected items</p>
                </div>
                <Badge variant="destructive" className="animate-pulse-glow">
                  SAVE 50%
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">
              <span className="font-mono font-bold text-foreground"><Timer/></span>Ends in: 24hrs
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-electric rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity animate-pulse-glow"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-elegant">
                <img 
                  src={heroImage}
                  alt="Premium Wireless Headphones"
                  className="w-full h-auto object-contain animate-float"
                />
                
                {/* Floating Price Tag */}
                <div className="absolute top-4 right-4 bg-gradient-hero text-white px-4 py-2 rounded-full font-semibold shadow-electric">
                  <span className="text-sm line-through opacity-70">₵899</span>
                  <span className="text-lg font-bold ml-2">₵449</span>
                </div>

                {/* Feature Pills */}
                <div className="absolute bottom-4 left-4 space-y-2">
                  <Badge variant="secondary" className="bg-white/90 text-primary shadow-sm">
                    Noise Cancelling
                  </Badge>
                  <Badge variant="secondary" className="bg-white/90 text-primary shadow-sm">
                    30hr Battery
                  </Badge>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-electric rounded-full opacity-10 animate-float"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
    </section>
  );
};

export default HeroSection;