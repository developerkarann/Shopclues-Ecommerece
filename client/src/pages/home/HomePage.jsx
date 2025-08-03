import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import ProductCard from "../../components/ProductCard";
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="font-sans text-gray-800 bg-[#f1f7fc] min-h-screen pb-20 ">
      {/* Hero Banner */}
      <div className="max-w-7xl  mx-auto  px-4 py-4 grid grid-cols-4 gap-10">
        <div className="col-span-3 bg-white h-86 rounded shadow-sm" >
          <img src="https://plus.unsplash.com/premium_photo-1677995700941-100976883af7?q=80&w=923&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=" h-86 w-7xl"
            alt="" />
        </div>
        <div className="bg-white w-68 h-[400px] invisible lg:visible rounded shadow-sm">
          {
            [1, 2, 3,].map((item, i) => (
              <div className="item flex flex-col max-h-35 p-2 justify-center items-center">
                <img
                  className="h-20 w-10"
                  src="/images/iphone.png" alt="" />
                <p className="cat text-sm mt-[-4px]">Refub Store</p>
                <p className="title font-bold mt-[-6px]">Shop Now</p>
              </div>
            ))
          }
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {[
          "Branded Deals",
          "Deals of the Day",
          "Men's Clothing",
          "Footwear"
        ].map((title, index) => (
          <SectionBlock key={index} title={title} category={title === "Branded Deals" ||
            title === 'Deals of the Day' ||
            title === "Men's Clothing" ||
            title === "Footwear"
          } />
        ))}
      </div>
    </div>
  );
};

const SectionBlock = ({ title, category = false }) => {
  // const items = category
  //   ? [
  //     {
  //       title: "3-in-1 Cable 0.29 m A3 Micro...",
  //       price: "₹199",
  //       original: "₹999",
  //       off: "80% off",
  //       image: "https://unsplash.com/photos/unpaired-gray-nike-running-shoe-LxVxPA1LOVM"
  //     },
  //     {
  //       title: "Digimate Transbud Earbuds...",
  //       price: "₹469",
  //       original: "₹1999",
  //       off: "77% off",
  //       image: "https://unsplash.com/photos/unpaired-gray-nike-running-shoe-LxVxPA1LOVM"
  //     },
  //     {
  //       title: "Type C 6.8A Wall Charger",
  //       price: "₹419",
  //       original: "₹999",
  //       off: "58% off",
  //       image: "https://unsplash.com/photos/unpaired-gray-nike-running-shoe-LxVxPA1LOVM"
  //     },
  //     {
  //       title: "Foldable Mobile Stand for S...",
  //       price: "₹519",
  //       original: "₹999",
  //       off: "48% off",
  //       image: "https://unsplash.com/photos/unpaired-gray-nike-running-shoe-LxVxPA1LOVM"
  //     },
  //     {
  //       title: "Zebronics Newly Launched ...",
  //       price: "₹799",
  //       original: "₹1799",
  //       off: "56% off",
  //       image: "https://unsplash.com/photos/unpaired-gray-nike-running-shoe-LxVxPA1LOVM"
  //     },
  //     {
  //       title: "Sony BRAVIA 80 cm (32 inc...",
  //       price: "₹27269",
  //       original: "₹34900",
  //       off: "22% off",
  //       image: "https://unsplash.com/photos/unpaired-gray-nike-running-shoe-LxVxPA1LOVM"
  //     },
  //     {
  //       title: "Sony BRAVIA 2 Series 108...",
  //       price: "₹39929",
  //       original: "₹59900",
  //       off: "33% off",
  //       image: "https://unsplash.com/photos/unpaired-gray-nike-running-shoe-LxVxPA1LOVM"
  //     },
  //     {
  //       title: "Sony BRAVIA 2 Series 108...",
  //       price: "₹44939",
  //       original: "₹69900",
  //       off: "36% off",
  //       image: "https://unsplash.com/photos/unpaired-gray-nike-running-shoe-LxVxPA1LOVM"
  //     },
  //     {
  //       title: "Sony BRAVIA 2 Series 126...",
  //       price: "₹58149",
  //       original: "₹85900",
  //       off: "32% off",
  //       image: "https://unsplash.com/photos/unpaired-gray-nike-running-shoe-LxVxPA1LOVM"
  //     },
  //     {
  //       title: "Acer 80 cm (32 inches) P...",
  //       price: "₹12449",
  //       original: "₹22999",
  //       off: "38% off",
  //       image: "https://unsplash.com/photos/unpaired-gray-nike-running-shoe-LxVxPA1LOVM"
  //     },
  //     {
  //       title: "Acer 80 cm (32 inches) V ...",
  //       price: "₹17119",
  //       original: "₹24999",
  //       off: "32% off",
  //       image: "https://unsplash.com/photos/unpaired-gray-nike-running-shoe-LxVxPA1LOVM"
  //     }
  //   ].slice(0, title === "Television bestsellers" ? 6 : 5)
  //   : [];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample products data
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      rating: 4.5,
      originalPrice: 129.99
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      rating: 4.8,
      originalPrice: 299.99
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      rating: 4.3,
      originalPrice: 99.99
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
      rating: 4.6,
      originalPrice: 79.99
    },
    {
      id: 5,
      name: "Phone Case",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=300&fit=crop",
      rating: 4.2,
      originalPrice: 34.99
    },
    {
      id: 6,
      name: "Wireless Charger",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
      rating: 4.4,
      originalPrice: 54.99
    },
    {
      id: 7,
      name: "Wireless Charger",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
      rating: 4.4,
      originalPrice: 54.99
    }
  ];

  const itemsPerView = 5;
  const maxIndex = Math.max(0, products.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className=" text-2xl font-semibold text-gray-700">{title}</h2>
        {category && (
          <button className="flex items-center space-x-1 text-cyan-700 text-sm">
            <span>View All</span>
            <ArrowRight size={16} />
          </button>
        )}
      </div>



      {category && (
        <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide bg-white">

          <div className="relative flex">

            {/* Left Arrow - Only visible if can go previous */}
            {canGoPrevious && (
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full shadow-lg p-3 hover:bg-gray-50 transition-all duration-200 border border-gray-200"
                aria-label="Previous products"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
            )}

            {/* Right Arrow - Only visible if can go next */}
            {canGoNext && (
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full shadow-lg p-3 hover:bg-gray-50 transition-all duration-200 border border-gray-200"
                aria-label="Next products"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            )}

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
              >
                {products.map((product) => (

                  <ProductCard product={product} />

                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default HomePage;
