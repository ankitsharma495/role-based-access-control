

import React from "react";
import { useUsers } from "../context/UserContext";

const UserDashboard = () => {
  const { users } = useUsers();

  return (
    <div className="container py-10 mx-auto animate-fadeIn w-[85vw]">
      <h2 className="text-3xl font-semibold text-gray-800 text-center">User Dashboard</h2>
      <p className="mt-4 text-center">Users have limited access</p>
      <div className="mt-6 bg-zinc-200">
        <h3 className="text-xl font-semibold px-3">My Information</h3>
        <table className="w-full mt-4 bg-white border shadow text-center">
          <thead>
            <tr>
              <th className="px-4 py-2 border">User ID</th>
              <th className="px-4 py-2 border">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2 border">{user.id}</td>
                <td className="px-4 py-2 border">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;