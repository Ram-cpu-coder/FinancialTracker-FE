import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ income, expense }) => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: ["# of Amount"],
        data: [340, 459],
        backgroundColor: ["#d75b5b", "#026617"],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
      },
    },
  };

  return (
    <div className="w-full h-[400px] bg-white rounded-lg flex items-center justify-center">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
