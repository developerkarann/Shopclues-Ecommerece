
import { MapPin, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/slices/cartSlice";


const HoverCard = () => {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    let [count, setCounter] = useState(1)

    const handleDecrement = () => {
        if (count > 1) {
            setCounter(count - 1);
        }
    };

    return (
        <>
            <div className="absolute right-0 mt-2 w-[600px]  h-[500px] overflow-scroll scrollbar-hide p-3 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
                <h2 className="text-xl font-semibold mb-4">My Cart ( {cart.length} Item )</h2>
                {
                    cart.length < 1 ? <>
                     <div className="flex justify-center items-center text-2xl">
                        <h2>Your cart is empty</h2>
                     </div>
                    </> :
                        <div>
                            <div className="bg-white p-4 rounded shadow-sm flex flex-col gap-4">
                                {
                                    cart.map((item) => (
                                        <div className="flex gap-4 items-start">
                                            <img
                                                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop"
                                                alt="Product"
                                                className="w-24 h-24 object-contain"
                                            />
                                            <div className="flex-1">
                                                <p className="text-sm font-medium">
                                                    {item.title}
                                                </p>
                                                <div className="flex items-center gap-3 mt-2">
                                                    <button className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full">
                                                        <Minus className="w-4 h-4 hover:cursor-pointer" onClick={handleDecrement} />
                                                    </button>
                                                    <span>{count}</span>
                                                    <button className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full">
                                                        <Plus className="w-4 h-4 hover:cursor-pointer" onClick={() => setCounter(count + 1)} />
                                                    </button>
                                                </div>
                                                <button onClick={() => dispatch(removeFromCart(item.id))} className=" hover:cursor-pointer text-blue-500 text-sm mt-2">Remove</button>
                                            </div>
                                            <div className="text-right text-sm">
                                                <p>
                                                    Price : ₹ 399 <span className="font-semibold">₹ 399</span>
                                                </p>
                                                <p>
                                                    Discount : - ₹ 200
                                                </p>
                                                <p>
                                                    Shipping Fee : <span className="font-bold">FREE</span>
                                                </p>
                                                <p className="mt-2 font-semibold text-lg">₹ 199</p>
                                                <p className="text-xs text-gray-500">
                                                    Inclusive of all the applicable taxes
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            {/* Bottom Summary */}
                            <div className="bg-white p-4 mt-6 rounded shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <MapPin className="w-5 h-5 text-gray-600" />
                                    <p className="text-sm">
                                        Delivery pincode <br />
                                        <span className="font-medium text-base">202411</span>{" "}
                                        <button className="text-blue-500 text-sm ml-2">Change</button>
                                    </p>
                                </div>

                                <div className="flex justify-end border-t pt-4">
                                    <div className="text-right text-sm">
                                        <p>Total <span className="ml-8 font-medium">₹ 199</span></p>
                                        <p className="font-bold text-lg">Grand Total <span className="ml-4">₹ 199</span></p>
                                        <p className="text-xs text-gray-500">
                                            Inclusive of all the applicable taxes
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-end mt-4">
                                    <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white text-sm font-medium px-6 py-2 rounded">
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}




export default HoverCard