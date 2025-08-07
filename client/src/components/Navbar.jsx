import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  Bell,
  Heart,
  MapPin
} from "lucide-react";
import MainNavLinks from "../ui/MainNavLinks";
import { Link, useNavigate } from "react-router-dom";
import AcccountSidebar from "../ui/AccountSidebar";
import HoverCard from "../ui/HoverCart";
import HoverWishlist from "../ui/HoverWishlist";
import MobileNavbar from "./MobileNavbar";
import { useSelector } from "react-redux";

const Navbar = ({ searchTerm, setSearchTerm }) => {

  const wishlist = useSelector((state) => state.wishlist)
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate()


  const subNav = [
    {
      nav: 'Jaw Dropping Deals',
      link: 'jaw-Dropping-Deals'
    },
    {
      nav: 'Refurbished Mobile',
      link: 'mobile'
    },
    {
      nav: 'Express Shipping',
      link: 'express-shipping'
    },
    {
      nav: "Men's Clothing",
      link: "mens-Clothing"
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
      link: 'kitchen-&-Dinning'
    },
    {
      nav: 'Audio-&-headphones',
      link: 'audio'
    },
    {
      nav: 'bags-&-luggage',
      link: 'bags'
    },
  ]

  const manNav = [
    "Gaming",
    "Audio",
    "Mobile",
    "TV"
  ]



  return (
    <>
      <MobileNavbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />


      <div className="font-sans text-gray-800 hidden md:block fixed w-full bg-white z-50">
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
            <div className="flex-1 relative max-w-2xl mx-4 hidden md:block ">
         
                <div className="flex rounded overflow-hidden ">
                  <div className="flex items-center px-3 bg-[#eaf7fb]">
                    <Search className="text-gray-500 w-4 h-4" />
                  </div>
                  <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    placeholder="What is on your mind today?"
                    className="flex-1 px-3 py-2 bg-[#eaf7fb] outline-none"
                  />
                  <button type="submit" className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold px-8 py-3 shadow-md hover:opacity-90 transition">
                    Search
                  </button>
                </div>
           
            </div>



            {/* Right side */}
            <div className="flex items-center space-x-4 text-cyan-700 gap-2 ">

              <div className="text-md text-center ">
                <span className="font-medium text-black">20xx51</span>
                <div className="text-[12px] text-cyan-700 cursor-pointer">Change</div>
              </div>
              <div className="flex items-center space-x-4 text-cyan-700 gap-2 pt-3 ">
                <MapPin className="ml-[-10px]" />
                <Bell />

                <div className="relative group">
                  {/* <Link to='/wishlist'>  <Heart /> </Link> */}

                  <Link to="/wishlist" className="relative inline-block">
                    <Heart className="w-6 h-6 text-gray-700" />

                    {wishlist.length > 0 && (
                      <span className="absolute -top-2 -right-3 bg-cyan-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                        {wishlist.length}
                      </span>
                    )}
                  </Link>
                  <HoverWishlist />
                </div>

                <div className="relative group">
                  <Link to="/cart" className="relative inline-block">
                    <ShoppingCart className="w-6 h-6 text-gray-700" />

                    {cart.length > 0 && (
                      <span className="absolute -top-2 -right-3 bg-cyan-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                        {cart.length}
                      </span>
                    )}
                  </Link>
                  <HoverCard />
                </div>
                <Link to="/login" >
                  <div className="relative group">
                    <span className="text-sm font-semibold text-black cursor-pointer">Sign In</span>
                    {/* <AcccountSidebar /> */}
                  </div>

                </Link>
              </div>
            </div>
          </div>

          {/* Main Nav */}
          <div className="bg-cyan-600 text-white  text-base flex ">
            <div className=" max-w-7xl mx-auto px-4 py-2 flex space-x-5">
              <Link to={`/products`}  >
                <span className="hover:cursor-pointer">All Product</span>
              </Link>
              {manNav.map((nav, i) => (
                <Link to={`/products/${nav.toLocaleLowerCase()}`} key={i} >
                  <span className="hover:cursor-pointer">{nav}</span>
                </Link>
              ))}
            </div>

          </div>


          {/* Sub Nav */}
          <div className=" bg-white text-xs flex border-t border-gray-200  ">
            <div className="max-w-7xl mx-auto px-4 py-2 flex space-x-6 overflow-x-auto text-gray-600">

              {
                subNav.map((nav) => (
                  <Link to={`/products/${nav.link}`}>
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
