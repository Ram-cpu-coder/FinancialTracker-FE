import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CheckBox from "../../components/CheckBox";

import { IoIosAddCircle } from "react-icons/io";

const Transaction = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full px-5 py-3 bg-gray-800 text-white">
        <hr className="my-5" />
        <div className="flex justify-between py-2">
          <p> 1 transaction(s) found!</p>
          <input
            type="text"
            placeholder="Search transactions..."
            className="outline bg-white text-black px-3 rounded-lg"
          />
          <button className="flex items-center gap-2 p-2 rounded-lg bg-blue-600">
            <IoIosAddCircle /> Add New Transaction
          </button>
        </div>
        <CheckBox />
      </div>
      <Footer />
    </div>
  );
};

export default Transaction;
