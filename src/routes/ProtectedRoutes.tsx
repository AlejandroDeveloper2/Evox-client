import { Route, Routes } from "react-router-dom";

import { ProtectedLayout } from "../layout";
import {
  UserDashboard,
  Referrals,
  Teams,
  UserProfile,
  EvoxAcademy,
  MAMAccounts,
  Commissions,
  KindOfAccounts,
  SyntheticsPayment,
  MyAccounts,
  BridgeMarkets,
  Users,
  Academy,
  CopySynthetics,
  AccountsActvation,
} from "../pages";

const ProtectedRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route index element={<UserDashboard />} />
        <Route path="/dashboard/referrals" element={<Referrals />} />
        <Route path="/dashboard/teams" element={<Teams />} />
        <Route path="/dashboard/profile" element={<UserProfile />} />
        <Route path="/dashboard/evoxAcademy" element={<EvoxAcademy />} />
        <Route
          path="/dashboard/automaticTrading/mamAccounts"
          element={<MAMAccounts />}
        />
        <Route
          path="/dashboard/automaticTrading/commissions"
          element={<Commissions />}
        />
        <Route
          path="/dashboard/bridgeFunds/kindOfAccounts"
          element={<KindOfAccounts />}
        />
        <Route
          path="/dashboard/bridgeFunds/myAccounts"
          element={<MyAccounts />}
        />
        <Route
          path="/dashboard/bridgeFunds/syntheticsPayment"
          element={<SyntheticsPayment />}
        />
        <Route
          path="/dashboard/evoxSynthetics/syntheticsPayment"
          element={<SyntheticsPayment />}
        />
        <Route path="/dashboard/bridgeMarkets" element={<BridgeMarkets />} />
        <Route path="/dashboard/evoxSynthetics/academy" element={<Academy />} />
        <Route
          path="/dashboard/evoxSynthetics/copySynthetics"
          element={<CopySynthetics />}
        />

        {/*Admin routes */}
        <Route path="/dashboard/admin/users" element={<Users />} />
        <Route
          path="/dashboard/admin/accountsActivation"
          element={<AccountsActvation />}
        />
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;
