import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Check, CreditCard, Truck, User } from 'lucide-react';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => { if (step < 3) setStep(step + 1); };
  const handlePrevStep = () => { if (step > 1) setStep(step - 1); };

  const steps = [
    { number: 1, title: 'Info', icon: User },
    { number: 2, title: 'Shipping', icon: Truck },
    { number: 3, title: 'Payment', icon: CreditCard },
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
                  {step === 1 && 'Contact Information'}
                  {step === 2 && 'Shipping Address'}
                  {step === 3 && 'Payment Details'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email" id="email" name="email"
                        value={formData.email} onChange={handleInputChange}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          type="text" id="firstName" name="firstName"
                          value={formData.firstName} onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          type="text" id="lastName" name="lastName"
                          value={formData.lastName} onChange={handleInputChange}
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
                        value={formData.address} onChange={handleInputChange}
                        placeholder="123 Main St"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          type="text" id="city" name="city"
                          value={formData.city} onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input
                        type="text" id="country" name="country"
                        value={formData.country} onChange={handleInputChange}
                        placeholder="Ghana"
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        type="text" id="cardNumber" name="cardNumber"
                        value={formData.cardNumber} onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          type="text" id="expiryDate" name="expiryDate"
                          value={formData.expiryDate} onChange={handleInputChange}
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          type="text" id="cvv" name="cvv"
                          value={formData.cvv} onChange={handleInputChange}
                          placeholder="123"
                        />
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
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Check className="w-4 h-4 mr-2" />
                      Complete Order
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
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>₵599.97</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>₵15.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span>₵48.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-base">
                    <span>Total</span>
                    <span>₵662.97</span>
                  </div>
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