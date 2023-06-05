import { Routes, Route } from "react-router-dom";

import { AdminLayout } from "../layout";
import { Users, AccountsActvation } from "../pages";

const AdminRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Users />} />
        <Route
          path="/admin/accountsActivation"
          element={<AccountsActvation />}
        />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
