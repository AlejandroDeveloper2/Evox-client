import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Layout, ProtectedLayout } from "./layout";
import { UserRegister, Login, RecoverPassword, UserDashboard } from "./pages";
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
        setLoading={function (): void {
          throw new Error("Function not implemented.");
        }}
        setToast={function (): void {
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
            isAuth={false}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            logIn={function (): Promise<void> {
              throw new Error("Function not implemented.");
            }}
            logOut={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<UserRegister />} />
                <Route path="/:userName" element={<UserRegister />} />
                <Route path="/login" element={<Login />} />
                <Route path="/recoverPassword" element={<RecoverPassword />} />
              </Route>
              <Route path="/dashboard" element={<ProtectedLayout />}>
                <Route index element={<UserDashboard />} />
              </Route>
            </Routes>
          </AuthProvider>
        </ThemeProvider>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
