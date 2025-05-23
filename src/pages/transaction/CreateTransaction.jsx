import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { GridLoader } from "react-spinners";
import NewCustomInput from "../../components/NewCustomInput";
import { useTransaction } from "../../context/TransactionContext";
import useForm from "../../hooks/useForm";
import { createTransactionAxios } from "../../../helper/axiosHelper";

const CreateTransaction = ({ setToggleTransactionBox }) => {
  const { transactionData } = useTransaction();
  const [isLoading, setIsLoading] = useState(false);

  const initialState = {
    type: "",
    amount: "",
    date: "",
    description: "",
  };

  const { form, setForm, handleOnChange } = useForm(initialState);
  const fields = [
    {
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Salary",
      name: "description",
      value: form.description,
    },
    {
      label: "Amount",
      type: "number",
      required: true,
      placeholder: "45",
      name: "amount",
      value: form.amount,
    },
    {
      label: "Date",
      type: "date",
      required: true,
      name: "date",
      value: form.date,
    },
  ];

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    const data = await createTransactionAxios(form);
    if (data.status == "success") {
      await transactionData();
      setIsLoading(false);
      // console.log(data);
      toast[data.status](data.message);
      setForm(initialState);
      setToggleTransactionBox(false);
    } else {
      // console.log("WE GOT ERROR");
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full h-full relative">
      {isLoading ? (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <GridLoader color="#0d6bc9" speedMultiplier={1} />
        </div>
      ) : (
        <div className="h-auto w-full flex justify-center items-center">
          <div className="bg-white rounded-lg p-5 h-full w-[90%] md:w-[70%] lg:w-[40%]">
            <span
              onClick={() => setToggleTransactionBox(false)}
              className="flex justify-end"
            >
              <IoCloseOutline className=" w-[30px] h-[auto] cursor-pointer" />
            </span>
            {/* form transaction creation */}
            <form
              className="w-full h-full p-3 rounded-lg"
              onSubmit={handleOnSubmit}
            >
              <h1 className="text-3xl font-bold mb-5">Add your Transaction!</h1>

              <div className="mb-4">
                <label htmlFor="type" className="block text-gray-700">
                  Transaction Type
                </label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleOnChange}
                  id="type"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="default" selected>
                    --select--
                  </option>
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
                </select>
              </div>

              {fields.map((item) => {
                return (
                  <NewCustomInput
                    onChange={handleOnChange}
                    key={item.name}
                    {...item}
                  />
                );
              })}

              <button className="flex justify-center p-2 rounded-lg bg-blue-600 active:bg-blue-800 cursor-pointer text-white w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateTransaction;
