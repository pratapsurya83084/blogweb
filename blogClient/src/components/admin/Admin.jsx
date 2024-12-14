import React, { useState } from "react";
import { FaHome, FaUsers, FaCog, FaBars } from "react-icons/fa";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Admin = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    // Data for the bar chart
    const barData = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Revenue",
          data: [12000, 15000, 13000, 17000, 19000, 21000],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    };

    // Data for the histogram
    const histogramData = {
      labels: [
        "0-10",
        "10-20",
        "20-30",
        "30-40",
        "40-50",
        "50-60",
        "60-70",
        "70-80",
      ],
      datasets: [
        {
          label: "Frequency",
          data: [5, 12, 8, 15, 7, 10, 6, 9],
          backgroundColor: "rgba(153, 102, 255, 0.5)",
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 1,
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart",
        },
      },
    };

    switch (activeTab) {
      case "Dashboard":
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-xl font-semibold">
                  Total Users(registered user)
                </h2>
                <p className="text-2xl mt-2">2</p>
              </div>
              <div className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-xl font-semibold">Total Blogs</h2>
                <p className="text-2xl mt-2">$12,000</p>
              </div>
              <div className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-xl font-semibold">Total blog Likes</h2>
                <p className="text-2xl mt-2">30</p>
              </div>
            </div>

            <div className="lg:flex ">
              <div className="w-[400px] md: mx-auto mt-8">
                <h2 className="text-xl font-bold mb-4">Bar Chart</h2>
                <Bar data={barData} options={options} />
              </div>

              <div className="w-[400px] md:w- mx-auto mt-8">
                <h2 className="text-xl font-bold mb-4">Histogram</h2>
                <Bar data={histogramData} options={options} />
              </div>
            </div>
          </div>
        );
      case "Users":
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">Users</h1>
            <table className="w-full bg-white shadow rounded-lg">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">Name</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">John Doe</td>
                  <td className="p-2">john@example.com</td>
                  <td className="p-2">Admin</td>
                </tr>
                <tr>
                  <td className="p-2">Jane Smith</td>
                  <td className="p-2">jane@example.com</td>
                  <td className="p-2">Editor</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case "Settings":
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">Settings</h1>
            <p>Here you can manage your settings.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-indigo-600 text-white p-4 z-10 transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:w-64`}
      >
        <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
        <nav className="space-y-4">
          <button
            onClick={() => setActiveTab("Dashboard")}
            className={`flex items-center space-x-2 p-2 rounded ${
              activeTab === "Dashboard"
                ? "bg-indigo-800"
                : "hover:bg-indigo-700"
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
          <button
            onClick={() => setActiveTab("Settings")}
            className={`flex items-center space-x-2 p-2 rounded ${
              activeTab === "Settings" ? "bg-indigo-800" : "hover:bg-indigo-700"
            }`}
          >
            <FaCog />
            <span>Settings</span>
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

      {/* Main Content */}
      <div className="flex-1 p-6">{renderContent()}</div>
    </div>
  );
};

export default Admin;
