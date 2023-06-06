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
  MyAccounts,
  BridgeFundsPayment,
  SyntheticsPayment,
  BridgeMarkets,
  Academy,
  CopySynthetics,
} from "../pages";

const UserRoutes = (): JSX.Element => {
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
          path="/dashboard/bridgeFunds/bridgeFundsPayment"
          element={<BridgeFundsPayment />}
        />
        <Route
          path="/dashboard/evoxSynthetics/syntheticsPayment"
          element={<SyntheticsPayment type={false} />}
        />
        <Route
          path="/dashboard/evoxSynthetics/syntheticsPayment/error"
          element={<SyntheticsPayment type={true} />}
        />
        <Route path="/dashboard/bridgeMarkets" element={<BridgeMarkets />} />
        <Route path="/dashboard/evoxSynthetics/academy" element={<Academy />} />
        <Route
          path="/dashboard/evoxSynthetics/copySynthetics"
          element={<CopySynthetics />}
        />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
