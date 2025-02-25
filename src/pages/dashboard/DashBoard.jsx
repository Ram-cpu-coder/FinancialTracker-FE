import React, { useState, useEffect, useRef } from "react";
import BarChart from "../../components/graphs/BarChart";
import DoughnutGraph from "../../components/graphs/DoughnutGraph";
import LineIncome from "../../components/graphs/LineIncome";
import LineExpense from "../../components/graphs/LineExpense";
import { useUser } from "../../context/UserContext";
import { useTransaction } from "../../context/TransactionContext";
import { GridLoader } from "react-spinners";

const DashBoard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [incomeType, setIncomeType] = useState([]);
  const [expenseType, setExpenseType] = useState([]);
  const { user } = useUser();
  const { tranData, transactionData } = useTransaction();

  const totalIncome = Math.abs(
    incomeType.reduce((acc, item) => (acc += item.amount), 0)
  );
  const totalExpense = Math.abs(
    expenseType.reduce((acc, item) => (acc += item.amount), 0)
  );
  const transactionDataDashBoard = async () => {
    setIsLoading(true);
    await transactionData();
    setIsLoading(false);
  };

  useEffect(() => {
    transactionDataDashBoard();
  }, []);

  useEffect(() => {
    const filteredIncome = tranData.filter((item) => item.type === "Income");
    const filteredExpense = tranData.filter((item) => item.type === "Expense");

    setExpenseType(filteredExpense);
    setIncomeType(filteredIncome);
  }, [tranData]);

  return user._id ? (
    <div className="w-full bg-gray-800 relative">
      <div className="w-full flex justify-center">
        <div className="flex justify-center flex-col p-5 md:w-[80%] w-full">
          <h1 className="text-4xl font-bold p-2 text-white">DashBoard</h1>
          <hr className="text-white" />

          {/* Top */}
          <div className="flex gap-5 justify-between p-3 flex-col md:flex-row">
            {/* Balance */}
            <div className="flex bg-yellow-500 sm:w-[100%] md:w-[48%] lg:w-[32%] h-[auto] justify-center rounded-lg p-3 gap-3 items-center">
              <div>
                <img
                  src="/assets/balance.png"
                  alt=""
                  className="h-[auto] w-[90px]"
                />
              </div>
              <div className="flex flex-col w-full justify-start">
                <p className="font-bold">Balance</p>
                <hr />
                <p>
                  {tranData.reduce((acc, item) => {
                    return (acc += item.amount);
                  }, 0) < 0
                    ? "-"
                    : ""}
                  $
                  {tranData.reduce((acc, item) => {
                    return Math.abs((acc += item.amount));
                  }, 0)}
                </p>
              </div>
            </div>

            {/* Income */}
            <div className="flex bg-green-600 sm:w-[100%] md:w-[48%] lg:w-[32%] justify-center rounded-lg p-3 gap-3 items-center">
              <div>
                <img
                  src="/assets/income.png"
                  alt=""
                  className="h-[auto] w-[80px]"
                />
              </div>
              <div className="flex flex-col w-full justify-start">
                <p className="font-bold">Income</p>
                <hr />
                <p>${totalIncome}</p>
              </div>
            </div>

            {/* Expense */}
            <div className="flex bg-red-400 sm:w-[100%] md:w-[48%] lg:w-[32%] justify-center rounded-lg p-3 gap-3 items-center">
              <div>
                <img
                  src="/assets/expense.png"
                  alt=""
                  className="h-[auto] w-[65px]"
                />
              </div>
              <div className="flex flex-col w-full justify-start">
                <p className="font-bold">Expense</p>
                <hr />
                <p>
                  $
                  {Math.abs(
                    expenseType.reduce((acc, item) => (acc += item.amount), 0)
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Graphs */}
          <div className="flex sm:flex-row w-full flex-col gap-5 justify-center items-center">
            {/* Graphs for Doughnut and Line charts */}
            <DoughnutGraph income={totalIncome} expense={totalExpense} />
            <LineIncome income={totalIncome} />
            <LineExpense expense={totalExpense} />
          </div>

          {/* Bar chart section */}
          <div className="p-3">
            <BarChart income={totalIncome} expense={totalExpense} />
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <GridLoader color="#0d6bc9" speedMultiplier={1} />
        </div>
      )}
    </div>
  ) : (
    ""
  );
};

export default DashBoard;
