import { useState, useEffect } from 'react'
import Login from './Login';
import Register from './Register';
import Navbar from './Navbar';
import Product from './Product';
import CartDetail from './CartDetail';
import Checkout from './Checkout';
import Orders from './Orders';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import MainLayout from "./MainLayout";
import AuthLayout from "./AuthLayout";
import ProtectedRoute from './components/ProtectedRoute';
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import NotFound from './NotFound';

function App() {


  return (
    <>
      <Toaster position="top-center" toastOptions={{
        duration: 2000,
        style: {
          background: "#333",
          color: "#fff",
        },
      }} />
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>

            <Route element={<MainLayout />}>
              <Route path="/" element={<Product />} />
              <Route path="/cart" element={<CartDetail />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route element={<MainLayout />}>
                <Route path="checkout" element={<Checkout />} />
                <Route path="/orders" element={<Orders />} />
              </Route>
            </Route>

            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Register />} />
            </Route>

            <Route
              path="*"
              element={
                <div className="h-screen flex items-center justify-center text-red-500 text-xl">
                  <NotFound/>
                </div>
              }
            />

          </Routes>
        </ErrorBoundary>
      </div >
    </>
  )
}

export default App
