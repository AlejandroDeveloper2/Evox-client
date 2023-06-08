import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

import { useEvoxServices, usePagination, useScreen } from "../../hooks";
import { formatDate } from "../../utils";
import { referralsTableHeaders, getReferralsCardValues } from "./constans";

import {
  InvitationLink,
  Table,
  EmptyTablet,
  MobileTableRecord,
} from "../../components";

const Referrals = (): JSX.Element => {
  const screenSize = useScreen();
  const { referrals } = useEvoxServices();
  const { Pagination, records } = usePagination(referrals);

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
                <MobileTableRecord
                  key={index}
                  values={getReferralsCardValues()}
                  record={{ index: index + 1, ...referral }}
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
