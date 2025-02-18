const Product = (props) => {
  const { image, title, rating, price } = props.product;
  return (
    <div className="product">
      <img className="product_image" src={image} />
      <h1>{title}</h1>
      <p>{rating.rate} ratings</p>
      <p>Price: {price}</p>
    </div>
  );
};
export default Product;
