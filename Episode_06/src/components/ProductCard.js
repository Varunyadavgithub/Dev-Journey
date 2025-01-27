import { productData } from "../utils/constent";
import Product from "./Product";
import { useState } from "react";

// named export
export const ProductCard = () => {
  const [listOfProduct, setListOfProduct] = useState(productData);

  return (
    <div className="product_card">
      <p>I am Product Card Component.</p>

      <div>
        <button
          onClick={() => {
            console.log("Before filter", productData);

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
          {listOfProduct.map((product, idx) => {
            return <Product key={idx} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};
