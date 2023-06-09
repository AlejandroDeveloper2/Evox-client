import React from "react";

import { UserAccountBridgeFunds } from "../types";
import { useEvoxServices } from ".";

const useBridgeFundsForm = (bridgeFundsId: number, quantity: number) => {
  const [data, setData] = React.useState<UserAccountBridgeFunds[]>(
    Array(quantity).fill({
      login: "",
      password: "",
      bridgeFundsId,
    })
  );
  const { registerUserBridgeAccounts } = useEvoxServices();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    inputName: string
  ) => {
    const inputValue = e.target.value;
    setData((prevData) => {
      const updatedData: UserAccountBridgeFunds[] = prevData.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            [inputName]: inputValue,
          };
        }
        return item;
      });
      return updatedData;
    });
  };

  const validateFields = (): string | null => {
    let message = null;
    data.forEach((item) => {
      if (item.login === "" || item.password === "") {
        message = "Campos obligatorios!";
      } else if (item.login.length < 10) {
        message = "El login tiene que ser minimo de 10 caracteres!";
      } else if (item.password.length < 8) {
        message = "La contraseña tiene que ser minimo de 8 caracteres!";
      }
    });
    return message;
  };

  const sendAccounts = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    registerUserBridgeAccounts(bridgeFundsId, data);
  };

  return {
    data,
    handleChange,
    sendAccounts,
    validateFields,
  };
};

export default useBridgeFundsForm;
