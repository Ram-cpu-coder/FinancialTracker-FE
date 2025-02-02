import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BarChart from "../../components/graphs/BarChart";
import DoughnutGraph from "../../components/graphs/DoughnutGraph";
import LineIncome from "../../components/graphs/LineIncome";
import LineExpense from "../../components/graphs/LineExpense";

const DashBoard = () => {
  return (
    <div className="w-full bg-gray-800">
      <Navbar />
      <div className="w-full flex justify-center">
        <div className="flex justify-center flex-col p-5 w-[80%]">
          <h1 className="text-4xl font-bold p-2 text-white">DashBoard</h1>
          <hr className="text-white" />

          {/* Top */}
          <div className="flex gap-5 justify-between p-3 flex-col md:flex-row">
            {/* Balance */}
            <div className="flex bg-yellow-500 md:w-[500px] h-[auto] justify-center rounded-lg p-3 gap-3 items-center">
              <div>
                <img
                  src="/assets/balance.png"
                  alt=""
                  srcset=""
                  className="h-[auto] w-[90px]"
                />
              </div>
              <div className="flex flex-col w-full justify-start">
                <p>Balance</p>
                <hr />
                <p>amount</p>
              </div>
            </div>
            {/* income */}
            <div className="flex bg-green-600 md:w-[500px] justify-center rounded-lg p-3 gap-3 items-center">
              <div>
                <img
                  src="/assets/income.png"
                  alt=""
                  srcset=""
                  className="h-[auto] w-[80px]"
                />
              </div>
              <div className="flex flex-col w-full justify-start">
                <p>Income</p>
                <hr />
                <p>amount</p>
              </div>
            </div>
            {/* Expense */}
            <div className="flex bg-red-400 md:w-[500px] justify-center rounded-lg p-3 gap-3 items-center">
              <div>
                <img
                  src="/assets/expense.png"
                  alt=""
                  srcset=""
                  className="h-[auto] w-[65px]"
                />
              </div>
              <div className="flex flex-col w-full justify-start">
                <p>Expense</p>
                <hr />
                <p>amount</p>
              </div>
            </div>
          </div>

          {/* graphs */}
          <div className="flex justify-between p-3 flex-wrap flex-row gap-1">
            {/* <BarChart /> */}
            <DoughnutGraph />
            <LineIncome />
            <LineExpense />
          </div>
          <div className="p-3">
            <BarChart />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DashBoard;
