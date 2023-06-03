import {
  faCalendar,
  faDollar,
  faHashtag,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { commissionsTableHeaders } from "./constans";
import { useScreen } from "../../hooks";

import { CustomButton, Table } from "../../components";

const Commissions = (): JSX.Element => {
  const screenSize = useScreen();
  return (
    <div className="relative flex flex-col py-10 items-center gap-10">
      <h1
        className="lg:text-[24px] text-[20px] text-center lg:text-left 
        font-poppins text-darkBlue dark:text-white font-extrabold"
      >
        <FontAwesomeIcon
          icon={faDollar}
          className="text-[40px] text-violet align-middle"
        />{" "}
        <span className="align-middle ml-5"> Comisiones </span>
      </h1>
      <div className="w-full md:px-20 flex justify-center">
        <Table headers={commissionsTableHeaders}>
          {screenSize < 768 ? (
            <div
              className="w-full bg-white p-4 flex flex-col gap-2 shadow-md rounded-md items-start 
                after:absolute after:w-[5px] after:h-full after:right-0 after:top-0 
                relative overflow-hidden  after:bg-gradient-to-b after:from-purple after:via-mediumBlue after:to-lightBlue"
            >
              <strong className="text-darkGray font-poppins font-medium">
                <span className="text-darkGray font-poppins font-semibold  mr-2">
                  {<FontAwesomeIcon icon={faCalendar} className="mr-2" />}
                  Fecha:
                </span>
                {"2023-04-01"}
              </strong>
              <div className="text-darkGray font-poppins font-medium truncate w-full">
                <span className="text-darkGray font-poppins font-semibold  mr-2">
                  {<FontAwesomeIcon icon={faHashtag} className="mr-2" />}
                  ID de comisión:
                </span>
                {12345}
              </div>
              <div className="text-darkGray font-poppins font-medium truncate w-full">
                <span className="text-darkGray font-poppins font-semibold  mr-2">
                  {<FontAwesomeIcon icon={faDollar} className="mr-2" />}
                  Monto:
                </span>
                {"50 USDT"}
              </div>
              <CustomButton
                onClick={() => console.log("OK")}
                type="button"
                label=""
                icon={faPlus}
                theme={{
                  bg: "bg-blue",
                  color: "text-white",
                  aditionalStyles:
                    "w-[2rem] h-[2rem] absolute top-0 right-4 bottom-0 m-auto",
                }}
              />
            </div>
          ) : (
            <tr className="bg-lightGray border-b-[2px] border-gray dark:bg-darkGray dark:border-mediumGray">
              <td className="px-6 py-4 font-medium text-darkGray whitespace-nowrap dark:text-white">
                {"2023-04-01"}
              </td>
              <td className="px-6 py-4 font-medium text-darkGray whitespace-nowrap dark:text-white">
                {"4565"}
              </td>
              <td className="px-6 py-4">{"50 USDT"}</td>
              <td className="px-6 py-4">
                <CustomButton
                  onClick={() => console.log("OK")}
                  type="button"
                  label=""
                  icon={faPlus}
                  theme={{
                    bg: "bg-blue",
                    color: "text-white",
                    aditionalStyles: "w-[2rem] h-[2rem]",
                  }}
                />
              </td>
            </tr>
          )}
        </Table>
      </div>
    </div>
  );
};

export default Commissions;
