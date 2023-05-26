import { Route, Routes } from "react-router-dom";

import { ProtectedLayout } from "../layout";
import { UserDashboard, Referrals, Teams, UserProfile } from "../pages";

const ProtectedRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route index element={<UserDashboard />} />
        <Route path="/dashboard/referrals" element={<Referrals />} />
        <Route path="/dashboard/teams" element={<Teams />} />
        <Route path="/dashboard/profile" element={<UserProfile />} />
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;
