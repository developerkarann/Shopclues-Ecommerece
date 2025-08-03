import React from "react";
import { ArrowLeft, Plus, Minus, Info } from "lucide-react";

const CheckoutPage = () => {
  return (
    <div className="bg-[#f5fbfc] min-h-screen p-4 md:p-8">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-6">
        <ArrowLeft className="w-5 h-5" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/ShopClues_Logo.png/320px-ShopClues_Logo.png"
          alt="ShopClues Logo"
          className="h-5"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left - Cart Items */}
        <div className="flex-1 bg-white p-4 rounded shadow-sm">
          <div className="mb-4">
            <h2 className="font-semibold text-lg">Shipping to : Home, karanpal</h2>
            <p className="text-sm text-gray-600">
              1st floor Shiva studio Opposite vikas khand bilari , Bilari , UP ,
              202411 | Mob - 8869012507
            </p>
            <button className="text-sm text-blue-500 mt-1">Change</button>
          </div>

          <h3 className="font-semibold text-base mb-2">2 Items in Cart</h3>

          {/* Item 1 */}
          <div className="flex items-start space-x-4 py-4 border-b">
            <img
              src="https://images.unsplash.com/photo-1600185364722-34a8178bd3f9"
              alt="Casual Shoes"
              className="w-20 h-20 object-contain"
            />
            <div className="flex-1">
              <p className="text-sm font-medium">Casual Shoes</p>
              <p className="text-xs text-gray-600">
                Color : Blue, Size - IND/UK : 7
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <Minus className="w-4 h-4 cursor-pointer" />
                <span className="text-sm">2</span>
                <Plus className="w-4 h-4 cursor-pointer" />
              </div>
              <button className="text-xs text-blue-500 mt-2">Remove</button>
            </div>
            <div className="text-right">
              <p className="font-semibold">₹ 1,198</p>
              <p className="text-xs text-gray-500">Inclusive of all taxes</p>
              <button className="text-gray-500 text-xs flex items-center mt-1">
                <Plus className="w-3 h-3 mr-1" /> Details
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start space-x-4 py-4">
            <img
              src="https://images.unsplash.com/photo-1580910051076-d4f6204e108f"
              alt="Cable"
              className="w-20 h-20 object-contain"
            />
            <div className="flex-1">
              <p className="text-sm font-medium">
                Digimate 3-in-1 Cable 0.29 m A3 Micro USB
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <Minus className="w-4 h-4 cursor-pointer" />
                <span className="text-sm">2</span>
                <Plus className="w-4 h-4 cursor-pointer" />
              </div>
              <button className="text-xs text-blue-500 mt-2">Remove</button>
            </div>
            <div className="text-right">
              <p className="font-semibold">₹ 398</p>
              <p className="text-xs text-gray-500">Inclusive of all taxes</p>
              <button className="text-gray-500 text-xs flex items-center mt-1">
                <Plus className="w-3 h-3 mr-1" /> Details
              </button>
            </div>
          </div>
        </div>

        {/* Right - Summary */}
        <div className="w-full lg:w-1/3 bg-white p-4 rounded shadow-sm">
          <p className="text-green-600 font-medium mb-2">
            1 Offer Applicable on this order
          </p>
          <div className="flex justify-between text-sm mb-4">
            <p>No CB/CB+ Available</p>
            <button className="text-blue-500">Redeem</button>
          </div>

          <hr className="my-2" />

          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span>Total Order Value</span>
              <span>₹ 1,996</span>
            </div>
            <div className="flex justify-between">
              <span>Total Discount</span>
              <span className="text-green-600">-₹ 400</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Grand Total</span>
              <span>₹ 1,596</span>
            </div>
            <p className="text-xs text-gray-500">
              Inclusive of all the applicable taxes
            </p>
          </div>

          <button className="mt-4 w-full bg-gradient-to-r from-orange-400 to-red-400 text-white font-semibold py-2 rounded">
            Proceed to Payments
          </button>

          <div className="mt-4 flex items-start text-xs text-gray-600">
            <Info className="w-4 h-4 mr-1 mt-0.5" />
            <p>Secure Payment, Easy Returns & Refunds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
