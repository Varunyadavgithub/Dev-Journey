import ComponentC from "./ComponentC";

const ComponentB = ({ user }) => {
  return (
    <div className="bg-blue-200 p-4 rounded-lg border-2 border-blue-500">
      <h1 className="text-center mb-2">
        I am Component B{" "}
        <span className="text-blue-600 ">(calling component C)</span>
      </h1>
      <div className="p-4 rounded-lg">
        <h2 className="text-red-700">
          Note:- User Details coming from Component A
        </h2>
        <h2>User Name: {user.name}</h2>
        <h2>User Email: {user.email}</h2>
        <ComponentC user={user} />
      </div>
    </div>
  );
};

export default ComponentB;
