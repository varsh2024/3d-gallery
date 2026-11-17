import React from "react";
import { Link } from "react-router-dom";
import { FaChartBar, FaUsers, FaBell, FaCog, FaFileAlt, FaHeadset } from "react-icons/fa";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import "./Dashboard.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Line Chart Data
  const lineChartData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "User Activity",
        data: [40, 60, 30, 80, 50, 70, 60],
        borderColor: "#7e57c2",
        backgroundColor: "rgba(126, 87, 194, 0.2)",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: true, position: "top" } },
    scales: {
      x: { grid: { display: false }, ticks: { font: { size: 14 } } },
      y: { beginAtZero: true, grid: { color: "#ddd" }, title: { display: true, text: "User Engagement (%)", font: { size: 16 } }, ticks: { font: { size: 14 } } },
    },
  };

  // Pie Chart Data
  const pieChartData = {
    labels: ["New Users", "Returning Users"],
    datasets: [
      {
        data: [55, 45],
        backgroundColor: ["#42a5f5", "#66bb6a"],
      },
    ],
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin ⚡</h2>
        <Link to="/" className="sidebar-button">
          <FaChartBar /> Dashboard
        </Link>
        <Link to="/customer-activity" className="sidebar-button">
          <FaUsers /> Customer Activity
        </Link>
        <button className="sidebar-button">
          <FaBell /> Notifications
        </button>
        <button className="sidebar-button">
          <FaFileAlt /> Reports
        </button>
        <button className="sidebar-button">
          <FaHeadset /> Support
        </button>
        <button className="sidebar-button">
          <FaCog /> Settings
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Dashboard Overview</h2>

        {/* Overview Cards */}
        <div className="cards-container">
          <div className="card"><h3>Total Visitors</h3><p>5,423</p></div>
          <div className="card"><h3>New Users</h3><p>1,893</p></div>
          <div className="card"><h3>Active Subs</h3><p>189</p></div>
          <div className="card"><h3>Revenue</h3><p>$12,340</p></div>
          <div className="card"><h3>Bounce Rate</h3><p>35%</p></div>
          <div className="card"><h3>Conversion Rate</h3><p>4.8%</p></div>
        </div>

        {/* Line Graph */}
        <div className="graph-container">
          <h3>User Engagement</h3>
          <Line data={lineChartData} options={lineChartOptions} />
        </div>

        {/* Small Pie Chart */}
        <div className="small-chart-container">
          <h3>User Distribution</h3>
          <Pie data={pieChartData} />
        </div>

        {/* Recent Activities */}
        <div className="activity-container">
          <h3>Recent Activities</h3>
          <ul>
            <li>User John signed up.</li>
            <li>Emma upgraded to premium.</li>
            <li>Server maintenance completed.</li>
            <li>Admin added a new announcement.</li>
            <li>New feature released: Dark Mode.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
