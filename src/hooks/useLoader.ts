import React from "react";
import { useApp } from ".";

const useLoader = (message: string): boolean => {
  const { setLoader, setIsValidating, isValidating } = useApp();

  React.useEffect(() => {
    setIsValidating(true);
    setLoader({ loading: true, message });
    setTimeout(() => {
      setIsValidating(false);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isValidating;
};

export default useLoader;
