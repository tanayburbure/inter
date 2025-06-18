import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";

function BackButton() {
  const location = useLocation();
  const navigate = useNavigate();

  // Hide the button only on the Welcome page
  if (location.pathname === "/") return null;

  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute top-4 left-4 px-4 py-2 bg-white border border-gray-300 rounded shadow text-sm hover:bg-gray-50"
    >
      ← Back
    </button>
  );
}

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-gray-100 text-gray-900">
        <BackButton />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </Router>
  );
}
