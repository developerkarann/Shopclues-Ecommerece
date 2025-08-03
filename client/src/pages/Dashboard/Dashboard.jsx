import {
  Heart,
  HelpCircle,
  Home,
  User
} from "lucide-react";
import { useState } from "react";
import MyOrders from "./MyOrders";
import MyWishlist from "./MyWishlist";

const tabs = [
  { key: "Orders", icon: <Home size={18} />, label: "My Orders" },
  // { key: "Bucks", icon: <ShoppingCart size={18} />, label: "My Clues Bucks", badge: 0 },
  // { key: "BucksStar", icon: <ShoppingCart size={18} />, label: "My Clues Bucks*", badge: 0 },
  { key: "Profile", icon: <User size={18} />, label: "My Profile" },
  // { key: "Rate", icon: <Star size={18} />, label: "Rate Your Purchase" },
  { key: "Wishlist", icon: <Heart size={18} />, label: "My Wishlist", badge: 1 },
  // { key: "Stores", icon: <Store size={18} />, label: "My Favorite Stores" },
  { key: "Support", icon: <HelpCircle size={18} />, label: "Help & Support" },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Orders");

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="flex flex-col md:flex-row bg-white shadow rounded-xl overflow-hidden gap-4">
        {/* Sidebar */}
        <aside className="w-full md:w-64 h-[400px] border-r-8 border-gray-50 p-4">
          <h2 className="text-xl text-cyan-600 font-bold mb-4">My Account</h2>
         
          <nav className="space-y-4">
            {tabs.map((tab) => (
              <NavItem
                key={tab.key}
                icon={tab.icon}
                text={tab.label}
                badge={tab.badge}
                active={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key)}
              />
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4">
          {activeTab === "Orders" && (
             <MyOrders/>
          )}

          {activeTab === "Wishlist" && (
        
              <MyWishlist/>
   
          )}

          {activeTab !== "Orders" && (
            <div className="text-gray-600 text-center mt-10 text-lg">
              {tabs.find((t) => t.key === activeTab)?.label}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function NavItem({ icon, text, badge, onClick, active }) {
  return (
    <button
      className={`flex items-center justify-between w-full text-left px-2 py-1 rounded hover:bg-gray-100 ${active ? "bg-cyan-100 font-semibold" : ""}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-2 text-gray-700">
        {icon}
        <span>{text}</span>
      </div>
      {badge !== undefined && (
        <span className="bg-cyan-500 text-white text-xs px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
}
