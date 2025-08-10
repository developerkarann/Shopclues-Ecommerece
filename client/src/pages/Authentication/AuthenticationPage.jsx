import {
  CreditCard,
  Facebook,
  Percent,
  ShoppingCart
} from "lucide-react";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { loginUser, registerUser } from "../../redux/slices/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AuthenticationPage() {


  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [activeTab, setActiveTab] = useState("login");
  const [loading , setLoading] = useState(false)

  const handleRegister = async (e) => {
    setLoading(true)
    e.preventDefault()

    const email = e.target.email.value;
    const password = e.target.email.value;
    const address = e.target.email.value;

    try {
      const res = await dispatch(registerUser({ email, password, address })).unwrap()
      toast.success(res.message)
    } catch (error) {
      console.log('Register User', error);
      toast.error(error)
    }finally{
      setLoading(false)
    }

  }

  const handleLogin = async (e) => {
    setLoading(true)
    e.preventDefault()

    const email = e.target.email.value;
    const password = e.target.email.value;
    try {
      const res = await dispatch(loginUser({ email, password })).unwrap()
      toast.success(res.message)
     navigate('/')
      // console.log(res)
    } catch (error) {
      console.log('Login User', error);
      toast.error(error)
    }finally{
      setLoading(false)
    }

  }

  return (
    <div className="flex justify-center items-center px-4 py-45 z-50">
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
          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6 flex space-x-6">
            <button
              className={`pb-2 px-1 font-medium text-sm border-b-2 ${activeTab === "login"
                ? "border-cyan-500 text-cyan-500"
                : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              onClick={() => setActiveTab("login")}
            >
              LOGIN
            </button>
            <button
              className={`pb-2 px-1 font-medium text-sm border-b-2 ${activeTab === "register"
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
            <form className="space-y-6 max-w-md" onSubmit={handleLogin}>
              <div className="relative">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your mobile number or email id"
                  className="block w-full appearance-none border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-500 px-1 py-2 placeholder-gray-400"
                />
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="block w-full mt-5 appearance-none border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-500 px-1 py-2 placeholder-gray-400"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full border hover:cursor-pointer border-cyan-500 text-cyan-600 font-semibold py-2 rounded transition hover:bg-cyan-50"
              >
                {loading ? 'Please wait...' : 'Login'}
              </button>

            </form>
          )}

          {activeTab === "register" && (
            <form className="space-y-6 max-w-md" onSubmit={handleRegister}>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  className="block w-full border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-500 px-1 py-2 placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="block w-full border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-500 px-1 py-2 placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Your address"
                  className="block w-full border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-orange-500 px-1 py-2 placeholder-gray-400"
                />
              </div>
              <button
                type="submit"
                className="w-full border border-cyan-500 hover:cursor-pointer text-cyan-600 font-semibold py-2 rounded transition hover:bg-cyan-50"
              >
                  {loading ? 'Creating account...' : 'Register'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

