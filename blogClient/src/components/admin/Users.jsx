import React from 'react'
import {  FaTrash } from "react-icons/fa";
const users = [
  {
    Username: "John Doe",
    email: "john.doe@example.com",
  },
  {
    Username: "Bob Johnson",
    email: "bob.johnson@example.com",
  },
];
const Users = () => {
  return (
    <div>
         <div className="md:ml-64">
            <h1 className="text-3xl font-bold mb-4 mt-10 md:mt-0">Users</h1>
            <table className="w-full bg-white shadow rounded-lg">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 text-left">Sr. No.</th>
                  <th className="p-3 text-left">Username</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="overflow-x-scroll">
                {users.map((user, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-3 text-left">{index + 1}</td>
                    <td className="p-3 text-left">{user.Username}</td>
                    <td className="p-3 text-left">{user.email}</td>
                    <td className="p-3 text-left">
                      <button
                        className="bg-red-500 text-white p-1 rounded"
                        onClick={() => handleDelete(index)}
                      >
                        <FaTrash/>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    </div>
  )
}

export default Users
