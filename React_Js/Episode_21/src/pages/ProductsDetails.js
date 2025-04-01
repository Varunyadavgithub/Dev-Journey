import Skeleton from "../components/Skeleton";
import { useParams } from "react-router-dom";
import useGetSingleProduct from "../hooks/useGetSingleProduct";
import { addItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";

export const ProductsDetails = () => {
  const { productId } = useParams();

  const singleProduct = useGetSingleProduct(productId);

  if (!singleProduct) return <Skeleton />;

  const { image, title, description, price, category } = singleProduct;
  const dispatch = useDispatch();

  const handleCartItem = () => {
    dispatch(addItem(singleProduct));
  };
  
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={image}
            alt={title}
            className="w-full md:w-1/2 h-auto rounded-lg object-cover mb-6 md:mb-0"
          />
          <div className="md:ml-8">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
              {title}
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold">Category:</span> {category}
            </p>
            <p className="text-xl text-green-600 font-bold mb-4">
              Price: ${price}
            </p>
            <p className="text-gray-700">{description}</p>
            <button
              onClick={handleCartItem}
              className="bg-black text-white px-4 py-1 rounded-lg my-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
