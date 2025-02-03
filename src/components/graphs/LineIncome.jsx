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

//register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineIncome = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Income",
        data: [933, 324, 345, 13, 232, 141],
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
          text: "Months", // X-axis label
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
    <div className="md:w-[350px] w-full min-h-[300px] bg-white rounded-lg flex items-center p-1">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineIncome;
