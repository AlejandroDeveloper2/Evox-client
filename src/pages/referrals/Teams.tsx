import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { InvitationLink, Loader, Table } from "../../components";
import { useApp, useEvoxServices, useFetchData } from "../../hooks";

import { formatDate } from "../../utils";

const Teams = (): JSX.Element => {
  const { userTeam, getUserTeamRed } = useEvoxServices();
  useFetchData([{ function: getUserTeamRed }]);
  const { isValidating } = useApp();

  return (
    <div className="relative flex flex-col py-10 items-center gap-10">
      <InvitationLink />
      <h1
        className="lg:text-[24px] text-[20px] text-center lg:text-left 
          font-poppins text-darkBlue dark:text-white font-extrabold"
      >
        <FontAwesomeIcon
          icon={faPeopleGroup}
          className="text-[40px] text-blue align-middle"
        />{" "}
        <span className="align-middle"> Mi Equipo </span>
      </h1>
      <div className="w-full overflow-x-scroll md:px-20 px-5">
        <Table type="team">
          {isValidating ? (
            <Loader />
          ) : userTeam.length > 0 ? (
            userTeam.map((referral, index) => (
              <tr
                className="bg-lightGray border-b-[2px] border-gray dark:bg-darkGray dark:border-mediumGray"
                key={index}
              >
                <td className="px-6 py-4 font-medium text-darkGray whitespace-nowrap dark:text-white">
                  {referral?.fullName}
                </td>
                <td className="px-6 py-4">{referral?.level}</td>
                <td className="px-6 py-4">{referral?.userName}</td>
                <td className="px-6 py-4">
                  {referral && formatDate(referral?.dateRegistered)}
                </td>
              </tr>
            ))
          ) : (
            <tr
              className="bg-lightGray  dark:bg-darkGray dark:border-mediumGray text-darkBlue 
              md:text-[16px] text-[12px] font-poppins font-semibold py-5 "
            >
              <td className="py-4"> No tienes a nadie en tu equipo</td>
            </tr>
          )}
        </Table>
      </div>
    </div>
  );
};

export default Teams;
