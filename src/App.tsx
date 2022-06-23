import React, { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  useMantineTheme,
} from "@mantine/core";
import { Routes, Route, Link } from "react-router-dom";
import { FooterBar } from "./components/footerBar";
import { HeaderBar } from "./components/headerBar";
import { NavMenuBar } from "./components/navMenuBar";

export default function AppShellPi() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

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
          <NavMenuBar />
        </Navbar>
      }
      footer={
        <Footer height={40} p="xs" px={20}>
          <FooterBar />
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <HeaderBar opened={opened} onClick={() => setOpened((o) => !o)} />
        </Header>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </AppShell>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
