import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import { UserProvider } from "./pages/UserContex";

// BackButton Component (only hidden on Welcome page)
function BackButton() {
  const location = useLocation();
  const navigate = useNavigate();

  // Hide on Welcome page (works with base path)
  if (location.pathname === "/") return null;

  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute top-4 left-4 px-3 py-2 text-lg border border-gray-500 rounded-lg font-bold shadow text-sm hover:bg-[#CEBAFB]"
    >
      ←Back
    </button>
  );
}

// AppContent separated to use Router hooks
function AppContent() {
  return (
    <div className="relative min-h-screen bg-gray-100 text-gray-900">
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
    <UserProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <AppContent />
      </Router>
    </UserProvider>
  );
}