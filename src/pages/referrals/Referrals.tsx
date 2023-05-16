import { UserProfile } from "../../components";
import { useEvoxServices } from "../../hooks";

const Referrals = (): JSX.Element => {
  const { userReferrals } = useEvoxServices();
  return (
    <div className="relative overflow-x-auto p-10 flex flex-col items-start gap-5">
      <UserProfile />
      <h1
        className="lg:text-[24px] text-[20px] text-center lg:text-left 
        font-montserrat text-darkBlue dark:text-white font-extrabold"
      >
        Referral List
      </h1>
      <table className="w-full text-sm text-left text-darkGray dark:text-white font-montserrat">
        <thead className="text-xs text-white uppercase bg-blue dark:bg-mediumGray dark:text-white font-montserrat">
          <tr>
            <th scope="col" className="px-6 py-3">
              Parent
            </th>
            <th scope="col" className="px-6 py-3">
              RefLink
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Fullname
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-darkGray dark:border-mediumGray">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-darkGray whitespace-nowrap dark:text-white"
            >
              No Parent
            </th>
            <td className="px-6 py-4">https://evox/ref/Diego98</td>
            <td className="px-6 py-4">Diego98</td>
            <td className="px-6 py-4">Diego Alejandro Diaz</td>
            <td className="px-6 py-4">Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Referrals;
