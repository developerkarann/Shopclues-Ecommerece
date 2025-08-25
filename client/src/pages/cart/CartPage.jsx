import { MapPin } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../../components/CartCard";
import NotFound from "../../components/NotFound";
import { useEffect } from "react";
import { fetchCart } from '../../redux/slices/newCartSlice'
import { Link } from "react-router-dom";

const CartPage = () => {

  const dispatch =  useDispatch()

  const cart = useSelector((state) => state.cart.data);
  const token = useSelector((state) => state.auth.token);

  const grandTotal = cart.reduce((acc, val) => acc + val.price, 0)

  useEffect(() => {
    dispatch(fetchCart(token))
  }, [])
  

  return (
    <div className="min-h-screen bg-[#f0f8fb] px-4 py-45">
      <h2 className="text-xl font-semibold mb-4">My Cart ( {cart.length} Item )</h2>
      {
        cart.length > 0 ? <>
          <div className="bg-white p-4 rounded shadow-sm flex flex-col gap-4">
            {
              cart.map((product, i) => (
                <CartCard product={product} key={i} />
              ))
            }
          </div>
        </> :
          <NotFound text={'Your cart is empty'} />
      }


      {/* Bottom Section */}
      {
        cart.length > 0 ? <>
          <div className="bg-white p-4 mt-6 rounded shadow-sm">

    
            <div className="flex justify-end border-t pt-4">
              <div className="text-right text-sm">
                <p className="font-bold text-lg">Grand Total <span className="ml-4">₹ {grandTotal}</span></p>
                <p className="text-xs text-gray-500">
                  Inclusive of all the applicable taxes
                </p>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button className="bg-cyan-600 hover:bg-cyan-700 duration-300 hover:cursor-pointer text-white text-sm font-medium px-6 py-2 rounded">
              <Link to='/checkout'>
                Place Order
              </Link>
              </button>
            </div>
          </div>
        </> : ''
      }

    </div>
  );
};

export default CartPage;
