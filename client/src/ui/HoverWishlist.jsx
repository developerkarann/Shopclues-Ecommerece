import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../redux/slices/wishlistSlice";
import { Link } from "react-router-dom";


const HoverWishlist = () => {


    const dispatch = useDispatch()

    const wishlist = useSelector((state) => state.wishlist)

    //     {
    //         id: "216134252",
    //         date: "01 Aug 2025",
    //         product: {
    //             image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
    //             title:
    //                 "Digimate 3-in-1 Cable",
    //             price: 398,
    //             qty: 2,
    //         },
    //         paymentStatus: "Payment Pending",
    //     },
    //     {
    //         id: "216134252",
    //         date: "01 Aug 2025",
    //         product: {
    //             image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
    //             title:
    //                 "Digimate 3-in-1 Cable",
    //             price: 398,
    //             qty: 2,
    //         },
    //         paymentStatus: "Payment Pending",
    //     },
    //     {
    //         id: "216134252",
    //         date: "01 Aug 2025",
    //         product: {
    //             image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
    //             title:
    //                 "Digimate 3-in-1 Cable",
    //             price: 398,
    //             qty: 2,
    //         },
    //         paymentStatus: "Payment Pending",
    //     },
    //     {
    //         id: "216134252",
    //         date: "01 Aug 2025",
    //         product: {
    //             image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
    //             title:
    //                 "Digimate 3-in-1 Cable",
    //             price: 398,
    //             qty: 2,
    //         },
    //         paymentStatus: "Payment Pending",
    //     },

    // ];


    return (
        <>
            <div className="absolute right-0 mt-2 w-[600px] h-[500px] overflow-scroll scrollbar-hide p-3 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">

                <div className="mb-4 flex gap-4">
                    <span className="pb-2 font-semibold">Wishlist</span>
                </div>
                {
                    wishlist.length < 1 ? <>
                        <div className="flex justify-center items-center text-2xl">
                            <h2>Your wishlist is empty</h2>
                        </div>
                    </>
                        :
                        wishlist.map((item, i) => (
                            <div key={i} className="mb-6 pb-4 border-b border-gray-200  ">

                                {item && (
                                    <div className="flex  justify-between gap-4  ">
                                        <div className="flex gap-5">
                                            <img src={item.image} alt="Product" className="w-30 h-30 " />
                                            <div>
                                                <p className="text-sm font-medium">
                                                    {item.title.slice(0, 70)}
                                                </p>
                                                {/* <p className="mt-2 text-gray-600  line-through  text-sm">
                                            ₹{order.product.price}
                                        </p> */}
                                                <p className="mt-2 font-bold text-sm">
                                                    ₹{item.price}
                                                </p>
                                            </div>

                                        </div>

                                        <div className="flex flex-col gap-2 text-sm">
                                            <button className="bg-gradient-to-r from-orange-400 hover:cursor-pointer rounded to-pink-500 text-white font-semibold px-2 py-2 shadow-md hover:opacity-90 transition">
                                                <Link to={`/product/${item.id}`}>
                                                    Buy Now
                                                </Link>
                                            </button>
                                            <button
                                                onClick={() => dispatch(toggleWishlist(item))}
                                                className=" text-orange-400 border border-orange-400  hover:cursor-pointer rounded font-semibold px-6 py-2 shadow-md hover:opacity-90 transition">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
            </div>
        </>
    )
}




export default HoverWishlist