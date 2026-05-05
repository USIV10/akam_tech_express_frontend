import React, { useState } from 'react';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import AuthPopup from '@/components/AuthPopup';
import axios from 'axios';

const Login = ({handleLogin}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState<'user-exists' | 'user-not-found' | 'login-success' | null>(null);
  const [popupEmail, setPopupEmail] = useState('');
  const [popupUserName, setPopupUserName] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (event) => {
      event.preventDefault(); // Prevent form submission from refreshing the page
      const email = formData.email;
      const password = formData.password;
  
      try {
        await handleLogin(email, password);
        // Show success popup
        setPopupType('login-success');
        setPopupEmail(email);
        // Extract user name from email or use a default
        const userName = email.split('@')[0];
        setPopupUserName(userName.charAt(0).toUpperCase() + userName.slice(1));
        setShowPopup(true);
      } catch (error: any) {
        // Check for specific error types
        if (error.response?.data?.message?.includes('already exists')) {
          setPopupType('user-exists');
          setPopupEmail(email);
          setShowPopup(true);
        } else if (error.response?.data?.message?.includes('not found')) {
          setPopupType('user-not-found');
          setPopupEmail(email);
          setShowPopup(true);
        } else {
          // Show generic error
          alert(error.response?.data?.message || 'Login failed');
        }
      }
    };


  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
              <CardDescription className="text-center">
                Sign in to your account to continue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rememberMe"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, rememberMe: checked as boolean })
                      }
                    />
                    <Label htmlFor="rememberMe" className="text-sm">
                      Remember me
                    </Label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>

                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/register" className="font-medium text-blue-600 hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative text-center text-sm text-gray-500">
                  Or continue with
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full">
                    Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    Facebook
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
      <AuthPopup
        isOpen={showPopup}
        onClose={() => {
          setShowPopup(false);
          setPopupType(null);
          setPopupEmail('');
          setPopupUserName('');
        }}
        type={popupType}
        email={popupEmail}
        userName={popupUserName}
      />
    </div>
  );
};

export default Login;
