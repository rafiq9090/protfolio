import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const DashboardCharts = () => {
  useEffect(() => {
    // Sales Chart
    const salesCtx = document.getElementById("salesChart").getContext("2d");
    new Chart(salesCtx, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Sales",
            data: [300, 400, 500, 700, 800],
            backgroundColor: "rgba(0, 123, 255, 0.2)",
            borderColor: "rgba(0, 123, 255, 1)",
            borderWidth: 2,
          },
        ],
      },
    });

    // Traffic Chart
    const trafficCtx = document.getElementById("trafficChart").getContext("2d");
    new Chart(trafficCtx, {
      type: "doughnut",
      data: {
        labels: ["Desktop", "Mobile", "Tablet"],
        datasets: [
          {
            label: "Traffic",
            data: [60, 30, 10],
            backgroundColor: ["#007bff", "#28a745", "#ffc107"],
          },
        ],
      },
    });
  }, []);

  return (
    <div className="charts-container">
      <div className="chart">
        <h3>Monthly Sales</h3>
        <canvas id="salesChart"></canvas>
      </div>
      <div className="chart">
        <h3>Website Traffic</h3>
        <canvas id="trafficChart"></canvas>
      </div>
    </div>
  );
};

export default DashboardCharts;
