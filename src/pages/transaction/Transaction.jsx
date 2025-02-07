import React, { useEffect, useState } from "react";
import CheckBox from "../../components/CheckBox";
import CreateTransaction from "./CreateTransaction";
import axios from "axios";

import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const Transaction = () => {
  const [isToggleTransactionBox, setToggleTransactionBox] = useState(false);
  const [tranData, setTranData] = useState([]);

  const openTransaction = () => {
    return setToggleTransactionBox(true);
  };

  const transactionData = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const response = await axios.get(
      "http://localhost:9000/api/v1/transactions",
      {
        headers: {
          Authorization: accessToken,
        },
      }
    );
    setTranData(response.data.transactionData);
  };
  useEffect(() => {
    transactionData();
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-center relative w-full bg-white min-h-full">
          <div className="px-5 py-10 my-5 bg-gray-800 text-white min-h-[60vh] w-[80%] rounded-lg transactionMediaQuery">
            <hr className="my-5" />
            <div className="flex justify-between py-2 barForTransaction w-full">
              <div className="flex justify-between w-[40%]">
                <p>{tranData.length} transaction(s) found!</p>
                <input
                  type="text"
                  placeholder="Search transactions..."
                  className="outline bg-white text-black px-3 rounded-lg"
                />
              </div>
              <div className="flex justify-between w-[40%]">
                <button
                  className="flex items-center gap-2 py-2 px-5 rounded-lg bg-blue-600 active:bg-blue-800 cursor-pointer"
                  onClick={openTransaction}
                >
                  <IoIosAddCircle /> Add
                </button>
                <button
                  className="flex items-center gap-2 py-2 px-5 rounded-lg bg-red-600 active:bg-red-800 cursor-pointer"
                  onClick={openTransaction}
                >
                  <MdDelete /> Delete
                </button>
              </div>
            </div>
            <CheckBox tranData={tranData} />
          </div>

          {/* create transaction */}

          {isToggleTransactionBox == true ? (
            <>
              <div
                className="absolute top-0 min-w-full min-h-full"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
              ></div>
              <div className="absolute sm:top-0 top-[-250px] md:top-[-150px] w-full h-full">
                <CreateTransaction
                  setToggleTransactionBox={setToggleTransactionBox}
                />
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Transaction;
