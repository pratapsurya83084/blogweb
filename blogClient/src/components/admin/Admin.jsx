import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);  // State for active tab

  // Sample Data for Stats, Posts, and Users
  const stats = {
    totalUsers: 120,
    totalPosts: 35,
    activeUsers: 75,
  };

  const posts = [
    { id: 1, title: 'How to use React', author: 'John Doe', date: '2024-12-10' },
    { id: 2, title: 'Mastering Tailwind CSS', author: 'Jane Smith', date: '2024-12-05' },
    { id: 3, title: 'Building Scalable Apps', author: 'Emily Davis', date: '2024-11-29' },
  ];

  const users = [
    { id: 1, name: 'John Doe', email: 'johndoe@gmail.com', role: 'Admin', date: '2024-01-01' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@gmail.com', role: 'Editor', date: '2024-03-10' },
    { id: 3, name: 'Emily Davis', email: 'emilydavis@gmail.com', role: 'Subscriber', date: '2024-07-15' },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Function to handle clicking on the sidebar and setting the active tab
  const handleSidebarClick = (index) => {
    setActiveTabIndex(index);  // Set the active tab based on sidebar click
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-16'
        } transition-width duration-300 bg-indigo-700 text-white p-4 space-y-6`}
      >
        <div className="flex justify-between items-center">
          <span className={`text-2xl font-bold ${sidebarOpen ? 'inline' : 'hidden'}`}>Admin</span>
          <button
            onClick={toggleSidebar}
            className="text-white text-xl focus:outline-none"
          >
            {sidebarOpen ? '←' : '→'}
          </button>
        </div>
        <nav className="mt-8 space-y-4">
          <a
            href="#"
            className="block py-2 px-4 hover:bg-indigo-600 rounded"
            onClick={() => handleSidebarClick(0)}  // Handle click for Dashboard
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block py-2 px-4 hover:bg-indigo-600 rounded"
            onClick={() => handleSidebarClick(1)}  // Handle click for Users
          >
            Users
          </a>
          <a
            href="#"
            className="block py-2 px-4 hover:bg-indigo-600 rounded"
            onClick={() => handleSidebarClick(2)}  // Handle click for Posts
          >
            Posts
          </a>
          <a href="#" className="block py-2 px-4 hover:bg-indigo-600 rounded">
            Settings
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Admin Dashboard</h1>
          <div className="space-x-4">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500">
              Log Out
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
            <p className="text-3xl font-bold text-indigo-600">{stats.totalUsers}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700">Total Posts</h3>
            <p className="text-3xl font-bold text-indigo-600">{stats.totalPosts}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700">Active Users</h3>
            <p className="text-3xl font-bold text-indigo-600">{stats.activeUsers}</p>
          </div>
        </div>

        {/* Tabs for Users and Posts */}
        <Tabs selectedIndex={activeTabIndex} onSelect={setActiveTabIndex}>
          <TabList className="flex space-x-4 mb-6">
            <Tab className="py-2 px-4 cursor-pointer text-lg font-semibold text-gray-700 hover:bg-indigo-600 rounded-lg">Users</Tab>
            <Tab className="py-2 px-4 cursor-pointer text-lg font-semibold text-gray-700 hover:bg-indigo-600 rounded-lg">Posts</Tab>
          </TabList>

          <TabPanel>
            {/* Users Table */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Users List</h2>
              <table className="min-w-full table-auto">
                <thead>
                  <tr>
                    <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Name</th>
                    <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Email</th>
                    <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Role</th>
                    <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="py-2 px-4 border-b">{user.name}</td>
                      <td className="py-2 px-4 border-b">{user.email}</td>
                      <td className="py-2 px-4 border-b">{user.role}</td>
                      <td className="py-2 px-4 border-b">{user.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabPanel>

          <TabPanel>
            {/* Post Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Create Post</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">Blog Title</label>
                  <input
                    type="text"
                    className="mt-2 w-full px-4 py-2 border rounded-lg"
                    placeholder="Enter blog title"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Blog Subtitle</label>
                  <input
                    type="text"
                    className="mt-2 w-full px-4 py-2 border rounded-lg"
                    placeholder="Enter blog subtitle"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Headline</label>
                  <input
                    type="text"
                    className="mt-2 w-full px-4 py-2 border rounded-lg"
                    placeholder="Enter headline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Blog Content</label>
                  <textarea
                    className="mt-2 w-full px-4 py-2 border rounded-lg"
                    placeholder="Enter blog content"
                    rows="5"
                  />
                </div>
                <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500">
                  Publish Post
                </button>
              </form>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
