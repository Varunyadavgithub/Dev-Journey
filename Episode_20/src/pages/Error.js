import { useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold text-red-600">
        Oops! Something went wrong...!!!
      </h1>
      <h2 className="text-2xl font-semibold mt-2">
        {error.status} - {error.statusText}
      </h2>
      <p className="text-lg text-gray-600 mt-2">
        {error.data || "An unexpected error occurred."}
      </p>
      <a
        href="/"
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Go Back Home
      </a>
    </div>
  );
};
