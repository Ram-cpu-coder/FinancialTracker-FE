import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { GridLoader } from "react-spinners";
import { useTransaction } from "../../context/TransactionContext";

const DeleteTransaction = ({ selectedIds, setToggleDeleteBox }) => {
  const [isLoading, setIsLoading] = useState(false);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const { transactionData } = useTransaction();
  const delTransaction = async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      setIsLoading(true);

      //   calling delete API
      const deletedItem = await axios.delete(`${API_BASE_URL}/transactions`, {
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
        data: {
          transactionsID: selectedIds,
        },
      });
      transactionData();
      //   loader
      setIsLoading(false);
      toast.success("Deleted successfully!!!");
      setToggleDeleteBox(false);
      console.log(deletedItem);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      //   checking accessToken
      !accessToken ? toast.error("Not Authorised !!!") : "";

      error.response
        ? toast.error(error.response?.data?.message)
        : toast.error("Failed to connect to Server!");
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center relative">
      {selectedIds.length === 0 ? (
        <div className="bg-white rounded-lg p-5 border h-[auto] w-[90%] md:w-[70%] lg:w-[40%]">
          <span
            onClick={() => setToggleDeleteBox(false)}
            className="flex justify-end"
          >
            <IoCloseOutline className="w-[30px] h-[auto] cursor-pointer" />
          </span>
          <hr className="my-3" />
          <div className="w-full h-full p-3 border rounded-lg">
            <h1 className="text-2xl md:text-3xl font-bold mb-5 text-center">
              Delete Transaction
            </h1>
            <p className="text-center mb-5 text-sm md:text-base">
              You haven't selected any transaction! Please select at least one
              to Delete.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg p-5 border h-[auto] w-[90%] md:w-[70%] lg:w-[40%]">
          <span
            onClick={() => setToggleDeleteBox(false)}
            className="flex justify-end"
          >
            <IoCloseOutline className="w-[30px] h-[auto] cursor-pointer" />
          </span>
          <hr className="my-3" />
          <div className="w-full h-full p-3 border rounded-lg">
            <h1 className="text-2xl md:text-3xl font-bold mb-5 text-center">
              Delete Transaction
            </h1>
            <p className="text-center mb-5 text-sm md:text-base">
              Are you sure you want to delete this transaction?
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="p-2 rounded-lg bg-red-600 active:bg-red-800 cursor-pointer text-white text-sm md:text-base"
                onClick={delTransaction}
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setToggleDeleteBox(false)}
                className="p-2 rounded-lg bg-gray-600 active:bg-gray-800 cursor-pointer text-white text-sm md:text-base"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
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

export default DeleteTransaction;
