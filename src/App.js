import "./App.css";
import AuthContextProvider from "./context/AuthContext";

import AppRouts from "./AppRoutes";

function App() {
  return (
    <AuthContextProvider>
      <AppRouts />
    </AuthContextProvider>
  );
}
export default App;
