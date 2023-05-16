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
import { AppProvider, AuthProvider, ThemeProvider } from "./context";

function App() {
  return (
    /* Application Routes */
    <BrowserRouter>
      <AppProvider
        countries={[]}
        userIP={{ ip: "", country_name: "", browser_name: "" }}
        loading={{ message: "", visible: false }}
        toast={{ message: "", type: "success", visible: false }}
        isValidating={false}
        loader={{ message: "", loading: false }}
        setLoading={function (): void {
          throw new Error("Function not implemented.");
        }}
        setToast={function (): void {
          throw new Error("Function not implemented.");
        }}
        setIsValidating={function (): void {
          throw new Error("Function not implemented.");
        }}
        setLoader={function (): void {
          throw new Error("Function not implemented.");
        }}
        isMenuVisible={false}
        toggleLateralMenu={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        <ThemeProvider
          theme={""}
          toggleTheme={function (): void {
            throw new Error("Function not implemented.");
          }}
        >
          <AuthProvider
            auth={null}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            logIn={function (): Promise<void> {
              throw new Error("Function not implemented.");
            }}
            logOut={function (): void {
              throw new Error("Function not implemented.");
            }}
            createAccount={function (): Promise<void> {
              throw new Error("Function not implemented.");
            }}
            checkChangePassToken={function (): Promise<void> {
              throw new Error("Function not implemented.");
            }}
            sendRequestPassword={function (): Promise<void> {
              throw new Error("Function not implemented.");
            }}
            changeUserPassword={function (): Promise<void> {
              throw new Error("Function not implemented.");
            }}
            validateAccount={function (): Promise<void> {
              throw new Error("Function not implemented.");
            }}
            success={false}
          >
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<UserRegister />} />
                <Route path="/:userName" element={<UserRegister />} />
                <Route path="/login" element={<Login />} />
                <Route path="/recoverPassword" element={<RecoverPassword />} />
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
          </AuthProvider>
        </ThemeProvider>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
