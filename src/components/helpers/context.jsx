import React, { createContext, useContext, useState } from "react";

export const MyContext = createContext();
export const useMyContext = () => useContext(MyContext);
const MyContextProvider = ({ children }) => {
  const [users, setUsers] = useState(2);

  return (
    <MyContext.Provider value={{ users, setUsers }}>
      {children}
    </MyContext.Provider>
  );
};
export default MyContextProvider;
