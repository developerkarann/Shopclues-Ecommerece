import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../redux/slices/wishlistSlice";
import { Link } from "react-router-dom";
import WishlistCard from "@/components/WishlistCard";


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
                        wishlist.map((product, i) => (
                            <WishlistCard key={i} product={product} />
                        ))}
            </div>
        </>
    )
}




export default HoverWishlist