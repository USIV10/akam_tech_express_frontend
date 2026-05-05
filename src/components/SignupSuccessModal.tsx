import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
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
      <DialogContent className="sm:max-w-md border-0 shadow-2xl bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-0 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-10 animate-pulse" />
        
        <div className="relative p-8 text-center">
          {/* Success animation container */}
          <div className={cn(
            "mb-6 transition-all duration-700 transform",
            showContent ? "scale-100 opacity-100" : "scale-0 opacity-0"
          )}>
            <div className="relative inline-block">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping" />
              
              {/* Success circle with gradient */}
              <div className="relative rounded-full bg-gradient-to-br from-green-400 to-emerald-600 p-4 shadow-lg">
                <CheckCircle2 className="w-12 h-12 text-white animate-bounce" />
              </div>
              
              {/* Sparkles around the success icon */}
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-spin" />
              <Sparkles className="absolute -bottom-2 -left-2 w-5 h-5 text-blue-400 animate-spin" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Success message */}
          <div className={cn(
            "space-y-3 mb-6 transition-all duration-700 delay-100 transform",
            showContent ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Welcome Aboard! 🎉
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              {userName ? `Congratulations, ${userName}!` : 'Congratulations!'} Your account has been successfully created.
            </p>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-green-200">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-green-600">Next step:</span> Sign in to start exploring our amazing products and exclusive deals!
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className={cn(
            "space-y-3 transition-all duration-700 delay-200 transform",
            showContent ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}>
            <Button 
              onClick={handleContinue}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              Continue to Sign In
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            
            <button
              onClick={onClose}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              Maybe later
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-60 animate-pulse" />
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignupSuccessModal;
