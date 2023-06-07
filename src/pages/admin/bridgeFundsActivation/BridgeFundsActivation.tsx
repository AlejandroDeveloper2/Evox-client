import {
  faCircleUser,
  faHashtag,
  faCheck,
  faCircleXmark,
  faMarker,
  faDollar,
  faCoins,
  faUser,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSWR from "swr";

import { useScreen, useEvoxServices, usePagination } from "../../../hooks";
import { getUsersBridgeFundsAccounts } from "../../../services/bridgeFunds";
import { accountActivationsTableHeaders } from "./constans";

import { CustomButton, EmptyTablet, Table, Spinner } from "../../../components";

const BridgeFundsActivation = (): JSX.Element => {
  const screenSize = useScreen();
  const token = localStorage.getItem("token") ?? "";
  const { activeBridgeAccount, invalidBridgeAccount } = useEvoxServices();
  const { data: accounts, isLoading } = useSWR("/bridgeFunds/list/users", () =>
    getUsersBridgeFundsAccounts(token)
  );

  const { Pagination, records } = usePagination(accounts ? accounts : []);
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
        <span className="align-middle"> Activación de cuentas de fondeo </span>
      </h1>
      <div className="w-full flex justify-center items-start flex-col overflow-x-scroll">
        <Table headers={accountActivationsTableHeaders}>
          {isLoading ? (
            <Spinner message="Cargando cuentas de fondeo..." />
          ) : accounts && accounts.length > 0 ? (
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
                      {<FontAwesomeIcon icon={faHashtag} className="mr-2" />}
                      Transacción:
                    </span>
                    {account.transaction}
                  </div>
                  <div className="text-darkGray font-poppins font-medium">
                    <span className="text-darkGray font-poppins font-semibold  mr-2">
                      {<FontAwesomeIcon icon={faMarker} className="mr-2" />}
                      Titulo:
                    </span>
                    {account.title}
                  </div>
                  <div className="text-darkGray font-poppins font-medium truncate w-full">
                    <span className="text-darkGray font-poppins font-semibold  mr-2">
                      {<FontAwesomeIcon icon={faDollar} className="mr-2" />}
                      Precio:
                    </span>
                    {account.price}
                  </div>
                  <div className="text-darkGray font-poppins font-medium truncate w-full">
                    <span className="text-darkGray font-poppins font-semibold  mr-2">
                      {<FontAwesomeIcon icon={faHashtag} className="mr-2" />}
                      Cantidad:
                    </span>
                    {account.quantity}
                  </div>
                  <div className="text-darkGray font-poppins font-medium truncate w-full">
                    <span className="text-darkGray font-poppins font-semibold  mr-2">
                      {<FontAwesomeIcon icon={faHashtag} className="mr-2" />}
                      Total:
                    </span>
                    {account.total}
                  </div>
                  <div className="text-darkGray font-poppins font-medium truncate w-full">
                    <span className="text-darkGray font-poppins font-semibold  mr-2">
                      {<FontAwesomeIcon icon={faCoins} className="mr-2" />}
                      Moneda:
                    </span>
                    {account.currency}
                  </div>

                  <div className="text-darkGray font-poppins font-medium truncate w-full">
                    <span className="text-darkGray font-poppins font-semibold  mr-2">
                      {<FontAwesomeIcon icon={faUser} className="mr-2" />}
                      Nombre de usuario:
                    </span>
                    {account.username}
                  </div>
                  <div className="text-darkGray font-poppins font-medium truncate w-full">
                    <span className="text-darkGray font-poppins font-semibold  mr-2">
                      {<FontAwesomeIcon icon={faAt} className="mr-2" />}
                      Correo:
                    </span>
                    {account.email}
                  </div>
                  <div className="text-darkGray font-poppins font-medium truncate w-full">
                    <span className="text-darkGray font-poppins font-semibold  mr-2">
                      {<FontAwesomeIcon icon={faCheck} className="mr-2" />}
                      Estado:
                    </span>
                    {account.state ? "Activa" : "Inactiva"}
                  </div>
                  <div className="flex gap-3 items-center justify-center">
                    <CustomButton
                      type="button"
                      label={""}
                      title="Activar cuenta"
                      icon={faCheck}
                      theme={{
                        bg: "bg-blue",
                        color: "text-white",
                        aditionalStyles: "h-[3rem] w-[3rem]",
                      }}
                      onClick={() => activeBridgeAccount(account.transaction)}
                      disabled={account.state}
                    />
                    <CustomButton
                      type="button"
                      label={""}
                      title="Invalidar transacción"
                      icon={faCircleXmark}
                      theme={{
                        bg: "bg-error",
                        color: "text-white",
                        aditionalStyles: "h-[3rem] w-[3rem]",
                      }}
                      onClick={() => invalidBridgeAccount(account.transaction)}
                      disabled={account.state}
                    />
                  </div>
                </div>
              ) : (
                <tr
                  key={index}
                  className="bg-lightGray border-b-[2px] border-gray dark:bg-darkGray dark:border-mediumGray"
                >
                  <td className="px-6 py-4 font-medium text-darkGray whitespace-nowrap dark:text-white">
                    {account.transaction}
                  </td>
                  <td className="px-6 py-4">{account.title}</td>
                  <td className="px-6 py-4">{account.price}</td>
                  <td className="px-6 py-4">{account.quantity}</td>
                  <td className="px-6 py-4">{account.total}</td>
                  <td className="px-6 py-4">{account.currency}</td>
                  <td className="px-6 py-4">{account.username}</td>
                  <td className="px-6 py-4">{account.email}</td>
                  <td className="px-6 py-4">
                    {account.state ? "Activa" : "Inactiva"}
                  </td>
                  <td className="px-6 py-4 flex gap-2 items-center">
                    <CustomButton
                      type="button"
                      label={""}
                      title="Activar cuenta"
                      icon={faCheck}
                      theme={{
                        bg: "bg-blue",
                        color: "text-white",
                        aditionalStyles: "h-[3rem] w-[3rem]",
                      }}
                      onClick={() => activeBridgeAccount(account.transaction)}
                      disabled={account.state}
                    />
                    <CustomButton
                      type="button"
                      label={""}
                      title="Invalidar transacción"
                      icon={faCircleXmark}
                      theme={{
                        bg: "bg-error",
                        color: "text-white",
                        aditionalStyles: "h-[3rem] w-[3rem]",
                      }}
                      onClick={() => invalidBridgeAccount(account.transaction)}
                      disabled={account.state}
                    />
                  </td>
                </tr>
              )
            )
          ) : (
            <EmptyTablet message="No hay cuentas aún" colspan={10} />
          )}
        </Table>
      </div>
      <Pagination />
    </div>
  );
};

export default BridgeFundsActivation;
