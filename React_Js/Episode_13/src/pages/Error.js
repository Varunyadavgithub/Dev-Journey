import { useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();
  // console.log(error);
  return (
    <div>
      <h1>Oops! Something went wrong...!!!</h1>
      <h2>
        {error.status} - {error.statusText}
      </h2>
      <p>{error.data || "An unexpected error occurred."}</p>
    </div>
  );
};
