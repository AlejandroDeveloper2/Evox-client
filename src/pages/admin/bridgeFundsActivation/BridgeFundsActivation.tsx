import {
  faCircleUser,
  faCheck,
  faCircleXmark,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";

import { useScreen, useEvoxServices, usePagination } from "../../../hooks";
import { getUsersBridgeFundsAccounts } from "../../../services/bridgeFunds";
import {
  accountActivationsTableHeaders,
  getBridgeFundsAccountsCardValues,
} from "./constans";

import {
  CustomButton,
  EmptyTablet,
  Table,
  Spinner,
  MobileTableRecord,
} from "../../../components";

const BridgeFundsActivation = (): JSX.Element => {
  const screenSize = useScreen();
  const token = localStorage.getItem("token") ?? "";
  const { activeBridgeAccount, invalidBridgeAccount } = useEvoxServices();
  const { data: accounts, isLoading } = useSWR("/bridgeFunds/list/users", () =>
    getUsersBridgeFundsAccounts(token)
  );
  const { Pagination, records } = usePagination(accounts ? accounts : []);
  const navigate = useNavigate();

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
        <span className="align-middle"> Activación de cuentas de fondeo </span>
      </h1>
      <div className="w-full flex justify-center items-start flex-col overflow-x-scroll">
        {isLoading ? (
          <Spinner
            message="Cargando cuentas de fondeo..."
            color="text-darkBlue"
          />
        ) : (
          <Table headers={accountActivationsTableHeaders}>
            {accounts && accounts.length > 0 ? (
              records.map((account, index) =>
                screenSize < 1024 ? (
                  <div key={index} className="flex flex-col gap-4">
                    <MobileTableRecord
                      values={getBridgeFundsAccountsCardValues()}
                      records={[
                        index + 1,
                        account.transaction,
                        account.title,
                        account.price,
                        account.quantity,
                        account.total,
                        account.currency,
                        account.username,
                        account.email,
                        account.state ? "Activa" : "Inactiva",
                      ]}
                    />
                    <div className="flex gap-3 items-center justify-center">
                      {account.state ? (
                        <CustomButton
                          type="button"
                          label={""}
                          title="Agregar usuarios"
                          icon={faPlus}
                          theme={{
                            bg: "bg-blue",
                            color: "text-white",
                            aditionalStyles: "h-[3rem] w-[3rem]",
                          }}
                          onClick={() =>
                            navigate(
                              `/admin/registerBridgeFundsAccounts/${account.quantity}-${account.id}`
                            )
                          }
                        />
                      ) : (
                        <>
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
                            onClick={() =>
                              activeBridgeAccount(account.transaction)
                            }
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
                            onClick={() =>
                              invalidBridgeAccount(account.transaction)
                            }
                          />
                        </>
                      )}
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
                      {account.state ? (
                        <CustomButton
                          type="button"
                          label={""}
                          title="Agregar usuarios"
                          icon={faPlus}
                          theme={{
                            bg: "bg-blue",
                            color: "text-white",
                            aditionalStyles: "h-[3rem] w-[3rem]",
                          }}
                          onClick={() =>
                            navigate(
                              `/admin/registerBridgeFundsAccounts/${account.quantity}-${account.id}`
                            )
                          }
                          disabled={account.state}
                        />
                      ) : (
                        <>
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
                            onClick={() =>
                              activeBridgeAccount(account.transaction)
                            }
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
                            onClick={() =>
                              invalidBridgeAccount(account.transaction)
                            }
                            disabled={account.state}
                          />
                        </>
                      )}
                    </td>
                  </tr>
                )
              )
            ) : (
              <EmptyTablet message="No hay cuentas aún" colspan={10} />
            )}
          </Table>
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default BridgeFundsActivation;
