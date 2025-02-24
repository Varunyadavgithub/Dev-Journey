import { useEffect, useState } from "react";

const useGetProducts = () => {
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

  return {
    listOfProduct,
    filterProduct,
    setFilterProduct,
    searchText,
    setSearchText,
  };
};
export default useGetProducts;
