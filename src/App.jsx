import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import NotFoundPage from "./Pages/NotFoundPage";
import ProfilePage from "./Pages/ProfilePage";
import RegistrationPage from "./Pages/RegistrationPage";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<HomePage />} path="/" />
        <Route element={<ProfilePage />} path="/me" />
      </Route>
      <Route element={<LoginPage />} path="/login" />
      <Route element={<RegistrationPage />} path="/registration" />
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  );
}

export default App;
