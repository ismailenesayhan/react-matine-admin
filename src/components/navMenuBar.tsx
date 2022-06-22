import React from "react";
import { Navbar } from "@mantine/core";
import {
  Devices2,
  FileDatabase,
  Logout,
  Settings,
  SmartHome,
  Users,
} from "tabler-icons-react";

import { MenuLink } from "./_menuLink";
import { User } from "./_user";

const data = [
  { icon: <SmartHome size={24} />, color: "gray", label: "Başlangıç", link:"/" },
  { icon: <Devices2 size={24} />, color: "gray", label: "Cihazlar", link:"about"},
  { icon: <FileDatabase size={24} />, color: "gray", label: "Log Kayıtları", link:"/"},
  { icon: <Users size={24} />, color: "gray", label: "Kullanıcılar", link:"about"},
  { icon: <Settings size={24} />, color: "gray", label: "Ayarlar", link:"/"},
  { icon: <Logout size={24} />, color: "gray", label: "Oturumu Kapat", link:"about"},
];

function MainLinks() {
  const links = data.map((link) => <MenuLink {...link} key={link.label} />);
  return <div>{links}</div>;
}

export function NavMenuBar() {
  return (
    <>
      <Navbar.Section grow mt="xs">
        <MainLinks />
      </Navbar.Section>
      <Navbar.Section>
        <User />
      </Navbar.Section>
    </>
  );
}
