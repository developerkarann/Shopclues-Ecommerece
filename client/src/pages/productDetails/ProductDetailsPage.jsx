import { Star, Heart, ShoppingCart, BadgeCheck, Truck, ArrowRight, ShieldCheck } from "lucide-react";

const ProductDetailsPage = () => {
    return (
        <>
            <div className="bg-[#f1f7fc] p-6">
                <div className="max-w-6xl mx-auto bg-white p-6 rounded-md shadow">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Product Image */}
                        <div className="flex justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop"
                                alt="USB Cable"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Product Details */}
                        <div>
                            <h2 className="text-lg font-medium">
                                Digimate 3-in-1 Cable 0.29 m A3 Micro USB Cable 0.5 m Copper All in One 60W USB Fast Charging Cable Set
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">
                                Compatible with Mobile, iPhone, Tablet, Black, One Cable
                            </p>
                            <p className="text-xs text-gray-400 mt-1">Product ID : 153554348</p>

                            <div className="flex items-center gap-2 mt-2 text-sm">
                                <span className="text-orange-500 font-medium">3.7</span>
                                <Star className="w-4 h-4 fill-orange-400 stroke-orange-400" />
                                <span>(132)</span>
                                <span className="text-cyan-600">43 Reviews</span>
                            </div>

                            <div className="mt-3 text-2xl font-bold">₹199</div>
                            <div className="text-sm text-gray-500">
                                MRP:<span className="line-through ml-1">₹999</span>
                                <span className="text-green-600 ml-2 font-semibold">80% off</span>
                            </div>
                            <p className="text-xs text-gray-400 mt-1">Inclusive of all taxes</p>

                            {/* Pricing Offer Box */}
                            <div className="border mt-4 rounded">
                                <div className="p-2 border-b bg-gray-50 text-sm text-gray-700">
                                    Get this for as low as: <span className="text-green-600 font-bold">₹196</span>
                                </div>
                                <div className="p-2 text-xs text-gray-500">Applicable for All Users</div>
                                <div className="flex justify-between px-4 py-2 text-sm">
                                    <div>
                                        <p>Original Price</p>
                                        <p className="font-medium">₹199</p>
                                    </div>
                                    <div>
                                        <p>Apply Cluesbucks</p>
                                        <p className="font-medium">-₹3</p>
                                    </div>
                                    <div>
                                        <p>Deal Price</p>
                                        <p className="text-green-600 font-bold">₹196</p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-xs text-blue-500 mt-2">
                                Extra CluesBucks™ only on VIP Club. <span className="underline">Join Now</span>
                            </div>

                            <div className="text-sm text-gray-600 mt-2">
                                <p>
                                    <span className="font-medium">Warranty Available:</span> No Warranty
                                </p>
                                <p>
                                    <span className="font-medium">Duration:</span> na
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4 mt-4">
                                <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
                                    ADD TO CART
                                </button>
                                <button className="bg-[#ff5722] text-white px-6 py-2 rounded hover:bg-[#e64a19]">
                                    BUY NOW
                                </button>
                            </div>

                            {/* Pincode */}
                            <div className="flex items-center gap-2 mt-4">
                                <input
                                    type="text"
                                    placeholder="Enter pincode for delivery"
                                    className="border px-3 py-1 rounded text-sm w-48"
                                />
                                <button className="text-cyan-600 border border-cyan-600 px-3 py-1 rounded text-sm">
                                    Check
                                </button>
                            </div>

                            {/* Shipping info */}
                            <div className="mt-4 text-sm text-gray-600 space-y-2">
                                <p className="flex items-center gap-2">
                                    <Truck className="w-4 h-4 text-red-500" /> COD Not Available
                                </p>
                                <p className="flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-green-600" /> Easy Replacement Only
                                </p>
                                <p className="flex items-center gap-2">
                                    <BadgeCheck className="w-4 h-4 text-blue-500" /> Delivered 2-5 Business Days
                                </p>
                                <p className="text-xs text-gray-400">
                                    Payment Options: Credit Card, Debit Card, Net Banking, Wallets
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetailsPage