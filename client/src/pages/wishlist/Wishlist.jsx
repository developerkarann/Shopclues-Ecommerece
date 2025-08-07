import { useSelector } from "react-redux";
import NotFound from "../../components/NotFound";
import WishlistCard from "../../components/WishlistCard";

const WishlistPage = () => {

    const wishlist = useSelector((state) => state.wishlist)


    return (
        <div className="min-h-screen bg-[#f0f8fb] px-4 py-45">
            <h2 className="text-xl font-semibold mb-4">My Wishlist ( {wishlist.length} Item )</h2>
            {
                wishlist.length > 0 ?
                    <>
                        <div className="bg-white p-4 rounded shadow-sm flex flex-col gap-4">
                            {wishlist.map((product) => (
                                <WishlistCard product={product} />
                            ))}
                        </div>
                    </> :
                    <NotFound text={'Your wishlist is empty'} />
            }
        </div>
    );
};

export default WishlistPage;
