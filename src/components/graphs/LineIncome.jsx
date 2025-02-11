import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineIncome = ({ income }) => {
  const data = {
    labels: [""],
    datasets: [
      {
        label: "Income",
        data: [income],
        fill: false,
        backgroundColor: "#026617",
        borderColor: "#026617",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Position of the legend
      },
      tooltip: {
        enabled: true, // Enable tooltips when hovering over data points
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "", // X-axis label
        },
      },
      y: {
        title: {
          display: true,
          text: "Income", // Y-axis label
        },
      },
    },
  };

  return (
    <div className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-[300px] bg-white rounded-lg flex items-center p-2">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineIncome;
