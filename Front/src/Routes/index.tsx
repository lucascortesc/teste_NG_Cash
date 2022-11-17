import { Route, Routes } from "react-router-dom";
import { Outlet, Navigate } from "react-router-dom";
import { LandingPage } from "../Pages/LandingPage";

export const Navigation = () => {
  const PrivateRoutes = () => {
    const token = localStorage.getItem("token");
    return token ? <Outlet /> : <Navigate to="/login" />;
  };

  const AuthenticatedForbidenRoutes = () => {
    const token = localStorage.getItem("token");
    return !token ? <Outlet /> : <Navigate to="/main" />;
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};
