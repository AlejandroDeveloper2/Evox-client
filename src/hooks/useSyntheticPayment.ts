import React from "react";

import { useEvoxServices } from ".";
import { getTransactionStatus } from "../services/synthetics";
import { Transaction } from "../types";

const useSyntheticPayment = (error: boolean) => {
  const token = localStorage.getItem("token") ?? "";
  React.useEffect(() => {
    const getTransaction = async () => {
      if (error) {
        const data = await getTransactionStatus(token);
        setTransaction(data);
      }
    };
    getTransaction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [transaction, setTransaction] = React.useState<Transaction>({
    transaction: "",
  });
  const { sendTransaction } = useEvoxServices();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const validateField = (): boolean => {
    if (transaction.transaction === "" || transaction.transaction.length < 10)
      return true;
    return false;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    sendTransaction(transaction);
    setTransaction({
      transaction: "",
    });
  };

  return {
    transaction,
    onChange,
    validateField,
    handleSubmit,
  };
};
export default useSyntheticPayment;
