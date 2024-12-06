import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); 
  const isNotHome = location.pathname !== "/";

  return (
    <nav className="p-4 text-white bg-sky-950 shadow-md">
      <div className="container flex items-center justify-between mx-auto">
        <h1 className="text-xl font-bold">Role Based Access Control System</h1>
        <div className="flex gap-11">
          <Link to="/" className="hover:underline">Home</Link>
          
          {isNotHome ? (
            <Link to="/logout" className="hover:underline">Logout</Link>
          ) : (
            <Link to="/login" className="hover:underline">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
