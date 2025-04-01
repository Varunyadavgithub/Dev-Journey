const ComponentC = ({ user }) => {
  return (
    <div className="bg-yellow-200 p-4 rounded-lg border-2 border-yellow-500">
      <h1 className="text-center mb-2">I am Component C</h1>
      <div className="p-4 rounded-lg">
        <h2 className="text-red-700">Note:- User Details coming from Component B</h2>
        <h2>User Name: {user.name}</h2>
        <h2>User Email: {user.email}</h2>
      </div>
    </div>
  );
};

export default ComponentC;
