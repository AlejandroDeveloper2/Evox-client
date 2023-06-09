import {
  faCheck,
  faCircleUser,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSWR from "swr";

import { getUserSyntecticsAccounts } from "../../services/synthetics";
import { useEvoxServices, useScreen, usePagination } from "../../hooks";
import {
  accountActivationsTableHeaders,
  getAccountsActivationsCardValues,
} from "./constans";

import {
  CustomButton,
  EmptyTablet,
  Table,
  Spinner,
  MobileTableRecord,
} from "../../components";

const AccountsActivation = (): JSX.Element => {
  const screenSize = useScreen();
  const token = localStorage.getItem("token") ?? "";
  const { data: accounts, isLoading } = useSWR(
    "/synthetic/list",
    () => getUserSyntecticsAccounts(token),
    {
      refreshInterval: 100,
    }
  );
  const { activeSyntheticAccount, invalidSyntheticAccount } = useEvoxServices();
  const { Pagination, records } = usePagination(accounts ? accounts : []);

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
        <span className="align-middle"> Activación de cuentas sintéticos </span>
      </h1>
      <div className="w-full flex justify-center items-start flex-col overflow-x-scroll">
        {isLoading ? (
          <Spinner
            message="Cargando cuentas de sintéticos..."
            color="text-darkBlue"
          />
        ) : (
          <Table headers={accountActivationsTableHeaders}>
            {accounts && accounts.length > 0 ? (
              records.map((account, index) =>
                screenSize < 1024 ? (
                  <div key={index}>
                    <MobileTableRecord
                      values={getAccountsActivationsCardValues()}
                      records={[
                        account.transaction,
                        account.currency,
                        account.price,
                        account.state ? "Activa" : "Inactiva",
                        account.username,
                        account.email,
                      ]}
                    />
                    <div className="flex gap-3 items-center justify-center mt-3">
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
                        onClick={() => {
                          activeSyntheticAccount(account.transaction);
                        }}
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
                        onClick={() => {
                          invalidSyntheticAccount(account.transaction);
                        }}
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
                    <td className="px-6 py-4">{account.currency}</td>
                    <td className="px-6 py-4">{account.price}</td>
                    <td className="px-6 py-4">
                      {account.state ? "Activa" : "Inactiva"}
                    </td>
                    <td className="px-6 py-4">{account.username}</td>
                    <td className="px-6 py-4">{account.email}</td>
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
                        onClick={() => {
                          activeSyntheticAccount(account.transaction);
                        }}
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
                        onClick={() => {
                          invalidSyntheticAccount(account.transaction);
                        }}
                        disabled={account.state}
                      />
                    </td>
                  </tr>
                )
              )
            ) : (
              <EmptyTablet message="No hay cuentas aún" colspan={9} />
            )}
          </Table>
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default AccountsActivation;
