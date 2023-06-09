import {
  faCircleUser,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSWR from "swr";

import { useScreen, usePagination, useEvoxServices } from "../../../hooks";
import {
  syntheticCredentialsTableHeaders,
  syntheticCredentialsCardValues,
} from "./constans";
import { getSyntheticsAccountCredentials } from "../../../services/synthetics";
import { formatDate } from "../../../utils";

import {
  CustomButton,
  EmptyTablet,
  Table,
  Spinner,
  MobileTableRecord,
} from "../../../components";

const SyntheticsCredentials = (): JSX.Element => {
  const screenSize = useScreen();
  const token = localStorage.getItem("token") ?? "";
  const { data: credentialList, isLoading } = useSWR(
    "/synthetic/access",
    () => getSyntheticsAccountCredentials(token),
    {
      refreshInterval: 100,
    }
  );
  const { checkSyntheticCredentials } = useEvoxServices();

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
        {isLoading ? (
          <Spinner
            message="Cargando credenciales de cuentas sintéticos..."
            color="text-darkBlue"
          />
        ) : (
          <Table headers={syntheticCredentialsTableHeaders}>
            {credentialList && credentialList.length > 0 ? (
              records.map((account, index) =>
                screenSize < 1024 ? (
                  <>
                    <MobileTableRecord
                      key={index}
                      values={syntheticCredentialsCardValues()}
                      records={[
                        index + 1,
                        account.username,
                        account.email,
                        account.login,
                        account.password,
                        formatDate(account.createdAt),
                        account.state ? "Activa" : "Inactiva",
                      ]}
                    />
                    <div className="flex gap-3 items-center justify-center">
                      <CustomButton
                        type="button"
                        label={""}
                        title=""
                        icon={account.state ? faCheck : faXmark}
                        theme={{
                          bg: account.state ? "bg-success" : "bg-error",
                          color: "text-white",
                          aditionalStyles: "h-[3rem]",
                        }}
                        onClick={() => checkSyntheticCredentials(account.id)}
                      />
                    </div>
                  </>
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
                    <td className="px-6 py-4">
                      {formatDate(account.createdAt)}
                    </td>
                    <td className="px-6 py-4">
                      {" "}
                      {account.state ? "Activa" : "Inactiva"}
                    </td>
                    <td className="px-6 py-4 flex gap-2 items-center">
                      <CustomButton
                        type="button"
                        label={""}
                        title=""
                        icon={account.state ? faCheck : faXmark}
                        theme={{
                          bg: account.state ? "bg-success" : "bg-error",
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
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default SyntheticsCredentials;
