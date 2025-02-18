import Product from "./Product";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

export const ProductCard = () => {
  const [listOfProduct, setListOfProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const resData = await data.json();
    setListOfProduct(resData);
    setFilterProduct(resData);
  };

  return listOfProduct.length === 0 ? (
    <Skeleton />
  ) : (
    <div className="product_card">
      <p>I am Product Card Component.</p>

      <div>
        <div
          style={{
            margin: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button
            onClick={() => {
              const filteredData = listOfProduct.filter((product) => {
                return product.title
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilterProduct(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            console.log("Before filter", listOfProduct);

            const filteredProduct = listOfProduct.filter(
              (product) => product.rating.rate >= 4
            );
            setListOfProduct(filteredProduct);
            console.log("After filter", filteredProduct);
          }}
          style={{ marginTop: "10px" }}
        >
          Top Rated Product
        </button>
      </div>

      <div>
        <h5>Print all data using loop</h5>
        <div className="product_items">
          {filterProduct.map((product, idx) => {
            return <Product key={idx} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};
