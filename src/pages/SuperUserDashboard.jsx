import React from "react";
import { useUsers } from "../context/UserContext";

const SuperUserDashboard = () => {
  const { users } = useUsers();

  return (
    <div className="container w-[85vw] py-10 mx-auto animate-fadeIn">
      <h2 className="text-3xl font-semibold text-gray-800 text-center">Super User Dashboard</h2>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold bg-zinc-200">User Information</h3>
        <table className="w-full mt-4 bg-white border shadow-md text-center">
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

export default SuperUserDashboard;