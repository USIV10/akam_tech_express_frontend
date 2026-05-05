import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Check, CreditCard, Truck, User, Lock, CheckCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import axios from 'axios';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const token = localStorage.getItem('token');
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  useEffect(() => {
    // Load Paystack script
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    document.body.appendChild(script);

    if (token) {
      // Load user data for logged-in users
      const loadUserData = async () => {
        try {
          const response = await axios.get('/api/user/profile', {
            headers: { Authorization: `Bearer ${token}` }
          });
          const user = response.data;
          setUserData({
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            email: user.email || '',
            phone: user.phone || '',
            address: user.address || '',
            city: user.city || '',
            state: user.state || '',
            zipCode: user.zipCode || '',
            country: user.country || '',
          });
        } catch (error) {
          console.error('Error loading user data:', error);
        }
      };
      loadUserData();
    }
  }, [token]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => { if (step < 3) setStep(step + 1); };
  const handlePrevStep = () => { if (step > 1) setStep(step - 1); };

  const handlePaystackPayment = async () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty');
      return;
    }

    setLoading(true);
    
    try {
      // Initialize Paystack payment
      const paystack = new (window as any).PaystackPop({
        email: userData.email,
        amount: total * 100, // Paystack expects amount in kobo (cents)
        currency: 'GHS',
        ref: `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        callback: function(response) {
          // Payment successful
          console.log('Payment successful:', response);
          clearCart();
          alert('Payment successful! Order placed.');
          window.location.href = '/home';
        },
        onClose: function() {
          setLoading(false);
          console.log('Payment closed');
        },
        onOpen: function() {
          console.log('Payment opened');
        }
      });

      paystack.openIframe();
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
      setLoading(false);
    }
  };

  const steps = [
    { number: 1, title: 'Info', icon: User },
    { number: 2, title: 'Shipping', icon: Truck },
    { number: 3, title: 'Payment', icon: Lock },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Checkout</h1>
        
        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((s, index) => (
            <React.Fragment key={s.number}>
              <div className="flex flex-col items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  step >= s.number ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <span className="mt-1 text-xs font-medium hidden sm:block">{s.title}</span>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-1 mx-2 ${step > s.number ? 'bg-blue-600' : 'bg-gray-200'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Main content — stacks on mobile, side by side on desktop */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Form */}
          <div className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {step === 1 && 'Contact & Shipping Information'}
                  {step === 2 && 'Order Review'}
                  {step === 3 && 'Payment'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email" id="email" name="email"
                        value={userData.email} onChange={handleInputChange}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          type="text" id="firstName" name="firstName"
                          value={userData.firstName} onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          type="text" id="lastName" name="lastName"
                          value={userData.lastName} onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        type="text" id="address" name="address"
                        value={userData.address} onChange={handleInputChange}
                        placeholder="123 Main St"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          type="text" id="city" name="city"
                          value={userData.city} onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input
                        type="text" id="country" name="country"
                        value={userData.country} onChange={handleInputChange}
                        placeholder="Ghana"
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        type="tel" id="phone" name="phone"
                        value={userData.phone} onChange={handleInputChange}
                        placeholder="+233 540 95051"
                      />
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <Lock className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-blue-900">Secure Payment with Paystack</p>
                          <p className="text-sm text-blue-700">Your payment information is encrypted and secure</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={handlePrevStep} disabled={step === 1}>
                    Previous
                  </Button>
                  {step < 3 ? (
                    <Button onClick={handleNextStep}>Next</Button>
                  ) : (
                    <Button 
                      className="bg-green-600 hover:bg-green-700"
                      onClick={handlePaystackPayment}
                      disabled={loading || cartItems.length === 0}
                    >
                      {loading ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      ) : (
                        <Check className="w-4 h-4 mr-2" />
                      )}
                      Pay with Paystack
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:w-72">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>₵{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>₵{shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span>₵{tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-base">
                    <span>Total</span>
                    <span>₵{total.toFixed(2)}</span>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    {shipping === 0 && (
                      <p className="text-green-600 font-medium flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Free shipping on orders over ₵500
                      </p>
                    )}
                    <p className="mt-2">{cartItems.length} items in cart</p>
                  </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;