import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Account } from "..";

import { UserBridgeFundsAccounts } from "../../types";

const AccountList = (props: UserBridgeFundsAccounts): JSX.Element => {
  const { title, bridgeFundsAccounts, state } = props;
  return (
    <>
      <div className="w-full border-b-[1px] border-gray flex justify-between items-center py-2">
        <label className="md:text-[18px] text-[16px] text-blue font-extrabold text-left font-poppins w-[70%]">
          {title}
        </label>
        <label className="md:text-[18px] text-[16px] text-blue font-extrabold text-left font-poppins w-[30%]">
          Estado
        </label>
      </div>
      <div className="w-full grid grid-cols-2 py-3 place-items-start justify-items-center">
        {bridgeFundsAccounts.map((account, index) => (
          <Account key={index} {...account} />
        ))}
        <label
          className="md:text-[18px] text-[16px] text-darkGray font-extrabold text-left 
            font-poppins flex gap-3 items-center justify-start"
        >
          <FontAwesomeIcon
            icon={state ? faCheck : faXmark}
            className="text-blue md:text-[40px] text-[30px]"
          />
          {state ? "Activa" : "Inactiva"}
        </label>
      </div>
    </>
  );
};

export default AccountList;
