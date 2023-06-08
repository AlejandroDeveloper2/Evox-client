import {
  faCircleUser,
  faHashtag,
  faCalendar,
  faCheck,
  faUser,
  faMessage,
  faLock,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSWR from "swr";

import { useScreen, usePagination, useEvoxServices } from "../../../hooks";
import { syntheticCredentialsTableHeaders } from "./constans";
import { getSyntheticsAccountCredentials } from "../../../services/synthetics";

import { CustomButton, EmptyTablet, Table, Spinner } from "../../../components";

const SyntheticsCredentials = (): JSX.Element => {
  const screenSize = useScreen();
  const token = localStorage.getItem("token") ?? "";
  const { data: credentialList, isLoading } = useSWR("/synthetic/access", () =>
    getSyntheticsAccountCredentials(token)
  );
  const { isChecking, checkSyntheticCredentials } = useEvoxServices();

  const { Pagination, records } = usePagination(
    credentialList ? credentialList : []
  );

  return (
    <div className="relative flex flex-col pt-20 pb-10 items-center gap-10 px-5  md:px-20">
      <h1
        className="lg:text-[24px] text-[20px] text-center lg:text-left 
        font-poppins text-darkBlue dark:text-white font-extrabold flex flex-col gap-2 md:flex-row"
      >
        <FontAwesomeIcon
          icon={faCircleUser}
          className="text-[40px] text-blue align-middle"
        />{" "}
        <span className="align-middle">
          {" "}
          Listado de credenciales de cuentas de sintéticos{" "}
        </span>
      </h1>
      <div className="w-full flex justify-center items-start flex-col overflow-x-scroll">
        <Table headers={syntheticCredentialsTableHeaders}>
          {isLoading ? (
            <Spinner message="Cargando credenciales de cuentas sintéticos..." />
          ) : credentialList && credentialList.length > 0 ? (
            records.map((account, index) =>
              screenSize < 768 ? (
                <div
                  key={index}
                  className="w-full bg-white p-4 flex flex-col gap-2 shadow-md rounded-md items-start 
                    after:absolute after:w-[5px] after:h-full after:right-0 after:top-0 
                    relative overflow-hidden  after:bg-gradient-to-b after:from-purple after:via-mediumBlue after:to-lightBlue"
                >
                  <div className="text-darkGray font-poppins font-medium">
                    <span className="text-darkGray font-poppins font-semibold  mr-2">
                      {<FontAwesomeIcon icon={faUser} className="mr-2" />}
                      Nombre de usuario
                    </span>
                    {account.username}
                  </div>
                  <div className="text-darkGray font-poppins font-medium">
                    <span className="text-darkGray font-poppins font-semibold  mr-2">
                      {<FontAwesomeIcon icon={faMessage} className="mr-2" />}
                      Correo:
                    </span>
                    {account.email}
                  </div>
                  <div className="text-darkGray font-poppins font-medium truncate w-full">
                    <span className="text-darkGray font-poppins font-semibold  mr-2">
                      {<FontAwesomeIcon icon={faHashtag} className="mr-2" />}
                      Id de inicio de sesión:
                    </span>
                    {account.login}
                  </div>
                  <div className="text-darkGray font-poppins font-medium truncate w-full">
                    <span className="text-darkGray font-poppins font-semibold  mr-2">
                      {<FontAwesomeIcon icon={faLock} className="mr-2" />}
                      Contraseña:
                    </span>
                    {account.password}
                  </div>
                  <div className="text-darkGray font-poppins font-medium truncate w-full">
                    <span className="text-darkGray font-poppins font-semibold  mr-2">
                      {<FontAwesomeIcon icon={faCalendar} className="mr-2" />}
                      Registro de cuenta:
                    </span>
                    {account.createdAt}
                  </div>
                  <div className="text-darkGray font-poppins font-medium truncate w-full">
                    <span className="text-darkGray font-poppins font-semibold  mr-2">
                      {<FontAwesomeIcon icon={faCheck} className="mr-2" />}
                      Estado:
                    </span>
                    {account.state ? "Activo" : "Inactivo"}
                  </div>
                  <div className="flex gap-3 items-center justify-center">
                    <CustomButton
                      type="button"
                      label={""}
                      title=""
                      icon={isChecking ? faCheck : faXmark}
                      theme={{
                        bg: isChecking ? "bg-success" : "bg-error",
                        color: "text-white",
                        aditionalStyles: "h-[3rem]",
                      }}
                      onClick={() => checkSyntheticCredentials(account.id)}
                    />
                  </div>
                </div>
              ) : (
                <tr
                  key={index}
                  className="bg-lightGray border-b-[2px] border-gray dark:bg-darkGray dark:border-mediumGray"
                >
                  <td className="px-6 py-4 font-medium text-darkGray whitespace-nowrap dark:text-white">
                    {account.username}
                  </td>
                  <td className="px-6 py-4">{account.email}</td>
                  <td className="px-6 py-4">{account.login}</td>
                  <td className="px-6 py-4">{account.password}</td>
                  <td className="px-6 py-4">{account.createdAt}</td>
                  <td className="px-6 py-4">
                    {" "}
                    {account.state ? "Activo" : "Inactivo"}
                  </td>
                  <td className="px-6 py-4 flex gap-2 items-center">
                    <CustomButton
                      type="button"
                      label={""}
                      title=""
                      icon={isChecking ? faCheck : faXmark}
                      theme={{
                        bg: isChecking ? "bg-success" : "bg-error",
                        color: "text-white",
                        aditionalStyles: "h-[3rem]",
                      }}
                      onClick={() => checkSyntheticCredentials(account.id)}
                    />
                  </td>
                </tr>
              )
            )
          ) : (
            <EmptyTablet message="No hay cuentas aún" colspan={7} />
          )}
        </Table>
      </div>
      <Pagination />
    </div>
  );
};

export default SyntheticsCredentials;
