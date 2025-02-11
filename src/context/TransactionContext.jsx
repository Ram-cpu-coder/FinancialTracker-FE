import React, { useContext, useState } from "react";
import { getTransaction } from "../../helper/axiosHelper";

const TransactionContext = React.createContext();

export const TransactionProvider = ({ children }) => {
  const [tranData, setTranData] = useState([]);

  const transactionData = async () => {
    const data = await getTransaction();
    if (data.status == "success") {
      setTranData(data.transactionData);
      return true;
    } else {
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
