import { useDispatch, useSelector } from "react-redux";
import { clearItems, removeItem } from "../store/cartSlice";

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItems());
  };

  const handleClearItem=(id)=>{
    dispatch(removeItem({id}))
  }
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen flex flex-col p-6">
      <div className="flex items-center justify-center gap-5">
        <h1 className="text-3xl font-semibold text-center text-green-500 mb-4">
          All Cart Items - {cartItems.length}
        </h1>
        <button
          onClick={handleClearCart}
          className="bg-red-700 py-1 px-4 text-xl text-white rounded-lg"
        >
          Clear Cart
        </button>
      </div>
      {cartItems.map((item, idx) => (
        <div key={idx} className="bg-white p-4 mx-6 rounded-lg mt-4 shadow-xl">
          <div>
            <div className="flex items-center justify-evenly">
              <img
                className="w-24 h-24 object-cover rounded-lg m-2"
                src={item.image}
              />
              <div className="flex flex-col gap-4 items-start justify-center ml-4">
                <h1 className="text-2xl font-bold">{item.title}</h1>
                <p className="text-xl">₹{item.price}</p>
              </div>
              <button onClick={()=>handleClearItem(item?.id)} className="bg-red-700 py-1 px-4 text-xl text-white rounded-lg">Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
