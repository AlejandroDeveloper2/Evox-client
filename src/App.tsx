import { BrowserRouter } from "react-router-dom";

import AppRouter from "./routes/AppRouter";
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
                <AppRouter />
              </EvoxServicesProvider>
            </UserProfileProvider>
          </AuthProvider>
        </ThemeProvider>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
