import {
  faCalendar,
  faHashtag,
  faUserAlt,
  faUser,
  faToggleOn,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { usersTableHeaders } from "./constans";
import { useScreen } from "../../../hooks";

import { CustomButton, Table } from "../../../components";

const Users = (): JSX.Element => {
  const screenSize = useScreen();
  return (
    <div className="relative flex flex-col py-10 items-center gap-10">
      <h1
        className="lg:text-[24px] text-[20px] text-center lg:text-left 
    font-poppins text-darkBlue dark:text-white font-extrabold"
      >
        <FontAwesomeIcon
          icon={faUsers}
          className="text-[40px] text-violet align-middle"
        />{" "}
        <span className="align-middle ml-5"> Usuarios </span>
      </h1>
      <div className="w-full md:px-20 flex justify-center">
        <Table headers={usersTableHeaders}>
          {screenSize < 768 ? (
            <div
              className="w-full bg-white p-4 flex flex-col gap-2 shadow-md rounded-md items-start 
            after:absolute after:w-[5px] after:h-full after:right-0 after:top-0 
            relative overflow-hidden  after:bg-gradient-to-b after:from-purple after:via-mediumBlue after:to-lightBlue"
            >
              <strong className="text-darkGray font-poppins font-medium">
                <span className="text-darkGray font-poppins font-semibold  mr-2">
                  {<FontAwesomeIcon icon={faHashtag} className="mr-2" />}
                  ID:
                </span>
                {1}
              </strong>
              <div className="text-darkGray font-poppins font-medium truncate w-full">
                <span className="text-darkGray font-poppins font-semibold  mr-2">
                  {<FontAwesomeIcon icon={faUserAlt} className="mr-2" />}
                  Nombre:
                </span>
                {12345}
              </div>
              <div className="text-darkGray font-poppins font-medium truncate w-full">
                <span className="text-darkGray font-poppins font-semibold  mr-2">
                  {<FontAwesomeIcon icon={faUser} className="mr-2" />}
                  Nombre de usuario:
                </span>
                {"Alejo98"}
              </div>
              <div className="text-darkGray font-poppins font-medium truncate w-full">
                <span className="text-darkGray font-poppins font-semibold  mr-2">
                  {<FontAwesomeIcon icon={faToggleOn} className="mr-2" />}
                  Estado:
                </span>
                {"Activo"}
              </div>
              <strong className="text-darkGray font-poppins font-medium">
                <span className="text-darkGray font-poppins font-semibold  mr-2">
                  {<FontAwesomeIcon icon={faCalendar} className="mr-2" />}
                  Fecha de registro:
                </span>
                {"31/05/2023"}
              </strong>
              <CustomButton
                onClick={() => console.log("OK")}
                type="button"
                label="Inactivar"
                theme={{
                  bg: "bg-blue",
                  color: "text-white",
                  aditionalStyles: "w-[6rem] h-[3rem] m-auto",
                }}
              />
            </div>
          ) : (
            <tr className="bg-lightGray border-b-[2px] border-gray dark:bg-darkGray dark:border-mediumGray">
              <td className="px-6 py-4 font-medium text-darkGray whitespace-nowrap dark:text-white">
                {1}
              </td>
              <td className="px-6 py-4 font-medium text-darkGray whitespace-nowrap dark:text-white">
                {"Diego Alejandro Diaz"}
              </td>
              <td className="px-6 py-4 font-medium text-darkGray whitespace-nowrap dark:text-white">
                {"Alejo98"}
              </td>
              <td className="px-6 py-4">{"Activo"}</td>
              <td className="px-6 py-4">{"31/05/2023"}</td>
              <td className="px-6 py-4">
                <CustomButton
                  onClick={() => console.log("OK")}
                  type="button"
                  label="Inactivar"
                  theme={{
                    bg: "bg-blue",
                    color: "text-white",
                    aditionalStyles: "w-[6rem] h-[3rem]",
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

export default Users;
