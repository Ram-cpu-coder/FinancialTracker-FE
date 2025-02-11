import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { GridLoader } from "react-spinners";
import { useTransaction } from "../../context/TransactionContext";
import { deleteTransaction } from "../../../helper/axiosHelper";

const DeleteTransaction = ({
  selectedIds,
  setSelectedIds,
  setToggleDeleteBox,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { transactionData } = useTransaction();

  const delTransaction = async () => {
    setIsLoading(true);
    const data = await deleteTransaction({
      transactionsID: selectedIds,
    });

    if (data.status == "success") {
      // updating the new data
      await transactionData();
      //   loader
      setIsLoading(false);
      // toast message
      toast.success("Deleted successfully!!!");
      setToggleDeleteBox(false);
      setSelectedIds([]);
    } else {
      setIsLoading(false);
      !accessToken ? toast.error("Not Authorised !!!") : "";
      error.response
        ? toast.error(error.response?.data?.message)
        : toast.error("Failed to connect to Server!");
    }
  };

  return (
    <div className="w-full h-full relative">
      {isLoading ? (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <GridLoader color="#0d6bc9" speedMultiplier={1} />
        </div>
      ) : (
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
                  You haven't selected any transaction! Please select at least
                  one to Delete.
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
                    Delete {selectedIds.length} transactions
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
        </div>
      )}
    </div>
  );
};

export default DeleteTransaction;
