import React, { useContext, useState } from "react";
import axios from "axios";

const TransactionContext = React.createContext();

export const TransactionProvider = ({ children }) => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [tranData, setTranData] = useState([]);
  const transactionData = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.get(`${API_BASE_URL}/transactions`, {
        headers: {
          Authorization: accessToken,
        },
      });
      setTranData(response.data.transactionData);

      return true;
    } catch (error) {
      return false;
    }
  };

  const transactionObject = {
    tranData,
    setTranData,
    transactionData,
  };
  return (
    <TransactionContext.Provider value={transactionObject}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => useContext(TransactionContext);
