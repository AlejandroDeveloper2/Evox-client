import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { InvitationLink, Table } from "../../components";
import { useEvoxServices, useFetchData } from "../../hooks";

import { formatDate } from "../../utils";

const Teams = (): JSX.Element => {
  const { userTeam, getUserTeamRed } = useEvoxServices();
  useFetchData([{ function: getUserTeamRed }]);

  return (
    <div className="relative flex flex-col py-10 items-center gap-10">
      <InvitationLink />
      <h1
        className="lg:text-[24px] text-[20px] text-center lg:text-left 
          font-poppins text-darkBlue dark:text-white font-extrabold"
      >
        <FontAwesomeIcon
          icon={faCircleUser}
          className="text-[40px] text-darkBlue align-middle"
        />{" "}
        <span className="align-middle"> Mi Equipo </span>
      </h1>
      <div className="w-full overflow-x-scroll px-20">
        <Table type="team">
          {userTeam.length > 0 ? (
            userTeam.map((referral, index) => (
              <tr
                className="bg-lightGray border-b-[2px] border-gray dark:bg-darkGray dark:border-mediumGray"
                key={index}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-darkGray whitespace-nowrap dark:text-white"
                >
                  {referral?.fullName}
                </th>
                <td className="px-6 py-4">{referral?.level}</td>
                <td className="px-6 py-4">{referral?.userName}</td>
                <td className="px-6 py-4">
                  {referral && formatDate(referral?.dateRegistered)}
                </td>
              </tr>
            ))
          ) : (
            <div
              className="bg-lightGray  dark:bg-darkGray dark:border-mediumGray text-darkBlue 
                  text-[16px] font-poppins font-semibold py-5"
            >
              No tienes usuarios en tu equipo aún
            </div>
          )}
        </Table>
      </div>
    </div>
  );
};

export default Teams;
