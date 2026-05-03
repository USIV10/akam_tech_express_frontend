import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import axios from 'axios';


const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Laptops = lazy(() => import("./pages/Laptops"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Account = lazy(() => import("./pages/Account"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Deals = lazy(() => import("./pages/Deals"));
const Electronics = lazy(() => import("./pages/Electronics"));
const Phones = lazy(() => import("./pages/Phones"));
const Accessories = lazy(() => import("./pages/Accessories"));

const queryClient = new QueryClient();

axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const App = () => {

  const handleRegister = async (firstName, lastName, email, password) => {
    try {
      const response = await axios.post('/api/auth/register', {
        firstName,
        lastName,
        email,
        password,
      });

      alert(response.data.message || 'Registration successful!');
      window.location.href = '/login';
    } catch (error) {
      console.error('Registration error:', error.response?.data?.message || 'An error occurred');
      alert(error.response?.data?.message || 'An error occurred');
    }
  };


      const handleLogin = async (email, password) => {
        try {
          const response = await axios.post('/api/auth/login', {
            email,
            password,
          });
      
          const { token } = response.data;

          // Store only the JWT token — user data is fetched from the API
          localStorage.setItem('token', token);
          alert('Login successful!');
          window.location.href = '/home';
        } catch (error) {
          console.error('Login error:', error.response?.data?.message || 'An error occurred');
          alert(error.response?.data?.message || 'An error occurred');
        }
      };

return(
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CartProvider>
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Navigate to="/register" replace />} />
              <Route path="/home" element={<Index />} />
              <Route path="/Electronics" element={<Electronics />} />
              <Route path="/Laptops" element={<Laptops />} />
              <Route path="/Phones" element={<Phones />} />
              <Route path="/Accessories" element={<Accessories />} />
              <Route path="/Deals" element={<Deals />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
              <Route path="/register" element={<Register handleRegister={handleRegister} />} />
              <Route path="/account" element={<Account />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/wishlist" element={<Wishlist />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);
};
export default App;
