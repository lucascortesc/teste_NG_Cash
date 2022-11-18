import { Route, Routes } from "react-router-dom";
import { Outlet, Navigate } from "react-router-dom";
import { LandingPage } from "../Pages/LandingPage";
import { LoginRegister } from "../Pages/LoginRegister";

export const Navigation = () => {
  const PrivateRoutes = () => {
    const token = localStorage.getItem("@token");
    return token ? <Outlet /> : <Navigate to="/login" />;
  };

  const AuthenticatedForbidenRoutes = () => {
    const token = localStorage.getItem("@token");
    return !token ? <Outlet /> : <Navigate to="/home" />;
  };

  return (
    <Routes>
      <Route element={<AuthenticatedForbidenRoutes />}>
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/register" element={<LoginRegister />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path="/home" />
      </Route>

      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};
