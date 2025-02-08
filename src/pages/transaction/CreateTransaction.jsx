import axios from "axios";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { GridLoader } from "react-spinners";
import { use } from "react";

const CreateTransaction = ({ setToggleTransactionBox }) => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [isLoading, setIsLoading] = useState(false);

  const initialState = {
    type: "",
    amount: "",
    date: "",
    description: "",
  };
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(form);
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.post(
        `${API_BASE_URL}/transactions/add`,
        form,
        {
          headers: {
            Authorization: accessToken,
          },
        }
      );
      setIsLoading(false);
      console.log(response);
      toast.success("TRANSACTION ADDED");
      setForm(initialState);
    } catch (error) {
      console.log(error);
      console.log("WE GOT ERROR");
      toast.error("Error");
    }
  };
  return (
    <div className="h-full w-full flex justify-center items-center relative">
      <div className="bg-white rounded-lg p-5 border h-[auto] w-[40%] addTransactionMediaQuery">
        <span
          onClick={() => setToggleTransactionBox(false)}
          className="flex justify-end"
        >
          <IoCloseOutline className=" w-[30px] h-[auto] cursor-pointer" />
        </span>
        <hr className="my-3" />
        {/* form transaction creation */}
        <form
          className="w-full h-full p-3 border rounded-lg"
          onSubmit={handleOnSubmit}
        >
          <h1 className="text-3xl font-bold mb-5 text-center">
            Add a Transaction !
          </h1>

          <div className="flex flex-col mx-3 px-2">
            <label htmlFor="type">Transaction Type</label>
            <select
              name="type"
              value={form.type}
              onChange={handleOnChange}
              id="type"
              className="outline rounded my-2 px-3 py-1"
            >
              <option value="default" selected>
                --select--
              </option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>

          <div className="flex flex-col mx-3 px-2">
            <label htmlFor="description">Title</label>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleOnChange}
              placeholder="Salary"
              className="outline rounded my-2 px-3 py-1"
            />
          </div>

          <div className="flex flex-col mx-3 px-2">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleOnChange}
              placeholder="Amount"
              className="outline rounded my-2 px-3 py-1"
            />
          </div>

          <div className="flex flex-col mx-3 px-2">
            <label htmlFor="dateTran">Transaction Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleOnChange}
              placeholder="Amount"
              className="outline rounded my-2 px-3 py-1"
            />
          </div>
          <div className="m-3 px-2">
            <button className="flex justify-center p-2 rounded-lg bg-blue-600 active:bg-blue-800 cursor-pointer text-white w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div>
            <GridLoader color="#0d6bc9" speedMultiplier={1} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateTransaction;
