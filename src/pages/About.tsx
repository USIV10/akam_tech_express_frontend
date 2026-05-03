import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Target, 
  Users, 
  Award, 
  Shield, 
  Truck, 
  Heart,
  Star,
  MessageCircle
} from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Saani Abdul Muhsin',
      role: 'CEO & Founder',
      image: '/placeholder.svg',
      bio: 'Visionary leader with 5+ years in e-commerce'
    },
    {
      name: 'Yussif Abdul Karim',
      role: 'CTO',
      image: '/placeholder.svg',
      bio: 'Technology expert driving innovation'
    },
    {
      name: 'Ibrahim Rafiu',
      role: 'Head of Customer Experience',
      image: '/placeholder.svg',
      bio: 'Dedicated to exceptional customer service'
    },
    {
      name: 'Hamza Abdul Karim',
      role: 'Lead Product Designer',
      image: '/placeholder.svg',
      bio: 'Creating beautiful and functional experiences'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Customer First',
      description: 'Every decision we make puts our customers at the center'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and transactions are always protected'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to your doorstep'
    },
    {
      icon: Heart,
      title: 'Quality Products',
      description: 'Carefully curated selection of premium items'
    }
  ];

  const stats = [
    { label: 'Happy Customers', value: '50K+' },
    { label: 'Products Sold', value: '100K+' },
    { label: 'Countries Served', value: '25+' },
    { label: 'Years in Business', value: '5+' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to provide the best online shopping experience, 
            offering premium products with exceptional customer service.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2022, our journey began with a simple idea: to make premium 
                products accessible to everyone. What started as a small online store 
                has grown into a trusted platform serving thousands of customers worldwide.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that shopping should be more than just a transaction. 
                It should be an experience that brings joy and satisfaction to our customers.
              </p>
              <p className="text-gray-600">
                Every product we offer is carefully selected, tested, and approved by our team 
                to ensure it meets our high standards of quality and value.
              </p>
            </div>
            <div>
              <img
                src="/placeholder.svg"
                alt="Our Story"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <value.icon className="h-12 w-12 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <div className="bg-blue-600 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <Card key={testimonial}>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Amazing experience! The products are exactly as described and the 
                    customer service is outstanding. Will definitely shop here again!"
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarFallback>AF</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold">Alhassan Gafaru</p>
                      <p className="text-xs text-gray-500">Verified Customer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience the Difference?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of satisfied customers who trust us for their shopping needs.
          </p>
          <div className="space-x-4">
            <Button size="lg">Start Shopping</Button>
            <Button size="lg" variant="outline">Contact Us</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
