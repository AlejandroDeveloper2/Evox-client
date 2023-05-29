import {
  faCalendar,
  faHashtag,
  faPeopleGroup,
  faTurnDown,
  faUser,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { InvitationLink, Loader, Table } from "../../components";
import { useApp, useEvoxServices, useFetchData, useScreen } from "../../hooks";

import { formatDate } from "../../utils";
import { teamTableHeaders } from "./constans";

const Teams = (): JSX.Element => {
  const { userTeam, getUserTeamRed } = useEvoxServices();
  useFetchData([{ function: getUserTeamRed }]);
  const { isValidating } = useApp();
  const screenSize = useScreen();

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
      <div className="w-full  md:px-20">
        {isValidating ? (
          <Loader />
        ) : (
          <Table headers={teamTableHeaders}>
            {userTeam.length > 0 ? (
              userTeam.map((referral, index) =>
                screenSize < 768 ? (
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
                      {index + 1}
                    </strong>
                    <div className="text-darkGray font-poppins font-medium truncate w-full">
                      <span className="text-darkGray font-poppins font-semibold  mr-2">
                        {<FontAwesomeIcon icon={faUserAlt} className="mr-2" />}
                        Nombre:
                      </span>
                      {referral.fullName}
                    </div>
                    <div className="text-darkGray font-poppins font-medium truncate w-full">
                      <span className="text-darkGray font-poppins font-semibold  mr-2">
                        {<FontAwesomeIcon icon={faTurnDown} className="mr-2" />}
                        Nivel:
                      </span>
                      {referral.level}
                    </div>
                    <div className="text-darkGray font-poppins font-medium truncate w-full">
                      <span className="text-darkGray font-poppins font-semibold  mr-2">
                        {<FontAwesomeIcon icon={faUser} className="mr-2" />}
                        Nombre de usuario:
                      </span>
                      {referral.userName}
                    </div>
                    <div>
                      <span className="text-darkGray font-poppins font-semibold  mr-2">
                        {<FontAwesomeIcon icon={faCalendar} className="mr-2" />}
                        Registro:
                      </span>
                      {formatDate(referral.dateRegistered)}
                    </div>
                  </div>
                ) : (
                  <tr
                    className="bg-lightGray border-b-[2px] border-gray dark:bg-darkGray dark:border-mediumGray"
                    key={index}
                  >
                    <td>{index + 1}</td>
                    <td className="px-6 py-4 font-medium text-darkGray whitespace-nowrap dark:text-white">
                      {referral.fullName}
                    </td>
                    <td className="px-6 py-4">{referral.level}</td>
                    <td className="px-6 py-4">{referral.userName}</td>
                    <td className="px-6 py-4">
                      {formatDate(referral.dateRegistered)}
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr
                className="bg-white md:bg-lightGray dark:bg-darkGray dark:border-mediumGray text-darkBlue 
              md:text-[16px] text-[14px] font-poppins font-normal py-5 whitespace-nowrap"
              >
                <td className="py-4 px-6" colSpan={5}>
                  {" "}
                  No tienes a nadie en tu equipo
                </td>
              </tr>
            )}
          </Table>
        )}
      </div>
    </div>
  );
};

export default Teams;
