import { createContext, useState } from "react";

const Username = createContext();
const Hello = ({ children }) => {
  const [user, setUser] = useState("Ashu");

  return (
    <Username.Provider value={{ user,setUser }}>
      {children}
    </Username.Provider>
  );
};

export default Username;
export { Hello };
