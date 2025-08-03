import React, { useState } from "react";
import {
  X,
  ShoppingCart,
  CheckCircle2,
  CreditCard,
  Percent,
  Facebook,
} from "lucide-react";

export default function AuthenticationPage({ onClose }) {
  const [activeTab, setActiveTab] = useState("login"); // 'login' or 'register'
  

  return (
    <div className="flex justify-center items-center px-4 py-6 z-50">
      <div className="bg-white rounded-md shadow-lg w-full max-w-4xl flex flex-col md:flex-row relative">
        {/* Left Side Info Panel */}
        <div className="bg-gray-50 md:w-80 p-8 flex flex-col space-y-10 text-center text-gray-600">
          <div className="flex flex-col items-center gap-3">
            <CreditCard className="w-10 h-10 text-gray-400" />
            <h3 className="font-semibold text-gray-800">Loyalty Points</h3>
            <p className="text-xs text-gray-400 leading-tight">
              Earn CluesBucks on prepaid orders
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <ShoppingCart className="w-10 h-10 text-gray-400" />
            <h3 className="font-semibold text-gray-800">Instant Checkout</h3>
            <p className="text-xs text-gray-400 leading-tight">
              Hassle-Free Payment Everytime
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Percent className="w-10 h-10 text-gray-400" />
            <h3 className="font-semibold text-gray-800">Exclusive Offers</h3>
            <p className="text-xs text-gray-400 leading-tight">
              For special offers &amp; value deals
            </p>
          </div>
        </div>

        {/* Right Side Form Panel */}
        <div className="flex-1 p-8 relative">
          {/* Close button */}
          {/* <button
            aria-label="Close Modal"
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-600 hover:text-gray-900 transition"
          >
            <X className="w-6 h-6" />
          </button> */}

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6 flex space-x-6">
            <button
              className={`pb-2 px-1 font-medium text-sm border-b-2 ${
                activeTab === "login"
                  ? "border-cyan-500 text-cyan-500"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("login")}
            >
              LOGIN
            </button>
            <button
              className={`pb-2 px-1 font-medium text-sm border-b-2 ${
                activeTab === "register"
                  ? "border-cyan-500 text-cyan-500"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("register")}
            >
              REGISTER
            </button>
          </div>

          {/* Form Content */}
          {activeTab === "login" && (
            <form className="space-y-6 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  name="login-credential"
                  id="login-credential"
                  placeholder="Enter your mobile number or email id"
                  className="block w-full appearance-none border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-500 px-1 py-2 placeholder-gray-400"
                />
              </div>
              <button
                type="submit"
                className="w-full border border-orange-500 text-orange-600 font-semibold py-2 rounded transition hover:bg-orange-50"
              >
                Login via OTP
              </button>
              <div>
                <p className="text-sm font-semibold mb-2">Social Login</p>
                <button
                  type="button"
                  className="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded text-sm"
                >
                  <Facebook className="w-4 h-4" />
                  Continue with Facebook
                </button>
              </div>
            </form>
          )}

          {activeTab === "register" && (
            <form className="space-y-6 max-w-md">
              <div>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  placeholder="Full Name"
                  className="block w-full border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-500 px-1 py-2 placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="block w-full border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-500 px-1 py-2 placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile Number"
                  className="block w-full border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-500 px-1 py-2 placeholder-gray-400"
                />
              </div>
              <button
                type="submit"
                className="w-full border border-orange-500 text-orange-600 font-semibold py-2 rounded transition hover:bg-orange-50"
              >
                Register
              </button>
              <div>
                <p className="text-sm font-semibold mb-2">Social Signup</p>
                <button
                  type="button"
                  className="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded text-sm"
                >
                  <Facebook className="w-4 h-4" />
                  Continue with Facebook
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

