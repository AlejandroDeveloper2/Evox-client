/* eslint-disable @typescript-eslint/no-explicit-any */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MobileTableRecordProps } from "../../types";

const MobileTableRecord = (props: MobileTableRecordProps): JSX.Element => {
  const { values, records } = props;
  return (
    <div
      className="w-full bg-white p-4 flex flex-col gap-2 shadow-md rounded-md items-start 
        after:absolute after:w-[5px] after:h-full after:right-0 after:top-0 relative overflow-hidden  
        after:bg-gradient-to-b after:from-purple after:via-mediumBlue after:to-lightBlue"
    >
      {values.map((value, index) => (
        <div
          key={index}
          className="text-darkGray font-poppins font-medium truncate w-full"
        >
          <span className="text-darkGray font-poppins font-semibold  mr-2">
            {<FontAwesomeIcon icon={value.icon} className="mr-2" />}
            {value.label} :
          </span>
          {records[index]}
        </div>
      ))}
    </div>
  );
};

export default MobileTableRecord;
