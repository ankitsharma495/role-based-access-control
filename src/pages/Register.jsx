import React, { useState } from "react";
import { useUsers } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { addUser } = useUsers();
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");

  const handleRegister = () => {
    if (id && password) {
      addUser({ id, password, role });
      alert("User registered successfully!");
      navigate("/login");
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="container py-20 mx-auto animate-fadeIn">
      <h2 className="text-3xl font-semibold text-gray-800">Register</h2>
      <div className="mt-6">
        <label className="block mb-2 text-gray-600">User ID:</label>
        <input
          type="text"
          placeholder="Enter unique ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />

        <label className="block mt-4 mb-2 text-gray-600">Password:</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />

        <label className="block mt-4 mb-2 text-gray-600">Role:</label>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="Admin">Admin</option>
          <option value="Super User">Super User</option>
          <option value="User">User</option>
        </select>

        <button
          onClick={handleRegister}
          className="px-4 py-2 mt-6 text-white bg-green-600 rounded hover:bg-green-700"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
