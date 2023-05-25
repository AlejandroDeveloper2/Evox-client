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
  Teams,
  UserProfile,
} from "./pages";
import {
  AppProvider,
  AuthProvider,
  ThemeProvider,
  EvoxServicesProvider,
  UserProfileProvider,
} from "./context";

function App() {
  return (
    /* Application Routes */
    <BrowserRouter>
      <AppProvider>
        <ThemeProvider>
          <AuthProvider>
            <UserProfileProvider>
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
                    <Route
                      path="/dashboard/referrals"
                      element={<Referrals />}
                    />
                    <Route
                      path="/dashboard/teams"
                      element={<Teams />}
                    />
                    <Route
                      path="/dashboard/profile"
                      element={<UserProfile />}
                    />
                  </Route>
                </Routes>
              </EvoxServicesProvider>
            </UserProfileProvider>
          </AuthProvider>
        </ThemeProvider>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
