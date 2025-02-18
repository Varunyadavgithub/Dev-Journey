import { useEffect, useState } from "react";
import Skeleton from "../components/Skeleton";
import { useParams } from "react-router-dom";

export const ProductsDetails = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { productId } = useParams();

  const fetchData = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const resData = await data.json();
    setSingleProduct(resData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { image, title, description, price } = singleProduct;
  return singleProduct === null ? (
    <Skeleton />
  ) : (
    <div>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>Price: ${price}</p>
      <p>{description}</p>
    </div>
  );
};
