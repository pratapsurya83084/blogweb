import React, { useState } from 'react'
import {  FaTrash } from "react-icons/fa";

const users = [
  {
    Username: "pratap",
    email: "pratap@example.com",
  },
  {
    Username: "xyz",
    email: "xyz@example.com",
  },
];
const Users = () => {
const [searchTerm,SetSearchTerm]=useState(" ")
  // console.log(searchTerm);
  
const filterdUser=users.filter((arr)=>
  arr.Username.toLowerCase().includes(searchTerm.toLowerCase()) ||
arr.email.toLowerCase().includes(searchTerm.toLowerCase())
);



  return (
    <div>
  <div className="md:ml-64">
    {/* Page Title */}
    <h1 className="text-3xl font-bold mb-4 mt-10 md:mt-0">Users</h1>

    <div className="flex justify-end mb-4">
      <input
        type="text"
        placeholder="Search User..."
        value={searchTerm}
        onChange={(e)=>SetSearchTerm(e.target.value)}
        className="w-full md:w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Responsive Table Container */}
    <div className="overflow-x-auto">
  <table className="min-w-full bg-white shadow-md rounded-lg">
    <thead>
      <tr>
        <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
          Sr. No
        </th>
        <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
          Username
        </th>
        <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
          Email
        </th>
        <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 tracking-wider">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      {filterdUser.map((item, index) => (
        <tr key={index} className="hover:bg-gray-100">
          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            {index + 1}
          </td>
          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            {item.Username}
          </td>
          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            {item.email}
          </td>
          <td className="text-center px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <button
              className="text-red-600 p-1 rounded px-3 "
              onClick={() => handleDelete(item.id)} // Call handleDelete with the item's id
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
</div>

  )
}

export default Users
