import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCircleUser,
  faHashtag,
  faPhone,
  faUser,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

import { useEvoxServices, usePagination, useScreen } from "../../hooks";
import { formatDate } from "../../utils";
import { referralsTableHeaders } from "./constans";

import { InvitationLink, Table, EmptyTablet } from "../../components";

const Referrals = (): JSX.Element => {
  const screenSize = useScreen();
  const { referrals } = useEvoxServices();
  const { Pagination, records } = usePagination(referrals ? referrals : []);

  return (
    <div className="relative flex flex-col py-10 items-center gap-10">
      <InvitationLink />
      <h1
        className="lg:text-[24px] text-[20px] text-center lg:text-left 
        font-poppins text-darkBlue dark:text-white font-extrabold"
      >
        <FontAwesomeIcon
          icon={faCircleUser}
          className="text-[40px] text-blue align-middle"
        />{" "}
        <span className="align-middle"> Mis referidos </span>
      </h1>
      <div className="w-full md:px-20 flex justify-center flex-col">
        <Table headers={referralsTableHeaders}>
          {referrals && referrals.length > 0 ? (
            records.map((referral, index) =>
              screenSize < 768 ? (
                <div
                  key={index}
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
                      {<FontAwesomeIcon icon={faPhone} className="mr-2" />}
                      Celular:
                    </span>
                    {referral.phone}
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
                  <td className="px-6 py-4">{referral.phone}</td>
                  <td className="px-6 py-4">{referral.userName}</td>
                  <td className="px-6 py-4">
                    {formatDate(referral.dateRegistered)}
                  </td>
                </tr>
              )
            )
          ) : (
            <EmptyTablet message="No tienes referidos aún" colspan={5} />
          )}
        </Table>
        <Pagination />
      </div>
    </div>
  );
};

export default Referrals;
