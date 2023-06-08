import useSWR from "swr";

import { getAccountStatus } from "../../services/synthetics";

const VerifyAccountSynthetic = (): JSX.Element => {
  const token = localStorage.getItem("token") ?? "";
  const { data: status } = useSWR("/synthetic/accountStatus", () =>
    getAccountStatus(token)
  );

  return <div>VerifyAccountSynthetic</div>;
};

export default VerifyAccountSynthetic;
