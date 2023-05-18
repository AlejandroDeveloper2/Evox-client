import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Layout, ProtectedLayout } from "./layout";
import {
  UserRegister,
  Login,
  RecoverPassword,
  UserDashboard,
  ChangePassword,
  ActivateAccount,
  Referrals,
} from "./pages";
import {
  AppProvider,
  AuthProvider,
  ThemeProvider,
  EvoxServicesProvider,
} from "./context";

function App() {
  return (
    /* Application Routes */
    <BrowserRouter>
      <AppProvider>
        <ThemeProvider>
          <AuthProvider>
            <EvoxServicesProvider>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<UserRegister />} />
                  <Route path="/:userName" element={<UserRegister />} />
                  <Route path="/login" element={<Login />} />
                  <Route
                    path="/recoverPassword"
                    element={<RecoverPassword />}
                  />
                  <Route
                    path="/changePassword/:token"
                    element={<ChangePassword />}
                  />
                  <Route
                    path="/activateAccount/:token"
                    element={<ActivateAccount />}
                  />
                </Route>
                <Route path="/dashboard" element={<ProtectedLayout />}>
                  <Route index element={<UserDashboard />} />
                  <Route path="/dashboard/referrals" element={<Referrals />} />
                </Route>
              </Routes>
            </EvoxServicesProvider>
          </AuthProvider>
        </ThemeProvider>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
