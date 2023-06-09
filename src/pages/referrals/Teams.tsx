import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  InvitationLink,
  Table,
  EmptyTablet,
  MobileTableRecord,
} from "../../components";

import { useScreen, usePagination, useEvoxServices } from "../../hooks";
import { formatDate } from "../../utils";
import { getTeamCardValues, teamTableHeaders } from "./constans";

const Teams = (): JSX.Element => {
  const screenSize = useScreen();
  const { team } = useEvoxServices();
  const { Pagination, records } = usePagination(team);

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
        <Table headers={teamTableHeaders}>
          {team && team.length > 0 ? (
            records.map((referral, index) =>
              screenSize < 1024 ? (
                <MobileTableRecord
                  key={index}
                  values={getTeamCardValues()}
                  records={[
                    index + 1,
                    referral.fullName,
                    referral.level,
                    referral.userName,
                    formatDate(referral.dateRegistered),
                  ]}
                />
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
            <EmptyTablet message="No tienes a nadie en tu equipo" colspan={5} />
          )}
        </Table>
        <Pagination />
      </div>
    </div>
  );
};

export default Teams;
