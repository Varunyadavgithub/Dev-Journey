import useGetProducts from "../hooks/useGetProducts.js";
import Product from "./Product";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

export const ProductCard = () => {
  const {
    listOfProduct,
    filterProduct,
    searchText,
    setSearchText,
    setFilterProduct,
  } = useGetProducts();

  return listOfProduct.length === 0 ? (
    <Skeleton />
  ) : (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Product Cards
      </h2>

      <div className="mb-6 flex flex-col items-center md:flex-row justify-between gap-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            className="p-2 border border-gray-300 rounded-md"
            placeholder="Search for a product"
          />
          <button
            onClick={() => {
              const filteredData = listOfProduct.filter((product) =>
                product.title.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterProduct(filteredData);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filteredProduct = listOfProduct.filter(
              (product) => product.rating.rate >= 4
            );
            setFilterProduct(filteredProduct);
          }}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          Top Rated Products
        </button>
      </div>

      <h5 className="text-xl font-medium text-gray-700 mb-4">All Products</h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterProduct.map((product, idx) => {
          return (
            <Link to={`/product/${product.id}`} key={idx} className="group">
              <Product product={product} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
