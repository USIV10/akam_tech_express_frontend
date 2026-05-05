import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle, User, Mail, Lock } from 'lucide-react';

interface AuthPopupProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'user-exists' | 'user-not-found' | 'login-success';
  email?: string;
  userName?: string;
}

const AuthPopup = ({ isOpen, onClose, type, email, userName }: AuthPopupProps) => {
  const getPopupContent = () => {
    switch (type) {
      case 'user-exists':
        return {
          icon: <User className="w-12 h-12 text-orange-500" />,
          bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
          title: 'Account Already Exists',
          message: `An account with email ${email} is already registered.`,
          subMessage: 'Please sign in to your existing account or use a different email address.',
          primaryAction: {
            text: 'Sign In',
            onClick: () => {
              onClose();
              window.location.href = '/login';
            }
          },
          secondaryAction: {
            text: 'Use Different Email',
            onClick: () => {
              onClose();
              window.location.href = '/register';
            }
          }
        };

      case 'user-not-found':
        return {
          icon: <AlertCircle className="w-12 h-12 text-red-500" />,
          bgColor: 'bg-gradient-to-br from-red-50 to-pink-50',
          title: 'Account Not Found',
          message: `No account found with email ${email}.`,
          subMessage: 'Please check your email address or create a new account.',
          primaryAction: {
            text: 'Create Account',
            onClick: () => {
              onClose();
              window.location.href = '/register';
            }
          },
          secondaryAction: {
            text: 'Try Again',
            onClick: () => {
              onClose();
              window.location.href = '/login';
            }
          }
        };

      case 'login-success':
        return {
          icon: <CheckCircle className="w-12 h-12 text-green-500" />,
          bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
          title: `Welcome back, ${userName}!`,
          message: 'You have successfully logged in to your account.',
          subMessage: 'You can now access your dashboard and continue shopping.',
          primaryAction: {
            text: 'Go to Dashboard',
            onClick: () => {
              onClose();
              window.location.href = '/home';
            }
          },
          secondaryAction: {
            text: 'Continue Shopping',
            onClick: () => {
              onClose();
              window.location.href = '/home';
            }
          }
        };

      default:
        return null;
    }
  };

  const content = getPopupContent();

  if (!content) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md border-0 shadow-2xl p-0 overflow-hidden">
        {/* Background gradient */}
        <div className={`absolute inset-0 ${content.bgColor} opacity-10`} />
        
        <div className="relative p-6 text-center">
          {/* Icon with animation */}
          <div className="mb-4 transition-all duration-500 transform">
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping" />
              <div className="relative rounded-full bg-white p-3 shadow-lg">
                {content.icon}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {content.title}
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              {content.message}
            </p>
            
            <p className="text-sm text-gray-500">
              {content.subMessage}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={content.primaryAction.onClick}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              {content.primaryAction.text}
            </Button>
            
            <Button
              variant="outline"
              onClick={content.secondaryAction.onClick}
              className="w-full sm:w-auto"
            >
              {content.secondaryAction.text}
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full opacity-60 animate-pulse" />
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthPopup;
