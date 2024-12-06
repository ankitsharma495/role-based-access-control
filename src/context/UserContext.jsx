// import React, { createContext, useState, useContext } from "react";

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [users, setUsers] = useState([
//     { id: "admin@gmail.com", password: "admin@123", role: "Admin" },
//     { id: "superuser@gmail.com", password: "superuser@123", role: "Super User" },
//     { id: "user@gmail.com", password: "user@123", role: "User" },
//   ]);

//   const addUser = (newUser) => {
//     setUsers((prevUsers) => [...prevUsers, newUser]);
//   };

//   return (
//     <UserContext.Provider value={{ users, addUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUsers = () => useContext(UserContext);

import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(
    [
          { id: "admin@gmail.com", password: "admin@123", role: "Admin" },
          { id: "superuser@gmail.com", password: "superuser@123", role: "Super User" },
          { id: "user@gmail.com", password: "user@123", role: "User" },
        ]
  );

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => useContext(UserContext);
