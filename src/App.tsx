import React, { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  useMantineTheme,
  MediaQuery,
  Group,
} from "@mantine/core";
import { useScrollLock } from '@mantine/hooks';
import { Routes, Route } from "react-router-dom";
import { FooterBar } from "./components/footerBar";
import { HeaderBar } from "./components/headerBar";
import { NavMenuBar } from "./components/navMenuBar";

import Index from "./pages/index";
import Users from "./pages/users";
import Devices from "./pages/devices";
import Logs from "./pages/logs";
import Settings from "./pages/settings";
import Login from "./pages/login";

export default function AppShellPi() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [, setScrollLocked] = useScrollLock();

  function toggleClick() {
    setOpened((o) => !o)
    setScrollLocked((c) => !c)
  }
  return (
    <AppShell
      styles={{
        root: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[1],
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[0]
              : theme.colors.gray[9],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{sm: 250, lg: 300}}
        >
          <NavMenuBar onClick={() => toggleClick()}/>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Group sx={{ height: '15%' }} />
          </MediaQuery>

        </Navbar>
      }
      footer={
        <Footer height={40} p="xs" px={20}>
          <FooterBar />
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <HeaderBar opened={opened} onClick={() => toggleClick()} />
        </Header>
      }
    >
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="devices" element={<Devices />} />
        <Route path="logs" element={<Logs />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </AppShell>
  );
}
