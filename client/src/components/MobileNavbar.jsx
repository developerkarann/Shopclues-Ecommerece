import {
    Heart,
    Search,
    ShoppingCart,
    MenuIcon,
    UserRound,
    X,
    MoveLeft,
    ArrowLeft
} from "lucide-react";
import { useState } from "react";

import { Link } from "react-router-dom";

const MobileNavbar = () => {

    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [typingTimeout, setTypingTimeout] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' }
    ];



    const keywordSuggestions = [
        "MOBILES & MORE",
        "MEN",
        "WOMEN",
        "HOME & KITCHEN",
        "APPLIANCES",
        "SPORTS & MORE",
        "OFFERS",
        "GLOBAL SHOPPING",
    ];

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        // Clear any previous timeout
        if (typingTimeout) clearTimeout(typingTimeout);

        // Set a new timeout to simulate debounce (300ms)
        const timeout = setTimeout(() => {
            if (value.trim() !== '') {
                const filtered = keywordSuggestions.filter((item) =>
                    item.toLowerCase().includes(value.toLowerCase())
                );
                setSuggestions(filtered);
            } else {
                setSuggestions([]);
            }
        }, 300);

        setTypingTimeout(timeout);
    };


    const handleSuggestionClick = (value) => {
        setQuery(value);
        setSuggestions([]);
    };


    return (
        <>
            <div className="font-sans text-gray-800 block md:hidden">
                <header className="bg-white shadow-sm text-sm pb-3">
                    <div className="mobile-nav w-full  ">
                        <div className="top-section flex justify-between items-center mb-2">

                            <div className="flex gap-2 justify-center items-center p-3" >
                                <button
                                    onClick={toggleMenu}
                                >
                                    {
                                        isMenuOpen ? (<X />) : (<MenuIcon />)
                                    }
                                </button>

                                <Link to='/'>
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src="/logo.png"
                                            alt="ShopClues Logo"
                                            className="w-30 "
                                        />
                                    </div>
                                </Link>
                            </div>


                            <div className="flex items-center space-x-4 text-cyan-700 gap-2 ">

                                <div className="flex items-center space-x-4 text-cyan-700 gap-2 pt-3 ">

                                    <div className="relative group">
                                        <Link to='/account'>  <Heart /> </Link>

                                    </div>

                                    <div className="relative group">
                                        <Link to="/cart">
                                            <ShoppingCart />
                                        </Link>
                                    </div>
                                    <Link to="/login" >
                                        <UserRound />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="botton-section relative">
                            <div className="flex-1 max-w-2xl mx-4 ">
                                <div className="flex rounded overflow-hidden ">
                                    <div className="flex items-center px-3 bg-[#eaf7fb]">
                                        <Search className="text-gray-500 w-4 h-4" />
                                    </div>
                                    <input
                                        value={query}
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder="What is on your mind today?"
                                        className="flex-1 px-3 py-2 bg-[#eaf7fb] outline-none"
                                    />
                                    <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold px-8 py-3 shadow-md hover:opacity-90 transition">
                                        Search
                                    </button>
                                </div>
                            </div>

                            {suggestions.length > 0 && (
                                <ul className="absolute w-full bg-white rounded-b shadow-2xl z-10 py-5">
                                    {suggestions.map((item, idx) => (
                                        <li
                                            key={idx}
                                            onClick={() => handleSuggestionClick(item)}
                                            className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>


                    <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${isMenuOpen
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                        }`}>
                        {/* Backdrop */}
                        <div
                            className={`absolute inset-0 bg-black/20 backdrop-blur-xs transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'
                                }`}
                            onClick={closeMenu}
                        ></div>

                        {/* Menu Panel */}
                        <div className={`absolute top-0 left-0 h-full w-[50%] bg-white/95 backdrop-blur-md border-l border-purple-500/30 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                            }`}>
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="flex bg-cyan-600 items-center gap-10 h-16 px-4 ">
                                    <ArrowLeft onClick={closeMenu} className=" text-white" />
                                    <Link to='/' className="">
                                        <div className="flex items-center space-x-4">
                                            <img
                                                src="/logo.png"
                                                alt="ShopClues Logo"
                                                className="w-38"
                                            />
                                        </div>
                                    </Link>
                                </div>

                                {/* Navigation Items */}
                                <div className="flex-1 px-4 py-8">
                                    <div className="space-y-6 text-black">
                                        <div className="relative group">
                                            <span className="hover:cursor-pointer">MOBILES & MORE</span>
                                            {/* Subtabs  */}

                                        </div>

                                        <div className="relative group">
                                            <span className="hover:cursor-pointer">MEN</span>

                                        </div>
                                        <div className="relative group">
                                            <span className="hover:cursor-pointer">WOMEN</span>

                                        </div>
                                        <div className="relative group">
                                            <span className="hover:cursor-pointer">HOME & KITCHEN</span>

                                        </div>
                                        <div className="relative group">
                                            <span className="hover:cursor-pointer">APPLIANCES</span>

                                        </div>
                                        <div className="relative group">
                                            <span className="hover:cursor-pointer">SPORTS & MORE</span>

                                        </div>
                                        <div className="relative group">

                                        </div>
                                        <div className="relative group">
                                            <span className="hover:cursor-pointer">OFFERS</span>

                                        </div>
                                        <div className="relative group">
                                            <span className="hover:cursor-pointer">GLOBAL SHOPPING</span>

                                        </div>

                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="px-4 py-6 border-t border-purple-500/30">
                                    <div className="text-center text-gray-400 text-sm">
                                        © 2025 Karanpal.in
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </header>
            </div>


        </>
    )
}

export default MobileNavbar