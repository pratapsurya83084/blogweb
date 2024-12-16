import React from 'react'
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



// Data for the Bar Chart and Histogram (to be replaced with your actual data)
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

const histogramData = {
  labels: ["0-10", "10-20", "20-30", "30-40", "40-50", "50-60", "60-70", "70-80"],
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
const Dashboard = () => {
  return (
    <div>
        <div className="md:ml-64">
            <h1 className="text-3xl font-bold mb-4 mt-10 md:mt-0">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 shadow rounded-lg">
                <h2 className="text-xl font-semibold">Total Users (registered user)</h2>
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

            <div className="xl:flex mt-8 bg-white p-3 rounded-xl">
              <div className="w-[400px] mx-auto p-4 bg-white shadow-xl rounded-xl">
                <h2 className="text-xl font-bold mb-4">Bar Chart</h2>
                <Bar data={barData} options={options} />
              </div>

              <div className="w-[400px] mx-auto mt-8 p-4 shadow-xl  bg-white rounded-xl">
                <h2 className="text-xl font-bold m">Histogram</h2>
                <Bar data={histogramData} options={options} />
              </div>
            </div>
          </div>
    </div>
  )
}

export default Dashboard
