import { Heart } from "lucide-react";
import React from "react";

const CategoryPage = () => {
  const products = [
    {
      id: 1,
      title: "Casual Shoes",
      price: 599,
      originalPrice: 699,
      discount: "14% Off",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Fashlook Green Men's Casual Fashion Sneakers",
      price: 519,
      originalPrice: 1299,
      discount: "60% Off",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Red Casual Shoe by Heewaw",
      price: 720,
      originalPrice: 1199,
      discount: "40% Off",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Red Casual Shoe by Heewaw",
      price: 720,
      originalPrice: 1199,
      discount: "40% Off",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Red Casual Shoe by Heewaw",
      price: 720,
      originalPrice: 1199,
      discount: "40% Off",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f0f8fb] p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <aside className="md:col-span-1 bg-white p-4 rounded shadow-sm">
          {/* <h2 className="font-semibold mb-2">Category Filters</h2>
          <ul className="text-sm text-gray-700">
            <li className="font-medium">Footwear</li>
            <li className="ml-4">Men's Footwear</li>
            <li className="ml-8 text-blue-500">Casual Shoes</li>
          </ul>
          <hr className="text-gray-300 my-2" /> */}

          {/* Price Filter */}
          <div className="mb-4">
            <h3 className="font-semibold mb-1">
              Price <span className="text-blue-500 text-sm ml-2 cursor-pointer">Clear All</span>
            </h3>
            <div className="text-sm text-gray-700 space-y-1">
              {['Rs. 499 and Below (23)', 'Rs. 500 - Rs. 999 (49)', 'Rs. 1000 - Rs. 1999 (5)'].map((price, i) => (
                <label key={i} className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{price}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div className="mb-4">
            <h3 className="font-semibold mb-1">
              Size - IND/UK <span className="text-blue-500 text-sm ml-2 cursor-pointer">Clear All</span>
            </h3>
            <div className="text-sm text-gray-700 space-y-1">
              {['5 (1)', '6 (57)', '29K (6)'].map((size, i) => (
                <label key={i} className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div className="mb-4">
            <div className="text-sm text-gray-700 space-y-1">
              {['Axdy (1)', 'Appetent (8)', 'Blackburn (1)', 'Classica (1)', 'CLOGGER INTERNATIONAL (3)'].map((brand, i) => (
                <label key={i} className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{brand}</span>
                </label>
              ))}
              <span className="text-blue-500 cursor-pointer">View All</span>
            </div>
          </div>

          {/* Color Filter */}
          <div>
            <h3 className="font-semibold mb-1">
              Color <span className="text-blue-500 text-sm ml-2 cursor-pointer">Clear All</span>
            </h3>
            <input
              type="text"
              placeholder="Search By Color"
              className="w-full border px-2 py-1 text-sm mb-2"
            />
            <div className="text-sm text-gray-700 space-y-1 max-h-28 overflow-y-auto">
              {['Beige (2)', 'BoatShoes (2)', 'Loafers (4)'].map((color, i) => (
                <label key={i} className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{color}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Product List */}
        <main className="md:col-span-3">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <h2 className="text-lg font-semibold">Casual Shoes For Men</h2>
            <div className="text-sm text-gray-600 space-x-2 mt-2 md:mt-0">
              <span>Sort By:</span>
              <button className="hover:underline">High Price</button>
              <button className="hover:underline">Low Price</button>
              <button className="hover:underline">Popular Products</button>
              <button className="hover:underline">Best Selling</button>
              <button className="hover:underline">New Arrivals</button>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-4">77 Products Found</p>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded shadow-sm">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-contain"
                  />
                  <Heart className="absolute top-2 right-2 w-5 h-5 text-gray-400" />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-800">
                  {product.title}
                </p>
                <div className="text-sm mt-1">
                  <span className="font-semibold text-black">₹{product.price}</span>{" "}
                  <span className="line-through text-gray-500 text-xs">
                    ₹{product.originalPrice}
                  </span>{" "}
                  <span className="text-green-600">{product.discount}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Free Shipping</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CategoryPage;
