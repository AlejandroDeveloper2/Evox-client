import React from "react";

import { calculateTotalToPay } from "../utils";

const useBridgeAccount = (accountPrice: number) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  const [accountQuantity, setAccountQuantity] = React.useState<string>("1");
  const [singlePrice] = React.useState<string>(accountPrice.toString());
  const [price, setPrice] = React.useState<string>(singlePrice);

  React.useEffect(() => {
    const total = calculateTotalToPay(singlePrice, accountQuantity);
    setPrice(total.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountQuantity]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (window.parseInt(e.target.value) > 0) setAccountQuantity(e.target.value);
  };

  const increseQuantity = (): void => {
    setAccountQuantity((prevState) => {
      const newState = parseInt(prevState) + 1;
      return newState.toString();
    });
  };

  const decreaseQuantity = (): void => {
    if (parseInt(accountQuantity) > 1) {
      setAccountQuantity((prevState) => {
        const newState = parseInt(prevState) - 1;
        return newState.toString();
      });
    }
  };

  const handleClick = (): void => {
    setIsChecked(!isChecked);
  };

  return {
    isChecked,
    accountQuantity,
    price,
    increseQuantity,
    decreaseQuantity,
    handleChange,
    handleClick,
  };
};

export default useBridgeAccount;
