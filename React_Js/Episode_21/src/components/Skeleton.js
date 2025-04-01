const Skeleton = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Loading Products...
      </h2>

      <div className="mb-6 flex flex-col items-center md:flex-row justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-40 h-8 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="w-24 h-8 bg-gray-300 animate-pulse rounded-md"></div>
        </div>
        <div className="w-40 h-8 bg-gray-300 animate-pulse rounded-md"></div>
      </div>

      <h5 className="text-xl font-medium text-gray-700 mb-4">
        Loading Products...
      </h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, idx) => (
          <div
            key={idx}
            className="product-card bg-gray-200 p-4 rounded-md shadow-md space-y-4 animate-pulse"
          >
            <div className="h-40 bg-gray-300 rounded-md"></div>
            <div className="h-6 bg-gray-300 rounded-md"></div>
            <div className="h-6 bg-gray-300 rounded-md"></div>
            <div className="h-6 bg-gray-300 w-2/3 rounded-md"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
