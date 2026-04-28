import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import MovieApp from "./components/MovieApp";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <MovieApp />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/movies" replace />} />
      </Routes>
    </>
  );
}

export default App;