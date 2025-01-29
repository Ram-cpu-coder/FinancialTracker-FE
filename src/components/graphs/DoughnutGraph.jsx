import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";

// registering the chart components
ChartJS.register(ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

const DoughnutGraph = () => {
  const data = {
    labels: ["Expense", "Income"],
    datasets: [
      {
        label: "# of Amount",
        data: [300, 50], // data for each section
        backgroundColor: ["#d75b5b", "#026617"], //colors for each section
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
    <div className="w-[500px] h-[auto] bg-white rounded-lg p-3">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutGraph;
