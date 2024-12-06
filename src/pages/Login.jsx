
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../context/UserContext"; 

const LoginPage = () => {
  const { users } = useUsers();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find((user) => user.id === id && user.password === password);
    
    if (user) {
      setError("");
      switch (user.role) {
        case "Admin":
          navigate("/admin");
          break;
        case "Super User":
          navigate("/superuser");
          break;
        case "User":
          navigate("/user");
          break;
        default:
          setError("Role not recognized.");
      }
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-200 ">
      <div className="w-full max-w-md p-8 bg-white border border-gray-300 rounded-lg shadow-xl">
        <h2 className="mb-6 text-2xl font-bold">Login</h2>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <div className="mb-4">
          <label className="block mb-2">User ID</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
