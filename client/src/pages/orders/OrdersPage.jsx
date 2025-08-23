import { MapPin } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../../components/CartCard";
import NotFound from "../../components/NotFound";
import { useEffect } from "react";
import { fetchCart } from '../../redux/slices/newCartSlice'
import OrderCard from "../../components/orderCard";
import { fetchOrders } from "../../redux/slices/orderSlice";

const OrdersPage = () => {

  const dispatch =  useDispatch()

  const cart = useSelector((state) => state.cart.data);
  const token = useSelector((state) => state.auth.token);
  const orders = useSelector((state) => state.orders.data);


  useEffect(() => {
    dispatch(fetchOrders(token))
  }, [])
  

  return (
    <div className="min-h-screen bg-[#f0f8fb] px-4 py-45">
      <h2 className="text-xl font-semibold mb-4">My Orders ( {orders.length} )</h2>
      {
        orders.length > 0 ? <>
          <div className="bg-white p-4 rounded shadow-sm flex flex-col gap-4">
            {
              orders.map((order, i) => (
                <OrderCard order={order} key={i} />
              ))
            }
          </div>
        </> :
          <NotFound text={'Please place an order'} />
      }

    </div>
  );
};

export default OrdersPage;
