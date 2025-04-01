import { useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();

  return (
    <div className="bg-red-50 text-gray-900 min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold text-center text-red-600 mb-4">
        Oops! Something went wrong...!!!
      </h1>
      <h2 className="text-2xl font-semibold text-center text-red-500 mb-4">
        {error.status} - {error.statusText}
      </h2>
      <p className="text-center text-lg text-gray-700">
        {error.data || "An unexpected error occurred."}
      </p>
    </div>
  );
};
