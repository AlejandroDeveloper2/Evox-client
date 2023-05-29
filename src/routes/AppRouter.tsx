import { Routes, Route, Navigate } from "react-router-dom";

import { useAuth } from "../hooks";

import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

import { Loading } from "../components";

const AppRouter = (): JSX.Element => {
  const { status } = useAuth();
  if (status === "checking") return <Loading message="Cargando..." />;
  return (
    <Routes>
      {status === "authenticate" ? (
        <Route path="/*" element={<ProtectedRoutes />} />
      ) : (
        <>
          <Route path="/*" element={<PublicRoutes />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
