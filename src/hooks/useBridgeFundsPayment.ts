/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { useEvoxServices } from ".";
import { getBridgeFundsTransactionStatus } from "../services/bridgeFunds";
import { BridgeFundsTransaction } from "../types";
import { getToken } from "../utils";

const useBridgeFundsPayments = (error: boolean) => {
  const token = getToken();
  const { sendBridgeTransaction, bridgeFundsAccountInfo } = useEvoxServices();
  const { id, quantity } = bridgeFundsAccountInfo;
  const [transactionHash, setTransactionHash] =
    React.useState<BridgeFundsTransaction>({
      transaction: "",
      bridgeAccountId: id,
      quantity,
    });
  const [isButtonDisable, setIsButtonDisable] = React.useState<boolean>(false);

  useEffect(() => {
    if (validateField()) {
      setIsButtonDisable(true);
      return;
    }
    setIsButtonDisable(false);
  }, [transactionHash]);
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
      transactionHash?.transaction?.length < 10
    )
      return true;
    return false;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    sendBridgeTransaction(transactionHash);
  };

  return {
    transactionHash,
    isButtonDisable,
    onChange,
    handleSubmit,
  };
};

export default useBridgeFundsPayments;
