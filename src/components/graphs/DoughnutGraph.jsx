import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

const DoughnutGraph = ({ income, expense }) => {
  const data = {
    labels: ["Expense", "Income"],
    datasets: [
      {
        label: "# of Amount",
        data: [expense, income], // data for each section
        backgroundColor: ["#d75b5b", "#026617"], // colors for each section
        borderColor: ["#FF6384", "#36A2EB"],
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
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] min-h-[300px] bg-white rounded-lg flex items-center p-2">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutGraph;
