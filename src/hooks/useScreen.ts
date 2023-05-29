import React from "react";

const useScreen = (): number => {
  const [screenSize, setScreenSize] = React.useState<number>(
    window.screen.width
  );
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.screen.width);
    });
  }, []);

  return screenSize;
};

export default useScreen;
