import React from "react";

import { useAuth } from "../../hooks";

import { Loader } from "../../components";

const ActiveAccount = (): JSX.Element => {
  const { validateAccount } = useAuth();

  React.useEffect(() => {
    validateAccount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="w-full bg-lightGray flex lg:justify-center items-center flex-col gap-3
      relative dark:bg-darkGray md:w-3/5 xl:w-1/3 md:rounded-[10px] overflow-hidden py-10 
      md:h-auto h-[calc(100vh-150px)] justify-start px-10 md:px-0"
    >
      <Loader />
    </div>
  );
};

export default ActiveAccount;
