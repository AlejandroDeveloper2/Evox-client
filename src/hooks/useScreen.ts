import React from "react";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

const useScreen = (): number => {
  const [screenSize, setScreenSize] = React.useState<number>(
    getWindowDimensions()
  );
  React.useEffect(() => {
    const handleResize = () => {
      setScreenSize(getWindowDimensions());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return screenSize;
};

export default useScreen;
