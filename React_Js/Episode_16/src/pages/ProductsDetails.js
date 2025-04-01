// Code for Product Details Page
import { useEffect, useState } from "react";
import Skeleton from "../components/Skeleton";
import { useParams } from "react-router-dom";
import useGetSingleProduct from "../hooks/useGetSingleProduct";

export const ProductsDetails = () => {
  const { productId } = useParams();

  const singleProduct = useGetSingleProduct(productId);

  if (!singleProduct) return <Skeleton />;

  const { image, title, description, price, category } = singleProduct;

  return (
    <div className="product-details">
      <div className="product-card">
        <img src={image} alt={title} className="product-image" />
        <div className="product-info">
          <h1 className="product-title">{title}</h1>
          <p className="product-category">Category: {category}</p>
          <p className="product-price">Price: ${price}</p>
          <p className="product-description">{description}</p>
        </div>
      </div>
    </div>
  );
};
