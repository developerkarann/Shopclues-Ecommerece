import { ArrowLeft, Minus, Plus, MapPin } from "lucide-react";
import React from "react";

const WishlistPage = () => {



    const orders = [
        {
            id: "216134252",
            date: "01 Aug 2025",
            product: {
                image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
                title:
                    "Digimate 3-in-1 Cable",
                price: 398,
                qty: 2,
            },
            paymentStatus: "Payment Pending",
        },
        {
            id: "216134252",
            date: "01 Aug 2025",
            product: {
                image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
                title:
                    "Digimate 3-in-1 Cable",
                price: 398,
                qty: 2,
            },
            paymentStatus: "Payment Pending",
        },
        {
            id: "216134252",
            date: "01 Aug 2025",
            product: {
                image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
                title:
                    "Digimate 3-in-1 Cable",
                price: 398,
                qty: 2,
            },
            paymentStatus: "Payment Pending",
        },
        {
            id: "216134252",
            date: "01 Aug 2025",
            product: {
                image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
                title:
                    "Digimate 3-in-1 Cable",
                price: 398,
                qty: 2,
            },
            paymentStatus: "Payment Pending",
        },

    ];



    return (
        <div className="min-h-screen bg-[#f0f8fb] px-4 py-6">
            <h2 className="text-xl font-semibold mb-4">My Wishlist ( 1 Item )</h2>
            <div className="bg-white p-4 rounded shadow-sm flex flex-col gap-4">
                {orders.map((order) => (
                    <div key={order.id} className="mb-6 pb-4 border-b border-gray-200  ">

                        {order.product && (
                            <div className="flex  justify-between gap-4  ">
                                <div className="flex gap-5">
                                    <img src={order.product.image} alt="Product" className="w-30 h-30 " />
                                    <div>
                                        <p className="text-sm font-medium">
                                            {order.product.title}
                                        </p>
                                        <p className="mt-2 text-gray-600  line-through  text-sm">
                                            ₹{order.product.price}
                                        </p>
                                        <p className="mt-2 font-bold text-sm">
                                            ₹{order.product.price}
                                        </p>
                                    </div>

                                </div>

                                <div className="flex flex-col gap-2 text-sm">
                                    <button 
                                    className="bg-gradient-to-r from-orange-400 hover:cursor-pointer rounded to-pink-500 text-white font-semibold px-3 py-2 shadow-md hover:opacity-90 transition"
                                    >
                                        Buy Now
                                    </button>
                                    <button className=" text-orange-400 border border-orange-400  hover:cursor-pointer rounded font-semibold px-6 py-2 shadow-md hover:opacity-90 transition">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WishlistPage;
