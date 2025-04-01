import { createContext } from "react";

const UserContext = createContext({
  name: "Anil",
  address: "Mumbai",
  email: "anil@gmail.com",
});

export default UserContext;
