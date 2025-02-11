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

  const [displayTransaction, setDisplayTransaction] = useState([]);

  const [isToggleTransactionBox, setToggleTransactionBox] = useState(false);
  const [toggleDeleteBox, setToggleDeleteBox] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchedData, setSearchedData] = useState([]);

  const openTransaction = () => {
    return setToggleTransactionBox(true);
  };
  const delTransactionButton = () => {
    return setToggleDeleteBox(true);
  };

  const handleOnSearch = (event) => {
    const filteredData = tranData.filter((item) => {
      return item.description.includes(event.target.value.toLowerCase());
    });
    setSearchedData(event.target.value);
    setDisplayTransaction(filteredData);
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

  useEffect(() => {
    setDisplayTransaction(tranData);
  }, [tranData]);

  return isLoading ? (
    <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-50 z-10">
      <GridLoader color="#0d6bc9" speedMultiplier={1} />
    </div>
  ) : (
    <div className="relative">
      <div className="flex justify-center w-full h-full">
        <div className="flex justify-center w-full bg-white min-h-full mb-10">
          <div className="px-5 py-10 my-5 bg-gray-800 text-white min-h-full w-[80%] rounded-lg transactionMediaQuery">
            <hr className="my-5" />
            <div className="flex justify-between py-2 barForTransaction w-full">
              <div className="flex justify-between items-center w-[50%]">
                <p>{displayTransaction.length} transaction(s) found!</p>
                <input
                  type="text"
                  placeholder="Search transactions..."
                  value={searchedData}
                  className="outline bg-white text-black px-3 py-1 rounded-lg"
                  onChange={handleOnSearch}
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
              searchedData={searchedData}
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
              tranData={displayTransaction}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* create transaction */}

      {isToggleTransactionBox && (
        <>
          <div
            className="absolute top-0 left-0 w-full min-h-full"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          ></div>
          <div className="absolute top-0 w-full min-h-full pb-[10px] flex items-center justify-center">
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
            className="absolute top-0 left-0 w-full min-h-full"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          ></div>
          <div className="absolute top-0 w-full min-h-full pb-[10px] flex items-center justify-center">
            <DeleteTransaction
              setToggleDeleteBox={setToggleDeleteBox}
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Transaction;
