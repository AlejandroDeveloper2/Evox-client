import React from "react";

import { Functions } from "../types";

const useFetchData = (functions: Functions[]): void => {
  const executeFunctions = () => {
    functions.forEach((f) => {
      f.function();
    });
  };

  React.useEffect(() => {
    executeFunctions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
export default useFetchData;
