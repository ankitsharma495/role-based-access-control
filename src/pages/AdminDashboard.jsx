import React, { useState } from "react";
import { useUsers } from "../context/UserContext";
import { MdDeleteForever } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

const AdminDashboard = () => {
  const { users, setUsers } = useUsers();
  const [editUser, setEditUser] = useState(null);
  const [userData, setUserData] = useState({ id: "", password: "", role: "User" });
  const [searchQuery, setSearchQuery] = useState("");                                // For search functionality

  // Add or Update User
  const handleAddOrUpdateUser = () => {
    if (editUser) {
      // Update user logic
      const updatedUsers = users.map((user) =>
        user.id === editUser.id ? { ...editUser, ...userData } : user
      );
      setUsers(updatedUsers);
      setEditUser(null);                                             // Exit edit mode
    } else {
      // Add new user
      setUsers([...users, userData]);                               // Add new user to the list
    }

    // Reset the input form
    setUserData({ id: "", password: "", role: "User" });
  };

  // Handle Edit
  const handleEdit = (user) => {
    setEditUser(user); // Set user to edit
    setUserData(user); // Pre-fill form with selected user's data
  };

  // Handle Delete
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user.id !== userId)); // Remove user by ID
  };

  // Filter users based on the search query
  const filteredUsers = users.filter(
    (user) =>
      user.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container w-[85vw] py-10 mx-auto animate-fadeIn">
      <h2 className="text-3xl font-semibold text-gray-800 text-center">Admin Dashboard</h2>
      <p className="mt-4 text-center text-2xl">Manages all the users.</p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">User Management</h3>

        {/* Search Bar */}
        <div className="flex items-center mt-4 ">
          <input
            type="text"
            placeholder="Search by ID or Role"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-xl"
          />
        </div>

        {/* User Form */}
        <div className="flex mt-4">
          <input
            type="text"
            placeholder="User ID"
            value={userData.id}
            onChange={(e) => setUserData({ ...userData, id: e.target.value })}
            className="p-2 mr-2 border border-gray-300 rounded-xl"
            disabled={!!editUser} // Disable ID input when editing
          />
          <input
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            className="p-2 mr-2 border border-gray-300 rounded-xl"
          />
          <select
            value={userData.role}
            onChange={(e) => setUserData({ ...userData, role: e.target.value })}
            className="p-2 border border-gray-300 rounded-xl"
          >
            <option value="Admin">Admin</option>
            <option value="Super User">Super User</option>
            <option value="User">User</option>
          </select>
          <button
            onClick={handleAddOrUpdateUser}
            className="px-4 py-2 ml-4 text-white bg-green-600 rounded-xl hover:bg-green-700"
          >
            {editUser ? "Update User" : "Add User"}
          </button>
        </div>
        <table className="w-full mt-6 bg-white rounded-xl shadow-md table-auto ">
          <thead>
            <tr className="text-white bg-blue-600 rounded-t-xl">
              <th className="px-4 py-2">User ID</th>
              <th className="px-4 py-2 ">Role</th>
              <th className="px-4 py-2 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="text-center border-t">
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(user)}
                    className="px-2 py-1 mr-2 text-black text-2xl rounded"
                  >
                    
                     <FaUserEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="px-2 py-1 text-black text-3xl rounded"
                  >
                
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="3" className="px-4 py-2 text-center text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;


                