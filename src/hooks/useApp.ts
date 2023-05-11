import React from "react";

import AppContext from "../context/AppProvider";

const useApp = () => {
  return React.useContext(AppContext);
};

export default useApp;
