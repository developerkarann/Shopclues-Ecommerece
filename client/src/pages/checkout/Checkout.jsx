import React, { useState } from "react";
import { Home, Building, MapPin, Phone, Truck, CheckSquare, Landmark, ArrowLeft, Plus, Minus, Info } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../../components/CartCard";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



const Checkout = ({ total = 1596 }) => {


  const cart = useSelector((state) => state.cart.data);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [step, setStep] = useState(1);
  const [shippingData, setShippingData] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
    pin: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("COD");

  const steps = [
    { id: 1, title: "Shipping Details", icon: <Truck className="w-6 h-6" /> },
    { id: 2, title: "Confirm Order", icon: <CheckSquare className="w-6 h-6" /> },
    { id: 3, title: "Payment", icon: <Landmark className="w-6 h-6" /> },
  ];

  //  Check if step is valid before moving forward
  const isStepValid = (targetStep) => {
    if (targetStep === 2) {
      return (
        shippingData.street.trim() &&
        shippingData.city.trim() &&
        shippingData.state.trim() &&
        shippingData.country.trim() &&
        shippingData.pin.trim() &&
        shippingData.phone.trim()
      );
    }
    if (targetStep === 3) {
      return true; // Order summary doesn't need validation in this example
    }
    return true;
  };

  const handleTabClick = (targetStep) => {
    if (targetStep <= step || isStepValid(targetStep)) {
      setStep(targetStep);
    } else {
      toast.error("Please complete the required fields before continuing.");
    }
  };


  const paymentMethods = [
    { name: "COD", disabled: false },
    { name: "Online", disabled: true},
    { name: "NET Banking", disabled: true },
  ];

  const totalValue = cart.reduce((acc, val) => acc + val.price, 0)
  const totalDiscount = cart.reduce((acc, val) => acc + val.discount, 0)
  const grandTotal = totalValue - totalDiscount

  const handleCreateOrder = async (e) => {
    e.preventDefault()

    if (!token) {
      return navigate('/login')
    }
    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER}/neworder`, { items: cart, shippingAddress: shippingData, paymentMethod, totalAmount: grandTotal }, {
        headers: {
          Authorization: token,
        }
      })
      toast.success(res.data.message)
      navigate('/orders')
    } catch (error) {
      toast.error(error.response?.data?.message)
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6 py-45">
      {/* Header / Progress Bar */}
      <div className="flex justify-between items-center mb-5 max-w-7xl mx-auto relative">
        {steps.map((s, i) => (
          <div
            key={s.id}
            className="flex flex-col items-center w-full cursor-pointer"
            onClick={() => handleTabClick(s.id)}
          >
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full z-10 ${step >= s.id ? "bg-cyan-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
            >
              {s.icon}
            </div>
            <p
              className={`mt-2 text-sm font-medium ${step >= s.id ? "text-cyan-600" : "text-gray-500"
                }`}
            >
              {s.title}
            </p>
            {i < steps.length - 1 && (
              <div
                className={`absolute transition duration-200 top-6 h-1 ${step > s.id ? "bg-cyan-600" : "bg-gray-300"
                  }`}
                style={{
                  width: `${100 / (steps.length - 1)}%`,
                  left: `${(i * 100) / (steps.length - 1)}%`,
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className=" rounded-xl p-6 max-w-7xl mx-auto">
        {/* Step 1: Shipping */}
        {step === 1 && (
          <div className="w-[50%] flex justify-center flex-col m-auto rounded-2xl shadow-2xl px-10 py-10" >
            <h2 className="text-3xl text-cyan-700 font-semibold mb-8">Shipping Details</h2>
            <form className="space-y-8">
              <div className="flex items-center border border-cyan-500  rounded-lg px-3 py-2">
                <Home className="text-cyan-500 mr-2" />
                <input
                  type="text"
                  placeholder="Street"
                  value={shippingData.street}
                  onChange={(e) =>
                    setShippingData({ ...shippingData, street: e.target.value })
                  }
                  className="w-full outline-none"
                />
              </div>
              <div className="flex items-center border border-cyan-500 rounded-lg px-3 py-2">
                <Building className="text-cyan-500 mr-2" />
                <input
                  type="text"
                  placeholder="City"
                  value={shippingData.city}
                  onChange={(e) =>
                    setShippingData({ ...shippingData, city: e.target.value })
                  }
                  className="w-full outline-none"
                />
              </div>

              <div className="flex items-center border border-cyan-500 rounded-lg px-3 py-2">
                <Building className="text-cyan-500 mr-2" />
                <input
                  type="text"
                  placeholder="State"
                  value={shippingData.state}
                  onChange={(e) =>
                    setShippingData({ ...shippingData, state: e.target.value })
                  }
                  className="w-full outline-none"
                />
              </div>
              <div className="flex items-center border border-cyan-500 rounded-lg px-3 py-2">
                <Building className="text-cyan-500 mr-2" />
                <input
                  type="text"
                  placeholder="Country"
                  value={shippingData.country}
                  onChange={(e) =>
                    setShippingData({ ...shippingData, country: e.target.value })
                  }
                  className="w-full outline-none"
                />
              </div>
              <div className="flex items-center border border-cyan-500 rounded-lg px-3 py-2">
                <MapPin className="text-cyan-500 mr-2" />
                <input
                  type="text"
                  placeholder="Pin Code"
                  value={shippingData.pin}
                  onChange={(e) =>
                    setShippingData({ ...shippingData, pin: e.target.value })
                  }
                  className="w-full outline-none"
                />
              </div>
              <div className="flex items-center border border-cyan-500 rounded-lg px-3 py-2">
                <Phone className="text-cyan-500 mr-2" />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={shippingData.phone}
                  onChange={(e) =>
                    setShippingData({ ...shippingData, phone: e.target.value })
                  }
                  className="w-full outline-none"
                />
              </div>
              <button
                type="button"
                onClick={() => handleTabClick(2)}
                className="w-full bg-cyan-600 text-white py-3 duration-300 hover:cursor-pointer rounded-lg shadow hover:bg-cyan-700"
              >
                Continue to Order Summary
              </button>
            </form>
          </div>
        )}

        {/* Step 2: Order Summary */}
        {step === 2 && (
          <>
            <div>
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left - Cart Items */}
                <div className="flex-1 bg-white p-4 rounded shadow-sm">
                  <div className="mb-4">
                    <h2 className="font-semibold text-lg">Shipping to : {shippingData.pin}</h2>
                    <p className="text-sm text-gray-600">
                      {shippingData.address},
                      {shippingData.city}, {shippingData.state} | {shippingData.pin} | Mob - {shippingData.phone}
                    </p>
                    <button onClick={() => handleTabClick(1)} className=" hover:cursor-pointer text-sm text-blue-500 mt-1">Change</button>
                  </div>

                  <h3 className="font-semibold text-base mb-2">{cart.length} Items in Cart</h3>

                  {/* Item 1 */}

                  {
                    cart.length > 0 ? cart.map((product) => (
                      <CartCard product={product} />
                    )) : 'Please add item to card'
                  }

                </div>

                {/* Right - Summary */}
                <div className="w-full lg:w-1/3 bg-white p-4 rounded shadow-sm">
                  <div className="text-sm space-y-5">
                    <div className="flex justify-between">
                      <span>Total Order Value</span>
                      <span>₹ {totalValue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Discount</span>
                      <span className="text-green-600">-₹ {totalDiscount}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Grand Total</span>
                      <span>₹ {grandTotal}</span>
                    </div>
                    <p className="text-xs text-gray-500">
                      Inclusive of all the applicable taxes
                    </p>
                  </div>

                  <button onClick={() => handleTabClick(3)} className="mt-4 w-full hover:cursor-pointer hover:bg-cyan-700 duration-300 bg-cyan-600 text-white font-semibold py-2 rounded">
                    Proceed to Payments
                  </button>

                  <div className="mt-4 flex items-start text-xs text-gray-600">
                    <Info className="w-4 h-4 mr-1 mt-0.5" />
                    <p>Secure Payment, Easy Returns & Refunds</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <>
            <div className=" w-[50%] flex m-auto flex-col shadow-2xl px-10 py-5" >
              {/* Left: Payment Modes */}
              <div className="mb-10">
                <h3 className="font-semibold text-gray-800 mb-4">Select Payment Mode</h3>
                <div className="space-y-2">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.name}
                      className={`flex items-center justify-between p-2 rounded cursor-pointer ${paymentMethod === method.name ? "bg-gray-100 border-l-4 border-cyan-600" : ""
                        } ${method.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="payment"
                          value={method.name}
                          disabled={method.disabled}
                          checked={paymentMethod === method.name}
                          onChange={() => setPaymentMethod(method.name)}
                          className="accent-cyan-600"
                        />
                        <span>{method.name}</span>
                      </div>
                      {method.offer && (
                        <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">OFFERS</span>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Center: UPI Info + Place Order */}
              <div className="flex flex-col items-center justify-center px-4">
                <button onClick={handleCreateOrder} className="w-full bg-cyan-600 hover:bg-cyan-700 hover:cursor-pointer duration-300 text-white py-3 rounded shadow text-lg">
                  Place order for ₹{grandTotal}
                </button>
                <p className="text-sm text-gray-500 mt-5 flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm0 0v1c0 1.104.896 2 2 2s2-.896 2-2v-1m-4 0v1c0 1.104.896 2 2 2s2-.896 2-2v-1"
                    />
                  </svg>
                  Secure Payment, Easy Returns & Refunds
                </p>
              </div>

            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
