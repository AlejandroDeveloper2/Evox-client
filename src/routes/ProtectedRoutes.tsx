import { Route, Routes } from "react-router-dom";

import { useAuth } from "../hooks";

import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";

const ProtectedRoutes = (): JSX.Element => {
  const { auth } = useAuth();
  return (
    <Routes>
      {auth?.roles[0].authority === "ROLE_USER" ? (
        <Route path="/*" element={<UserRoutes />} />
      ) : (
        <Route path="/*" element={<AdminRoutes />} />
      )}
    </Routes>
  );
};

export default ProtectedRoutes;
