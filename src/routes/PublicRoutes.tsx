import { Route, Routes } from "react-router-dom";

import { Layout } from "../layout";
import {
  UserRegister,
  Login,
  RecoverPassword,
  ChangePassword,
  ActivateAccount,
} from "../pages";

const PublicRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<UserRegister />} />
        <Route path="/:userName" element={<UserRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recoverPassword" element={<RecoverPassword />} />
        <Route path="/changePassword/:token" element={<ChangePassword />} />
        <Route path="/activateAccount/:token" element={<ActivateAccount />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
