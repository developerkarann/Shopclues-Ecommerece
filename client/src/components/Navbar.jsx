import React from "react";
import {
  Search,
  ShoppingCart,
  Bell,
  Heart,
  MapPin
} from "lucide-react";
import MainNavLinks from "@/ui/MainNavLinks";
import { Link } from "react-router-dom";
import AcccountSidebar from "@/ui/AccountSidebar";
import HoverCard from "@/ui/HoverCart";
import HoverWishlist from "@/ui/HoverWishlist";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {


  const subNav = [
    {
      nav: 'Jaw Dropping Deals',
      link: 'jaw-Dropping-Deals'
    },
    {
      nav: 'Refurbished Mobile',
      link: 'refurbished-mobile'
    },
    {
      nav: 'Express Shipping',
      link: 'express-shipping'
    },
    {
      nav: "Men's Clothing",
      link: "Mens-Clothing"
    },
    {
      nav: "Women's Fashion",
      link: "womens-Fashion"
    },
    {
      nav: 'Footwear',
      link: 'footwear'
    },
    {
      nav: 'Kitchen-&-Dinning',
      link: ''
    },
    {
      nav: 'Audio-&-headphones',
      link: ''
    },
    {
      nav: 'bags-&-luggage',
      link: ''
    },
  ]


  return (
    <>
      <MobileNavbar />


      <div className="font-sans text-gray-800 hidden md:block">
        <div className="topHeader flex justify-between ">
          <div></div>
          <div className="flex gap-6 pt-2 px-4">
            <a href="#" className="text-xs text-gray-500 hover:underline">Sell With Us</a>
            <a href="#" className="text-xs text-gray-500 hover:underline">Contact Us</a>
            <a href="#" className="text-xs text-gray-500 hover:underline flex items-center space-x-1">
              <span>Download App</span>
              <span className="flex items-center space-x-1">
                <img src="https://img.icons8.com/ios-filled/12/000000/android-os.png" alt="Android" />
                <img src="https://img.icons8.com/ios-filled/12/000000/mac-os.png" alt="iOS" />
              </span>
            </a>
          </div>
        </div>

        {/* Header */}
        <header className="bg-white shadow-sm text-sm ">
          <div className="max-w-7xl mx-auto px-1 py-1 flex items-center justify-between mb-2">
            <Link to='/' className=" hidden md:block">
              <div className="flex items-center space-x-4">
                <img
                  src="/logo.png"
                  alt="ShopClues Logo"
                  className="w-38"
                />
              </div>
            </Link>

            {/* Mobile Navbar */}


            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-4 hidden md:block ">
              <div className="flex rounded overflow-hidden ">
                <div className="flex items-center px-3 bg-[#eaf7fb]">
                  <Search className="text-gray-500 w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="What is on your mind today?"
                  className="flex-1 px-3 py-2 bg-[#eaf7fb] outline-none"
                />
                <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold px-8 py-3 shadow-md hover:opacity-90 transition">
                  Search
                </button>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4 text-cyan-700 gap-2 ">

              <div className="text-md text-center ">
                <span className="font-medium text-black">202411</span>
                <div className="text-[12px] text-cyan-700 cursor-pointer">Change</div>
              </div>
              <div className="flex items-center space-x-4 text-cyan-700 gap-2 pt-3 ">
                <MapPin className="ml-[-10px]" />
                <Bell />

                <div className="relative group">
                  <Link to='/account'>  <Heart /> </Link>
                  <HoverWishlist />
                </div>

                <div className="relative group">
                  <Link to="/cart">
                    <ShoppingCart />
                  </Link>
                  <HoverCard />
                </div>
                <Link to="/login" >
                  <div className="relative group">
                    <span className="text-sm font-semibold text-black cursor-pointer">Sign In</span>
                    <AcccountSidebar />
                  </div>

                </Link>
              </div>
            </div>
          </div>

          {/* Main Nav */}
          <MainNavLinks />


          {/* Sub Nav */}
          <div className=" bg-white text-xs flex border-t border-gray-200  ">
            <div className="max-w-7xl mx-auto px-4 py-2 flex space-x-6 overflow-x-auto text-gray-600">

              {
                subNav.map((nav) => (
                  <Link to={`/category/${nav.link}`}>
                    <span className="cursor-pointer">{nav.nav}</span>
                  </Link>
                ))
              }
            </div>
          </div>
        </header >
      </div >
    </>
  );
};

export default Navbar;
