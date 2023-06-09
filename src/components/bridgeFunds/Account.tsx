import { CopyLink } from "..";

import { UserAccountBridgeFunds } from "../../types";

const Account = (props: UserAccountBridgeFunds): JSX.Element => {
  const { login, password } = props;
  return (
    <div className="w-full flex  flex-col gap-4 justify-center items-start ">
      <div className="grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-2 place-items-center justify-items-start">
        <label className="md:text-[18px] text-[16px] text-darkBlue font-extrabold text-left font-poppins">
          Login:
        </label>
        <CopyLink link={login} />
      </div>
      <div className="grid  grid-cols-1 gap-3 md:gap-0 md:grid-cols-2 place-items-center justify-items-start">
        <label className="md:text-[18px] text-[16px] text-darkBlue font-extrabold text-left font-poppins">
          Contraseña:
        </label>
        <CopyLink link={password} />
      </div>
    </div>
  );
};

export default Account;
