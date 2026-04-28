import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;