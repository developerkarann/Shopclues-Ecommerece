import {
    Heart,
    HelpCircle,
    Home,
    User
} from "lucide-react";
import { Link } from "react-router-dom";

const AcccountSidebar = () => {


    const tabs = [
        { key: "Orders", icon: <Home size={18} />, label: "My Orders" },
        { key: "Profile", icon: <User size={18} />, label: "My Profile" },
        { key: "Wishlist", icon: <Heart size={18} />, label: "My Wishlist", badge: 1 },
        { key: "Support", icon: <HelpCircle size={18} />, label: "Help & Support" },
    ];


    return (
        <>
            <div className="absolute right-0 mt-2 w-[250px]   bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
                <aside className="w-full md:w-64 h-[400px] border-r-8 border-gray-50 p-4">
                    <h2 className="text-xl text-cyan-600 font-bold mb-4">My Account</h2>
                    <nav className="space-y-4">
                        {tabs.map((tab,i) => (
                            <button
                            key={i}
                                className={`flex items-center justify-between w-full text-left px-2 py-1 rounded hover:cursor-pointer font-semibold`}
                            >
                                <Link to='/account'>
                                    <div className="flex items-center gap-2 text-gray-700">
                                        {tab.icon}
                                        <span className="text-gray-600">{tab.key}</span>
                                    </div>
                                    {/* {tab.badge !== undefined && (
                                        <span className="bg-cyan-500 text-white text-xs px-2 py-0.5 rounded-full">
                                            {tab.badge}
                                        </span>
                                    )} */}
                                </Link>
                            </button>

                        ))}
                    </nav>
                </aside>
            </div>
        </>
    )
}




export default AcccountSidebar