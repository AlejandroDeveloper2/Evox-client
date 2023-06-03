import {
  faCalendar,
  faCircleUser,
  faHashtag,
  faPhone,
  faUser,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useScreen } from "../../hooks";
import { accountActivationsTableHeaders } from "./constans";
// import { formatDate } from "../../utils";

import { Table } from "../../components";

const AccountsActivation = (): JSX.Element => {
  const screenSize = useScreen();
  return (
    <div className="relative flex flex-col pt-20 pb-10 items-center gap-10 px-5  md:px-20">
      <h1
        className="lg:text-[24px] text-[20px] text-center lg:text-left 
        font-poppins text-darkBlue dark:text-white font-extrabold"
      >
        <FontAwesomeIcon
          icon={faCircleUser}
          className="text-[40px] text-blue align-middle"
        />{" "}
        <span className="align-middle"> Activación de cuentas sintéticos </span>
      </h1>
      <div className="w-full md:px-20 flex justify-center flex-col">
        <Table headers={accountActivationsTableHeaders}>
          {screenSize < 768 ? (
            <div
              className="w-full bg-white p-4 flex flex-col gap-2 shadow-md rounded-md items-start 
                    after:absolute after:w-[5px] after:h-full after:right-0 after:top-0 
                    relative overflow-hidden  after:bg-gradient-to-b after:from-purple after:via-mediumBlue after:to-lightBlue"
            >
              <div className="text-darkGray font-poppins font-medium">
                <span className="text-darkGray font-poppins font-semibold  mr-2">
                  {<FontAwesomeIcon icon={faHashtag} className="mr-2" />}
                  Transacción
                </span>
                {10000}
              </div>
              <div className="text-darkGray font-poppins font-medium truncate w-full">
                <span className="text-darkGray font-poppins font-semibold  mr-2">
                  {<FontAwesomeIcon icon={faUserAlt} className="mr-2" />}
                  Moneda:
                </span>
                {"USDs"}
              </div>
              <div className="text-darkGray font-poppins font-medium truncate w-full">
                <span className="text-darkGray font-poppins font-semibold  mr-2">
                  {<FontAwesomeIcon icon={faPhone} className="mr-2" />}
                  Price:
                </span>
                {"$5000"}
              </div>
              <div className="text-darkGray font-poppins font-medium truncate w-full">
                <span className="text-darkGray font-poppins font-semibold  mr-2">
                  {<FontAwesomeIcon icon={faUser} className="mr-2" />}
                  Fecha de registro:
                </span>
                {"23/02/2025"}
              </div>
              <div className="text-darkGray font-poppins font-medium truncate w-full">
                <span className="text-darkGray font-poppins font-semibold  mr-2">
                  {<FontAwesomeIcon icon={faCalendar} className="mr-2" />}
                  Fecha de caducidad:
                </span>
                {"26/02/2025"}
              </div>
              <div className="text-darkGray font-poppins font-medium truncate w-full">
                <span className="text-darkGray font-poppins font-semibold  mr-2">
                  {<FontAwesomeIcon icon={faCalendar} className="mr-2" />}
                  Estado:
                </span>
                {"Activa"}
              </div>
              <div className="text-darkGray font-poppins font-medium truncate w-full">
                <span className="text-darkGray font-poppins font-semibold  mr-2">
                  {<FontAwesomeIcon icon={faCalendar} className="mr-2" />}
                  Nombre de usuario:
                </span>
                {"Diego Diaz"}
              </div>
              <div className="text-darkGray font-poppins font-medium truncate w-full">
                <span className="text-darkGray font-poppins font-semibold  mr-2">
                  {<FontAwesomeIcon icon={faCalendar} className="mr-2" />}
                  Email:
                </span>
                {"alejo12@gmail.com"}
              </div>
            </div>
          ) : (
            <tr className="bg-lightGray border-b-[2px] border-gray dark:bg-darkGray dark:border-mediumGray">
              <td className="px-6 py-4 font-medium text-darkGray whitespace-nowrap dark:text-white">
                {""}
              </td>
              <td className="px-6 py-4">{""}</td>
              <td className="px-6 py-4">{""}</td>
              <td className="px-6 py-4">{""}</td>
              <td className="px-6 py-4">{""}</td>
              <td className="px-6 py-4">{""}</td>
              <td className="px-6 py-4">{""}</td>
              <td className="px-6 py-4">{""}</td>
            </tr>
          )}
        </Table>
      </div>
    </div>
  );
};

export default AccountsActivation;
