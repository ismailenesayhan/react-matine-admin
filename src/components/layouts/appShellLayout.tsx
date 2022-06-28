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
import { useScrollLock } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import { FooterBar } from "../footerBar";
import { HeaderBar } from "../headerBar";
import { NavMenuBar } from "../navMenuBar";

export default function AppShellLayout() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [, setScrollLocked] = useScrollLock();

  function toggleClick() {
    setOpened((o) => !o);
    setScrollLocked((c) => !c);
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
          width={{ sm: 250, lg: 300 }}
        >
          <NavMenuBar onClick={() => toggleClick()} />
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Group sx={{ height: "15%" }} />
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
      <Outlet />
    </AppShell>
  );
}
