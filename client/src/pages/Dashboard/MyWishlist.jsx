import NotFound from "@/components/NotFound"
import WishlistCard from "@/components/WishlistCard"
import { useSelector } from "react-redux"


const MyWishlist = () => {

    const wishlist = useSelector((state) => state.wishlist)

    return (
        <>

            <div>
                <div className="mb-4 flex gap-4">
                    <span className="pb-2 font-semibold">Wishlist</span>
                </div>
                {

               wishlist.length < 1 ?  <NotFound text={'You wishlist is empty'}/> : 
                wishlist.map((product , i) => (
                    <WishlistCard key={i} product={product}/>
                ))}
            </div>

        </>
    )
}




export default MyWishlist