import React from "react";

import EvoxServicesContext from "../context/EvoxServicesProvider";

const useEvoxServices = () => {
  return React.useContext(EvoxServicesContext);
};

export default useEvoxServices;
