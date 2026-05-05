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
      <DialogContent className="sm:max-w-md border shadow-lg bg-white p-6">
        <div className="text-center">
          {/* Simple success icon */}
          <div className={cn(
            "mb-4 transition-opacity duration-300",
            showContent ? "opacity-100" : "opacity-0"
          )}>
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
          </div>

          {/* Simple success message */}
          <div className={cn(
            "space-y-3 mb-6 transition-opacity duration-300 delay-100",
            showContent ? "opacity-100" : "opacity-0"
          )}>
            <h2 className="text-xl font-semibold text-gray-900">
              Account Created Successfully!
            </h2>
            
            <p className="text-gray-600 text-sm">
              {userName ? `Welcome, ${userName}!` : 'Welcome!'} Your account is ready.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-3 text-left">
              <p className="text-sm text-gray-700">
                <span className="font-medium">Next step:</span> Sign in to start shopping
              </p>
            </div>
          </div>

          {/* Simple action buttons */}
          <div className={cn(
            "space-y-2 transition-opacity duration-300 delay-200",
            showContent ? "opacity-100" : "opacity-0"
          )}>
            <Button 
              onClick={handleContinue}
              className="w-full bg-black hover:bg-gray-800 text-white"
            >
              Sign In
            </Button>
            
            <button
              onClick={onClose}
              className="w-full text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignupSuccessModal;
