import React from "react";
import { useApp } from ".";

const useLoader = (message: string): boolean => {
  const { setLoading, loading } = useApp();

  React.useEffect(() => {
    setLoading({
      visible: true,
      message: message,
    });
    setTimeout(() => {
      setLoading({
        visible: false,
        message: message,
      });
    }, 2000);

    return () => {
      setLoading({
        visible: false,
        message: "",
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading.visible;
};

export default useLoader;
