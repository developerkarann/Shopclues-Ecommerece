import {
    ArrowLeft,
    Heart,
    LogOut,
    MenuIcon,
    Search,
    ShoppingCart,
    UserRound,
    X,
  Package,

} from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../redux/slices/auth";

const MobileNavbar = ({ searchTerm, setSearchTerm }) => {


    const wishlist = useSelector((state) => state.wishlist)
    const cart = useSelector((state) => state.cart);
    const token = useSelector((state) => state.auth.token)
  const orders = useSelector((state) => state.orders.data)


    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const navItems = [
        { name: 'HOME', href: '/' },
        { name: 'PRODUCTS', href: '/products' },
        { name: 'VIEW CART', href: '/cart' },
        { name: 'VIEW WISHLIST', href: '/wishlist' },
        { name: 'LOGIN', href: '/login' }
    ];



    const handleLogout = () => {
        dispatch(logout())
        toast.success('Logged Out!')
    }

    return (
        <>
            <div className="font-sans text-gray-800 block md:hidden fixed w-full bg-white z-50">
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


                            <div className="flex items-center space-x-4 text-cyan-700 gap-2 pr-6 ">

                                <div className="flex items-center space-x-4 text-cyan-700 gap-2 pt-3 ">


                                    <div className="relative group">
                                        {/* <Link to='/wishlist'>  <Heart /> </Link> */}

                                        <Link to="/wishlist" className="relative inline-block">
                                            <Heart className="w-6 h-6 " />

                                            {wishlist.length > 0 && (
                                                <span className="absolute -top-2 -right-3 bg-cyan-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                                                    {wishlist.length}
                                                </span>
                                            )}
                                        </Link>

                                    </div>

                                    <div className="relative group">
                                        <Link to="/cart" className="relative inline-block">
                                            <ShoppingCart className="w-6 h-6 " />

                                            {token ? cart.length > 0 && (
                                                <span className="absolute -top-2 -right-3 bg-cyan-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                                                    {cart.length}
                                                </span>
                                            ) : ''}
                                        </Link>

                                    </div>

                                    <div className="relative group">
                                        <Link to="/orders" className="relative inline-block">
                                            <Package className="w-6 h-6 " />

                                            {token ? orders.length > 0 && (
                                                <span className="absolute -top-2 -right-3 bg-cyan-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                                                    {orders.length}
                                                </span>
                                            ) : ''}
                                        </Link>
                                    </div>

                                    {
                                        token ? <>
                                            <LogOut onClick={handleLogout} />
                                        </> : <>
                                            <Link to="/login" >
                                                <UserRound />
                                            </Link>
                                        </>
                                    }
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
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        type="text"
                                        placeholder="What is on your mind today?"
                                        className="flex-1 px-3 py-2 bg-[#eaf7fb] outline-none"
                                    />
                                    <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold px-8 py-3 shadow-md hover:opacity-90 transition">
                                        Search
                                    </button>
                                </div>
                            </div>


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
                                        <div className="flex flex-col gap-10  text-base" >
                                            {
                                                navItems.map((item, i) => (
                                                    <Link to={item.href} key={i} onClick={closeMenu} >{item.name} </Link>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="px-4 py-6 border-t border-purple-500/30">
                                    <div className="text-center text-gray-400 text-sm">
                                        © 2025 Shopclues.com
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