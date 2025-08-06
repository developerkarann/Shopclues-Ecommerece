import CartCard from "@/components/CartCard";
import NotFound from "@/components/NotFound";
import WishlistCard from "@/components/WishlistCard"
import { useSelector } from "react-redux"


const MyCart = () => {

    const cart = useSelector((state) => state.cart);

    return (
        <>

            <div>
                <div className="mb-4 flex gap-4">
                    <span className="pb-2 font-semibold">My Cart</span>
                </div>
                {
                cart.length < 1 ? <NotFound text={'Your cart is empty'} /> : cart.map((product, i) => (
                    <CartCard key={i} product={product} />
                ))}
            </div>

        </>
    )
}




export default MyCart