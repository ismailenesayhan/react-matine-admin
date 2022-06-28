import React from "react";

import { Routes, Route } from "react-router-dom";

import AppShellLayout from "./components/layouts/appShellLayout";

import Index from "./pages/index";
import Users from "./pages/users";
import Devices from "./pages/devices";
import Logs from "./pages/logs";
import Settings from "./pages/settings";
import Login from "./pages/login";

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
    </Routes>
  );
}
