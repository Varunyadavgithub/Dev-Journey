import { useEffect, useState } from "react";

const useGetSingleProduct = (productId) => {
  const [poroduct, setProduct] = useState(null);

  useEffect(() => {
    fetchSingleProduct();
  }, [productId]);

  const fetchSingleProduct = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      if (!response.ok) {
        throw new Error("Error while fetching data from server.");
      }
      const resData = await response.json();
      setProduct(resData);
    } catch (error) {
      console.log("Error while fetching product.", error);
    }
  };
  return poroduct;
};
export default useGetSingleProduct;
