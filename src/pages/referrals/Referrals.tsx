import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

import { useEvoxServices, useFetchData } from "../../hooks";
import { formatDate } from "../../utils";

import { InvitationLink } from "../../components";

const Referrals = (): JSX.Element => {
  const { userReferrals, getAllUserReferrals } = useEvoxServices();
  useFetchData([{ function: getAllUserReferrals }]);

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
        <span className="align-middle"> Mis referidos </span>
      </h1>
      <div className="w-full overflow-x-scroll px-20">
        <table className="w-full text-sm text-left text-darkGray dark:text-white font-poppins ">
          <thead
            className="text-[16px] text-blue capitalize dark:bg-mediumGray 
          dark:text-white font-poppins font-semibold border-b-[2px] border-gray"
          >
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Celular
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Register date
              </th>
            </tr>
          </thead>
          <tbody>
            {userReferrals.length > 0 ? (
              userReferrals.map((referral, index) => (
                <tr
                  className="bg-lightGray border-b-[2px] border-gray dark:bg-darkGray dark:border-mediumGray"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-darkGray whitespace-nowrap dark:text-white"
                  >
                    {referral?.refLink}
                  </th>
                  <td className="px-6 py-4">{referral?.userName}</td>
                  <td className="px-6 py-4">
                    {referral?.status ? "Active" : "Inactive"}
                  </td>
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
                No tienes referidos aún
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Referrals;
