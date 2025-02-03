import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CheckBox from "../../components/CheckBox";
import CreateTransaction from "./CreateTransaction";

import { IoIosAddCircle } from "react-icons/io";

const Transaction = () => {
  const [isToggleTransactionBox, setToggleTransactionBox] = useState(false);

  const openTransaction = () => {
    return setToggleTransactionBox(true);
  };
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="flex justify-center relative w-full bg-white min-h-screen">
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
            <CheckBox />
          </div>

          {/* create transaction */}

          {isToggleTransactionBox == true ? (
            <>
              <div
                className="absolute top-0 w-screen h-full z-40"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
              ></div>
              <div className="absolute top-0 w-full z-50">
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
      <Footer />
    </div>
  );
};

export default Transaction;
