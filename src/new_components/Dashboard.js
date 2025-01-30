import React from "react";
import "./Dashboard.css";
import DashboardCharts from "./DashboardCharts";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>My Dashboard</h2>
        <nav>
          <ul>
            <li><a href="#overview" className="active">Overview</a></li>
            <li><a href="#analytics">Analytics</a></li>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#logout">Logout</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="content">
        <header>
          <h1>Welcome to Your Dashboard</h1>
          <button className="btn-primary">New Task</button>
        </header>

        <section className="cards">
          <div className="card">
            <h3>Revenue</h3>
            <p>$5,000</p>
          </div>
          <div className="card">
            <h3>Users</h3>
            <p>1,245</p>
          </div>
          <div className="card">
            <h3>Tasks</h3>
            <p>75 Pending</p>
          </div>
        </section>

        <section className="charts">
          <DashboardCharts />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
