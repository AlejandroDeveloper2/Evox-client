import React, { useEffect } from "react";

import { useEvoxServices } from ".";
import { getBridgeFundsTransactionStatus } from "../services/bridgeFunds";
import { Transaction } from "../types";

const useBridgeFundsPayments = (error: boolean) => {
  const token = localStorage.getItem("token") ?? "";
  const { sendBridgeTransaction, bridgeFundsAccountInfo } = useEvoxServices();
  const { id, quantity } = bridgeFundsAccountInfo;
  const [transactionHash, setTransactionHash] = React.useState<Transaction>({
    transaction: "",
    bridgeAccountId: id,
    quantity,
  });

  useEffect(() => {
    const getTransaction = async () => {
      if (error) {
        const data = await getBridgeFundsTransactionStatus(token);
        setTransactionHash(data);
      }
    };
    getTransaction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransactionHash({
      ...transactionHash,
      [e.target.name]: e.target.value,
    });
  };

  const validateField = (): boolean => {
    if (
      Object.values(transactionHash).includes("") ||
      transactionHash.transaction.length < 10
    )
      return true;
    return false;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    sendBridgeTransaction(transactionHash);
    setTransactionHash({ transaction: "" });
  };

  return {
    transactionHash,
    onChange,
    validateField,
    handleSubmit,
  };
};

export default useBridgeFundsPayments;
