import { UserProfile } from "../../components";

import { useEvoxServices } from "../../hooks";
import { formatDate } from "../../utils";

const Referrals = (): JSX.Element => {
  const { userReferrals } = useEvoxServices();

  return (
    <div className="relative p-10 flex flex-col items-start gap-5">
      <UserProfile />
      <h1
        className="lg:text-[24px] text-[20px] text-center lg:text-left 
        font-montserrat text-darkBlue dark:text-white font-extrabold"
      >
        Referral List
      </h1>
      <div className="w-full overflow-x-scroll">
        <table className="w-full text-sm text-left text-darkGray dark:text-white font-montserrat ">
          <thead className="text-xs text-white uppercase bg-blue dark:bg-mediumGray dark:text-white font-montserrat">
            <tr>
              <th scope="col" className="px-6 py-3">
                RefLink
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Register date
              </th>
            </tr>
          </thead>
          <tbody>
            {userReferrals.map((referral, index) => (
              <tr
                className="bg-white border-b dark:bg-darkGray dark:border-mediumGray"
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Referrals;
