import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";

// Define a reusable BackButton component
function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="px-4 py-2 m-4 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Back
    </button>
  );
}

// Create a wrapper component that includes the BackButton and the routes
function AppWrapper() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* The BackButton will appear on every page */}
      <BackButton />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
