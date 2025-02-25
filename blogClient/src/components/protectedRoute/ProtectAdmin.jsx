import { Navigate, Outlet } from "react-router-dom";

const ProtectAdmin = () => {
  const userEmail = localStorage.getItem("email");

  return userEmail == "admin@gmail.com"  ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectAdmin;
