import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Heart, Search, Menu, X, User, ChevronDown } from 'lucide-react';

const slides = [
  {
    title: "GROSERIES DELIVERY",
    subtitle: "We know how large objects will act, but things on a small scale.",
    image: "/mc.jpg"
  },
  {
    title: "FRESH FOOD DELIVERY",
    subtitle: "Quick delivery at your doorstep with best quality assurance.",
    image: "/fd.jpg"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Navigation Header */}
      <nav className="relative py-5 px-6 md:px-8 flex justify-between items-center bg-white border-b border-gray-100">
        <div className="text-2xl font-bold text-gray-800">BrandName</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
          <a href="#" className="flex items-center text-gray-800 hover:text-gray-600">
            Shop
            <ChevronDown className="w-4 h-4 ml-1" />
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Blog</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Pages</a>
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="flex items-center text-blue-500">
            <User className="w-5 h-5 mr-2" />
            <span className="hover:text-blue-600">Login / Register</span>
          </button>
          <div className="flex items-center space-x-4">
            <button className="p-2">
              <Search className="w-5 h-5 text-blue-500" />
            </button>
            <button className="relative">
              <ShoppingCart className="w-5 h-5 text-blue-500" />
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                1
              </span>
            </button>
            <button className="relative">
              <Heart className="w-5 h-5 text-blue-500" />
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                1
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Header Icons */}
        <div className="md:hidden flex items-center space-x-4">
          <button className="p-2">
            <Search className="w-6 h-6 text-gray-700" />
          </button>
          <button className="p-2 relative">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-2 -right-0 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              1
            </span>
          </button>
          <button className="p-2 relative">
            <Heart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-2 -right-0 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              1
            </span>
          </button>
          <button 
            className="p-2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
            <div className="flex flex-col py-4">
              <a href="#" className="px-6 py-3 text-gray-800 hover:bg-gray-50">Home</a>
              <a href="#" className="px-6 py-3 text-gray-800 hover:bg-gray-50 flex items-center justify-between">
                Shop
                <ChevronDown className="w-4 h-4" />
              </a>
              <a href="#" className="px-6 py-3 text-gray-800 hover:bg-gray-50">About</a>
              <a href="#" className="px-6 py-3 text-gray-800 hover:bg-gray-50">Blog</a>
              <a href="#" className="px-6 py-3 text-gray-800 hover:bg-gray-50">Contact</a>
              <a href="#" className="px-6 py-3 text-gray-800 hover:bg-gray-50">Pages</a>
              <a href="#" className="px-6 py-3 text-blue-500">Login / Register</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="flex-1 relative bg-red-700">
        <div className="absolute inset-0">
          <div className="relative h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
                  <div className="text-center space-y-6">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto font-light">
                      {slide.subtitle}
                    </p>
                    <div className="mt-8">
                      <button className="bg-blue-500 text-white px-8 py-3 rounded hover:bg-blue-600 transition-colors text-base font-medium">
                        Start Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Carousel Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full  hover:bg-white/20 transition-colors z-20"
            >
              <ChevronLeft className="w-10 h-10 text-white" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full  hover:bg-white/20 transition-colors z-20"
            >
              <ChevronRight className="w-10 h-10 text-white" />
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex  z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-16 h-2 rounded-sm transition-colors ${
                    index === currentSlide 
                      ? 'bg-white' 
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;