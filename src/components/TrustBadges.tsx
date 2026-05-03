import React from 'react';
import { Shield, Truck, Headphones, RefreshCw, Award, Lock } from "lucide-react";

const TrustBadges = () => {
  const features = [
    {
      icon: Shield,
      title: "2 Year Warranty",
      description: "Comprehensive coverage on all products"
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "On orders above ₵500"
    },
    {
      icon: Headphones,
      title: "24/7 Support", 
      description: "Expert help when you need it"
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "30-day hassle-free returns"
    },
    {
      icon: Award,
      title: "Authentic Products",
      description: "100% genuine guaranteed"
    },
    {
      icon: Lock,
      title: "Secure Payment",
      description: "Bank-level security"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center space-y-3 group">
                <div className="w-12 h-12 bg-gradient-electric rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;