import {
  Heart,
  Package,
  Search,
  ShoppingCart
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../redux/slices/auth";
import HoverCard from "../ui/HoverCart";
import HoverWishlist from "../ui/HoverWishlist";
import MobileNavbar from "./MobileNavbar";
import HoverOrders from "../ui/HoverOrders";

const Navbar = ({ searchTerm, setSearchTerm }) => {

  const wishlist = useSelector((state) => state.wishlist)
  const cart = useSelector((state) => state.cart.data);
  const token = useSelector((state) => state.auth.token)
  const user = useSelector((state) => state.auth.user)
  const orders = useSelector((state) => state.orders.data)

  const navigate = useNavigate()
  const dispatch = useDispatch()


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

  const handleLogout = () => {
    dispatch(logout())
    toast.success('Logged Out!')
  }


  return (
    <>
      <MobileNavbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />


      <div className="font-sans text-gray-800 hidden md:block fixed w-full bg-white z-50">

        {/* Header */}
        <header className="bg-white shadow-sm text-sm pt-2">
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
              <div className="flex items-center space-x-4 text-cyan-700 gap-3 pt-3 ">

                <div className="relative group">
                  <Link to="/wishlist" className="relative inline-block">
                    <Heart className="w-7 h-7 " />

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
                    <ShoppingCart className="w-7 h-7 " />

                    {token ? cart.length > 0 && (
                      <span className="absolute -top-2 -right-3 bg-cyan-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                        {cart.length}
                      </span>
                    ) : ''}
                  </Link>
                  {
                    token ? <HoverCard /> : <></>
                  }

                </div>
                <div className="relative group">
                  <Link to="/orders" className="relative inline-block">
                    <Package className="w-7 h-7 " />

                    {token ? orders.length > 0 && (
                      <span className="absolute -top-2 -right-3 bg-cyan-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                        {orders.length}
                      </span>
                    ) : ''}
                  </Link>
                  {
                    token ? <HoverOrders /> : <></>
                  }

                </div>
                {
                  token ? <>
                    <div className="relative group">
                      <span onClick={handleLogout} className="text-sm font-semibold text-cyan-700 cursor-pointer">Logout</span>
                    </div>
                  </> : <>
                    <Link to="/login" >
                      <div className="relative group">
                        <span className="text-sm font-semibold text-cyan-700 cursor-pointer">Sign In</span>
                      </div>

                    </Link>
                  </>
                }

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
                subNav.map((nav, i) => (
                  <Link to={`/products/${nav.link}`} key={i}>
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
