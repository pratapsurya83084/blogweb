import React, { useState } from "react";
import { FaHome, FaUsers, FaCog, FaBars, FaPlus, FaBlog } from "react-icons/fa";
import Dashboard from "./Dashboard";
import Users from './Users'
import AllBlogs from "./AllBlogs";
import AddBlogs from "./AddBlogs";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleDelete = (index) => {
    // Handle the delete action for the user at the specified index
    console.log("Deleting user at index:", index);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Users":
        return <Users />;
      case "Settings":
        return (
          <div className="md:ml-64">
            <h1 className="text-3xl font-bold mb-4">Settings</h1>
            <p>Here you can manage your settings.</p>
          </div>
        );
      case "Blogs":
        return <AllBlogs />;
      case "AddBlogs":
        return <AddBlogs />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-indigo-600 text-white p-4 z-10 transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-64 md:h-full`}
      >
        <h2 className="text-2xl font-bold mb-8 ml-10 md:ml-0">Admin Dashboard</h2>
        <nav className="space-y-4">
          <button
            onClick={() => setActiveTab("Dashboard")}
            className={`flex items-center space-x-2 p-2 rounded ${
              activeTab === "Dashboard" ? "bg-indigo-800" : "hover:bg-indigo-700"
            }`}
          >
            <FaHome />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab("Users")}
            className={`flex items-center space-x-2 p-2 rounded ${
              activeTab === "Users" ? "bg-indigo-800" : "hover:bg-indigo-700"
            }`}
          >
            <FaUsers />
            <span>Users</span>
          </button>
          {/* <button
            onClick={() => setActiveTab("Settings")}
            className={`flex items-center space-x-2 p-2 rounded ${
              activeTab === "Settings" ? "bg-indigo-800" : "hover:bg-indigo-700"
            }`}
          >
            <FaCog />
            <span>Settings</span>
          </button> */}

          {/* Add the new buttons */}
          <button
            onClick={() => setActiveTab("Blogs")}
            className={`flex items-center space-x-2 p-2 rounded ${
              activeTab === "Blogs" ? "bg-indigo-800" : "hover:bg-indigo-700"
            }`}
          >
            <FaBlog />
            <span>Blogs</span>
          </button>
          <button
            onClick={() => setActiveTab("AddBlogs")}
            className={`flex items-center space-x-2 p-2 rounded ${
              activeTab === "AddBlogs" ? "bg-indigo-800" : "hover:bg-indigo-700"
            }`}
          >
            <FaPlus />
            <span>Add Blog</span>
          </button>
        </nav>
      </div>

      {/* Burger Menu for Mobile */}
      <button
        className="absolute top-4 left-4 z-20 md:hidden text-indigo-600 bg-white p-2 rounded-full shadow"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaBars size={20} />
      </button>

      {/* Main Content with Overflow Scroll */}
      <div className="flex-1 p-4 overflow-x-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default Admin;
