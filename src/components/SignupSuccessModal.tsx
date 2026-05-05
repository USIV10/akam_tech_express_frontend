import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Sparkles, ArrowRight, ShoppingBag, Gift, Star, Truck, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SignupSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
}

const SignupSuccessModal = ({ isOpen, onClose, userName }: SignupSuccessModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      setTimeout(() => setShowContent(true), 100);
    } else {
      setShowContent(false);
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [isOpen]);

  const handleContinue = () => {
    onClose();
    window.location.href = '/login';
  };

  if (!isAnimating && !isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg border-0 shadow-2xl bg-gradient-to-br from-orange-50 via-white to-purple-50 p-0 overflow-hidden">
        {/* Shopping-themed animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 opacity-5 animate-pulse" />
        
        {/* Shopping bag pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-4 p-4">
            {[...Array(32)].map((_, i) => (
              <ShoppingBag key={i} className="w-4 h-4 text-purple-600" />
            ))}
          </div>
        </div>
        
        <div className="relative p-8 text-center">
          {/* Success animation with shopping bag */}
          <div className={cn(
            "mb-6 transition-all duration-700 transform",
            showContent ? "scale-100 opacity-100" : "scale-0 opacity-0"
          )}>
            <div className="relative inline-block">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-orange-500 opacity-20 animate-ping" />
              
              {/* Shopping bag success icon */}
              <div className="relative rounded-full bg-gradient-to-br from-orange-500 to-purple-600 p-4 shadow-lg">
                <ShoppingBag className="w-12 h-12 text-white animate-bounce" />
                <CheckCircle2 className="absolute -bottom-1 -right-1 w-6 h-6 text-green-400 bg-white rounded-full" />
              </div>
              
              {/* Shopping-themed sparkles */}
              <Gift className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-spin" />
              <Star className="absolute -bottom-2 -left-2 w-5 h-5 text-orange-400 animate-spin" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Ecommerce success message */}
          <div className={cn(
            "space-y-4 mb-6 transition-all duration-700 delay-100 transform",
            showContent ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
              Welcome to Your Shopping Paradise! 🛍️
            </h2>
            
            <p className="text-gray-700 leading-relaxed font-medium">
              {userName ? `Congratulations, ${userName}!` : 'Congratulations!'} Your account is ready for an amazing shopping experience.
            </p>
            
            {/* Shopping benefits */}
            <div className="bg-gradient-to-r from-orange-100 to-purple-100 rounded-xl p-4 border border-orange-200">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="flex flex-col items-center">
                  <Gift className="w-6 h-6 text-orange-600 mb-1" />
                  <span className="text-xs font-semibold text-gray-700">Exclusive Deals</span>
                </div>
                <div className="flex flex-col items-center">
                  <Truck className="w-6 h-6 text-purple-600 mb-1" />
                  <span className="text-xs font-semibold text-gray-700">Fast Delivery</span>
                </div>
                <div className="flex flex-col items-center">
                  <Shield className="w-6 h-6 text-orange-600 mb-1" />
                  <span className="text-xs font-semibold text-gray-700">Secure Shopping</span>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-purple-200">
              <p className="text-sm text-gray-700">
                <span className="font-bold text-purple-600">🎉 Special Offer:</span> Sign in now to unlock your 10% welcome discount on your first order!
              </p>
            </div>
          </div>

          {/* Ecommerce action buttons */}
          <div className={cn(
            "space-y-3 transition-all duration-700 delay-200 transform",
            showContent ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}>
            <Button 
              onClick={handleContinue}
              className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold shadow-lg transform transition-all duration-200 hover:scale-105 text-lg py-3"
            >
              Start Shopping Now
              <ShoppingBag className="ml-2 w-5 h-5" />
            </Button>
            
            <button
              onClick={onClose}
              className="text-sm text-gray-500 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Continue browsing later
            </button>
          </div>

          {/* Shopping-themed decorative elements */}
          <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-orange-300 to-pink-400 rounded-full opacity-60 animate-pulse flex items-center justify-center">
            <Star className="w-5 h-5 text-white" />
          </div>
          <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full opacity-60 animate-pulse flex items-center justify-center" style={{ animationDelay: '1s' }}>
            <Gift className="w-4 h-4 text-white" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignupSuccessModal;
