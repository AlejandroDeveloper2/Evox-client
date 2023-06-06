import { Routes, Route } from "react-router-dom";

import { AdminLayout } from "../layout";
import {
  Users,
  AccountsActvation,
  UserProfile,
  BridgeFundsActivation,
} from "../pages";

const AdminRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Users />} />
        <Route
          path="/admin/accountsActivation"
          element={<AccountsActvation />}
        />
        <Route path="/admin/profile" element={<UserProfile />} />
        <Route
          path="/admin/bridgeFundsAccounts"
          element={<BridgeFundsActivation />}
        />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
