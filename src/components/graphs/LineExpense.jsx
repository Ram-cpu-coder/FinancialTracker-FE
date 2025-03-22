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

const LineExpense = ({ expense }) => {
  const data = {
    labels: [""],
    datasets: [
      {
        label: "Expense",
        data: [expense],
        fill: false,
        backgroundColor: "#d75b5b",
        borderColor: "#d75b5b",
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
          text: "Expense", // Y-axis label
        },
      },
    },
  };

  return (
    <div className="sm:w-[100%] md:w-[48%] lg:w-[32%] min-h-[300px] bg-white rounded-lg flex items-center p-1">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineExpense;
