import ComponentB from "./ComponentB";

const ComponentA = () => {
  const user = {
    name: "Varun",
    email: "varun@gmail.com",
  };
  return (
    <div className="bg-red-200 p-4 rounded-lg border-2 border-red-500">
      <h1 className="text-center mb-2">
        I am Component A{" "}
        <span className="text-red-600 ">(calling component B)</span>
      </h1>
      <div className="p-4 rounded-lg">
        <h2 className="text-red-700">
          Note:- User Details coming from Component A
        </h2>
        <h2>User Name: {user.name}</h2>
        <h2>User Email: {user.email}</h2>
        <ComponentB user={user} />
      </div>
    </div>
  );
};

export default ComponentA;
