import React from "react";

import { Routes, Route } from "react-router-dom";

import AppShellLayout from "./components/layouts/appShellLayout";

import Index from "./pages/index";
import Users from "./pages/users";
import Devices from "./pages/devices";
import Logs from "./pages/logs";
import Settings from "./pages/settings";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgotPassword";
import ResetPassword from "./pages/resetPassword";

export default function App() {
  return (
    <Routes>
      <Route element={<AppShellLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="devices" element={<Devices />} />
        <Route path="logs" element={<Logs />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password" element={<ResetPassword />} />
    </Routes>
  );
}
