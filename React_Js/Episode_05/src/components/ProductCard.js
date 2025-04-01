import { productData } from "../utils/constent";
import Product from "./Product";

// named export
export const ProductCard = () => {
  return (
    <div className="product_card">
      <h2>Import Export in React.</h2>
      <p>I am Product Card Component.</p>
      <div>
        <h5>Print all data using loop</h5>
        <div className="product_items">
          {productData.map((product, idx) => {
            return <Product key={idx} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};
