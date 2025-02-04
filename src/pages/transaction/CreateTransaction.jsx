import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const CreateTransaction = ({ setToggleTransactionBox }) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="bg-white rounded-lg p-5 border h-[auto] w-[40%] addTransactionMediaQuery">
        <span
          onClick={() => setToggleTransactionBox(false)}
          className="flex justify-end"
        >
          <IoCloseOutline className=" w-[30px] h-[auto] cursor-pointer" />
        </span>
        <hr className="my-3" />
        {/* form transaction creation */}
        <div className="w-full h-full p-3 border rounded-lg">
          <h1 className="text-3xl font-bold mb-5 text-center">
            Add a Transaction !
          </h1>

          <div className="flex flex-col mx-3 px-2">
            <label htmlFor="transactionType">Transaction Type</label>
            <select
              name="transactionType"
              id="transactionType"
              className="outline rounded my-2 px-3 py-1"
            >
              <option value="default" disabled>
                --select--
              </option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          <div className="flex flex-col mx-3 px-2">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="Salary"
              className="outline rounded my-2 px-3 py-1"
            />
          </div>

          <div className="flex flex-col mx-3 px-2">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              placeholder="Amount"
              className="outline rounded my-2 px-3 py-1"
            />
          </div>

          <div className="flex flex-col mx-3 px-2">
            <label htmlFor="">Transaction Date</label>
            <input
              type="date"
              placeholder="Amount"
              className="outline rounded my-2 px-3 py-1"
            />
          </div>
          <div className="m-3 px-2">
            <button className="flex justify-center p-2 rounded-lg bg-blue-600 active:bg-blue-800 cursor-pointer text-white w-full">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTransaction;
