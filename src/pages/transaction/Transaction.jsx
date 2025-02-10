import React, { useEffect, useState } from "react";
import CheckBox from "../../components/CheckBox";
import CreateTransaction from "./CreateTransaction";
import DeleteTransaction from "./DeleteTransaction";
import { useTransaction } from "../../context/TransactionContext";

import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { GridLoader } from "react-spinners";

const Transaction = () => {
  const { transactionData, tranData } = useTransaction();

  const [isToggleTransactionBox, setToggleTransactionBox] = useState(false);
  const [toggleDeleteBox, setToggleDeleteBox] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [errorBox, setErrorBox] = useState(false);

  const openTransaction = () => {
    return setToggleTransactionBox(true);
  };
  const delTransactionButton = () => {
    return setToggleDeleteBox(true);
  };

  const fetchTData = async () => {
    setIsLoading(true);
    await transactionData();
    await tranData;
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTData();
  }, []);

  return isLoading ? (
    <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-50">
      <GridLoader color="#0d6bc9" speedMultiplier={1} />
    </div>
  ) : (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-center relative w-full bg-white min-h-full">
          <div className="px-5 py-10 my-5 bg-gray-800 text-white min-h-[60vh] w-[80%] rounded-lg transactionMediaQuery">
            <hr className="my-5" />
            <div className="flex justify-between py-2 barForTransaction w-full">
              <div className="flex justify-between items-center w-[50%]">
                <p>{tranData.length} transaction(s) found!</p>
                <input
                  type="text"
                  placeholder="Search transactions..."
                  className="outline bg-white text-black px-3 py-1 rounded-lg"
                />
              </div>
              <div className="flex justify-between w-[40%]">
                <button
                  className="flex items-center justify-center gap-2 py-1 px-5 rounded-lg bg-blue-600 active:bg-blue-800 cursor-pointer"
                  onClick={openTransaction}
                >
                  <IoIosAddCircle /> Add
                </button>
                <button
                  className="flex items-center gap-2 py-1 px-5 rounded-lg bg-red-600 active:bg-red-800 cursor-pointer"
                  onClick={delTransactionButton}
                >
                  <MdDelete /> Delete
                </button>
              </div>
            </div>
            <CheckBox
              tranData={tranData}
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* create transaction */}

      {isToggleTransactionBox && (
        <>
          <div
            className="absolute top-0 min-w-full min-h-full"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          ></div>
          <div className="absolute top-0 mt-9 w-full min-h-screen py-[10px]">
            <CreateTransaction
              setToggleTransactionBox={setToggleTransactionBox}
            />
          </div>
        </>
      )}
      {/* deleting the transaction */}
      {toggleDeleteBox && (
        <>
          <div
            className="absolute top-0 min-w-full min-h-full"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          ></div>
          <div className="absolute sm:top-10 top-[-100px] md:top-[-50px] w-full h-full">
            <DeleteTransaction
              setToggleDeleteBox={setToggleDeleteBox}
              selectedIds={selectedIds}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Transaction;
