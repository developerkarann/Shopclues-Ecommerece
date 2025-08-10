
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/slices/cartSlice";
import CartCard from "@/components/CartCard";
import { MapPin, Minus, Plus } from "lucide-react";


const HoverCard = () => {

    let [count, setCounter] = useState(1)

    const cart = useSelector((state) => state.cart);
    const token = useSelector((state) => state.auth.token);
    const grandTotle = cart.reduce((acc, val) => acc + val.price, 0)

    

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
                                  cart.map((product, i) => (
                                        <CartCard product={product} key={i} />
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
                                        {/* <p>Total <span className="ml-8 font-medium">₹ 199</span></p> */}
                                        <p className="font-bold text-lg">Grand Total <span className="ml-4">₹ {grandTotle}</span></p>
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