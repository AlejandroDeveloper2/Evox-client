import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSWR from "swr";

import { getUsersCardValues, usersTableHeaders } from "./constans";
import { usePagination, useScreen } from "../../../hooks";
import { getEvoxUsers } from "../../../services/usersList";

import {
  CustomButton,
  EmptyTablet,
  Spinner,
  Table,
  MobileTableRecord,
  Header,
} from "../../../components";
import { formatDate } from "../../../utils";

const Users = (): JSX.Element => {
  const screenSize = useScreen();
  const token = localStorage.getItem("token") ?? "";
  const { data: users, isLoading } = useSWR("/users/list", () =>
    getEvoxUsers(token)
  );

  const { Pagination, records } = usePagination(users ? users : []);

  return (
    <div className="relative flex flex-col py-10 items-center gap-10">
      <Header pageName="Listado de usuarios" />
      <h1
        className="lg:text-[24px] text-[20px] text-center lg:text-left 
        font-poppins text-darkBlue dark:text-white font-extrabold flex flex-col gap-2 md:flex-row"
      >
        <FontAwesomeIcon
          icon={faUsers}
          className="text-[40px] text-violet align-middle"
        />{" "}
        <span className="align-middle ml-5"> Usuarios </span>
      </h1>
      <div className="w-full md:px-20 flex justify-start overflow-x-scroll">
        {isLoading ? (
          <Spinner message="Cargando usuarios..." color="text-darkBlue" />
        ) : (
          <Table headers={usersTableHeaders}>
            {users && users.length > 0 ? (
              records.map((user, index) =>
                screenSize < 768 ? (
                  <div key={index}>
                    <MobileTableRecord
                      values={getUsersCardValues()}
                      records={[
                        user.fullName,
                        user.username,
                        user.email,
                        user.phone,
                        user.country,
                        user.city,
                        formatDate(user.emailVerified),
                        user.roles,
                        user.status ? "Activo" : "Inactivo",
                      ]}
                    />
                    <CustomButton
                      onClick={() => console.log("OK")}
                      type="button"
                      label="Inactivar"
                      theme={{
                        bg: "bg-blue",
                        color: "text-white",
                        aditionalStyles: "w-full h-[3rem] m-auto",
                      }}
                    />
                  </div>
                ) : (
                  <tr
                    key={index}
                    className="bg-lightGray border-b-[2px] border-gray dark:bg-darkGray dark:border-mediumGray"
                  >
                    <td className="px-6 py-4 font-medium text-darkGray whitespace-nowrap dark:text-white">
                      {user.fullName}
                    </td>
                    <td className="px-6 py-4 font-medium text-darkGray whitespace-nowrap dark:text-white">
                      {user.username}
                    </td>
                    <td className="px-6 py-4 font-medium text-darkGray whitespace-nowrap dark:text-white">
                      {user.email}
                    </td>
                    <td className="px-6 py-4">{user.phone}</td>
                    <td className="px-6 py-4">{user.country}</td>
                    <td className="px-6 py-4">{user.city}</td>
                    <td className="px-6 py-4">
                      {formatDate(user.emailVerified)}
                    </td>
                    <td className="px-6 py-4">{user.roles}</td>
                    <td className="px-6 py-4">
                      {user.status ? "Activo" : "Inactivo"}
                    </td>
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
                )
              )
            ) : (
              <EmptyTablet message="No hay usuarios aún" colspan={10} />
            )}
          </Table>
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default Users;
