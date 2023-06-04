import {
  faCalendar,
  faCircleUser,
  faHashtag,
  faPhone,
  faUser,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEvoxServices, useScreen } from "../../hooks";
import { accountActivationsTableHeaders } from "./constans";
// import { formatDate } from "../../utils";

import { CustomButton, EmptyTablet, Table } from "../../components";
import useSWR from "swr";
import { getUserSyntecticsAccounts } from "../../services/synthetics";

const AccountsActivation = (): JSX.Element => {
  const screenSize = useScreen();
  const token = localStorage.getItem("token") ?? "";
  const { activeSyntheticAccount } = useEvoxServices();
  const { data: accounts } = useSWR("/synthetic/list", () =>
    getUserSyntecticsAccounts(token)
  );
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
      <div className="w-full flex justify-center items-start flex-col overflow-x-auto">
        <Table headers={accountActivationsTableHeaders}>
          {accounts && accounts.length > 0 ? (
            accounts.map((account, index) =>
              screenSize < 768 ? (
                <div
                  key={index}
                  className="w-full bg-white p-4 flex flex-col gap-2 shadow-md rounded-md items-start 
                    after:absolute after:w-[5px] after:h-full after:right-0 after:top-0 
                    relative overflow-hidden  after:bg-gradient-to-b after:from-purple after:via-mediumBlue after:to-lightBlue"
                >
                  <div className="text-darkGray font-poppins font-medium">
                    <span className="text-darkGray font-poppins font-semibold  mr-2">
                      {<FontAwesomeIcon icon={faHashtag} className="mr-2" />}
                      Transacción
                    </span>
                    {account.transaction}
                  </div>
                  <div className="text-darkGray font-poppins font-medium truncate w-full">
                    <span className="text-darkGray font-poppins font-semibold  mr-2">
                      {<FontAwesomeIcon icon={faUserAlt} className="mr-2" />}
                      Moneda:
                    </span>
                    {account.currency}
                  </div>
                  <div className="text-darkGray font-poppins font-medium truncate w-full">
                    <span className="text-darkGray font-poppins font-semibold  mr-2">
                      {<FontAwesomeIcon icon={faPhone} className="mr-2" />}
                      Price:
                    </span>
                    {account.price}
                  </div>
                  <div className="text-darkGray font-poppins font-medium truncate w-full">
                    <span className="text-darkGray font-poppins font-semibold  mr-2">
                      {<FontAwesomeIcon icon={faUser} className="mr-2" />}
                      Fecha de registro:
                    </span>
                    {account.createdAt}
                  </div>
                  <div className="text-darkGray font-poppins font-medium truncate w-full">
                    <span className="text-darkGray font-poppins font-semibold  mr-2">
                      {<FontAwesomeIcon icon={faCalendar} className="mr-2" />}
                      Fecha de caducidad:
                    </span>
                    {account.expirationDate}
                  </div>
                  <div className="text-darkGray font-poppins font-medium truncate w-full">
                    <span className="text-darkGray font-poppins font-semibold  mr-2">
                      {<FontAwesomeIcon icon={faCalendar} className="mr-2" />}
                      Estado:
                    </span>
                    {account.state ? "Activa" : "Inactiva"}
                  </div>
                  <div className="text-darkGray font-poppins font-medium truncate w-full">
                    <span className="text-darkGray font-poppins font-semibold  mr-2">
                      {<FontAwesomeIcon icon={faCalendar} className="mr-2" />}
                      Nombre de usuario:
                    </span>
                    {account.username}
                  </div>
                  <div className="text-darkGray font-poppins font-medium truncate w-full">
                    <span className="text-darkGray font-poppins font-semibold  mr-2">
                      {<FontAwesomeIcon icon={faCalendar} className="mr-2" />}
                      Email:
                    </span>
                    {account.email}
                  </div>
                </div>
              ) : (
                <tr className="bg-lightGray border-b-[2px] border-gray dark:bg-darkGray dark:border-mediumGray">
                  <td className="px-6 py-4 font-medium text-darkGray whitespace-nowrap dark:text-white">
                    {account.transaction}
                  </td>
                  <td className="px-6 py-4">{account.currency}</td>
                  <td className="px-6 py-4">{account.price}</td>
                  <td className="px-6 py-4">{account.createdAt}</td>
                  <td className="px-6 py-4">{account.expirationDate}</td>
                  <td className="px-6 py-4">
                    {account.state ? "Activa" : "Inactiva"}
                  </td>
                  <td className="px-6 py-4">{account.username}</td>
                  <td className="px-6 py-4">{account.email}</td>
                  <td className="px-6 py-4">
                    <CustomButton
                      type="button"
                      label={"Activar"}
                      theme={{
                        bg: "bg-blue",
                        color: "text-white",
                        aditionalStyles: "h-[3rem]",
                      }}
                      onClick={() =>
                        activeSyntheticAccount(account.transaction)
                      }
                    />
                  </td>
                </tr>
              )
            )
          ) : (
            <EmptyTablet message="No hay cuentas aún" colspan={9} />
          )}
        </Table>
      </div>
    </div>
  );
};

export default AccountsActivation;
