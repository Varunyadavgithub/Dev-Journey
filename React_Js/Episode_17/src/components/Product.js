const Product = (props) => {
  const { image, title, rating, price } = props.product;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-4"
        src={image}
        alt={title}
      />
      <h1 className="text-xl font-semibold text-gray-800 mb-2">{title}</h1>
      <p className="text-sm text-gray-600 mb-2">{rating.rate} ratings</p>
      <p className="text-lg font-bold text-gray-900">Price: ${price}</p>
    </div>
  );
};

export default Product;
