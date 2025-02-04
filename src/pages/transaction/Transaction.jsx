import React, { useEffect, useState } from "react";
import CheckBox from "../../components/CheckBox";
import CreateTransaction from "./CreateTransaction";
import axios from "axios";

import { IoIosAddCircle } from "react-icons/io";

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
  console.log(tranData);
  useEffect(() => {
    transactionData();
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-center relative w-full bg-white min-h-full">
          <div className="px-5 py-10 my-5 bg-gray-800 text-white min-h-[60vh] w-[70%] rounded-lg transactionMediaQuery">
            <hr className="my-5" />
            <div className="flex justify-between py-2 barForTransaction">
              <div className="flex justify-between w-[60%]">
                <p> 1 transaction(s) found!</p>
                <input
                  type="text"
                  placeholder="Search transactions..."
                  className="outline bg-white text-black px-3 rounded-lg"
                />
              </div>
              <button
                className="flex items-center gap-2 p-2 rounded-lg bg-blue-600 active:bg-blue-800 cursor-pointer"
                onClick={openTransaction}
              >
                <IoIosAddCircle /> Add New Transaction
              </button>
            </div>
            <CheckBox tranData={tranData} />
          </div>

          {/* create transaction */}

          {isToggleTransactionBox == true ? (
            <>
              <div
                className="absolute top-0 w-screen h-screen"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
              ></div>
              <div className="absolute top-10 w-full h-full">
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
