import React from "react";
import { Navbar, ScrollArea } from "@mantine/core";
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
  { icon: <Devices2 size={24} />, color: "gray", label: "Cihazlar", link:"devices"},
  { icon: <FileDatabase size={24} />, color: "gray", label: "Log Kayıtları", link:"logs"},
  { icon: <Users size={24} />, color: "gray", label: "Kullanıcılar", link:"users"},
  { icon: <Settings size={24} />, color: "gray", label: "Ayarlar", link:"settings"},
  { icon: <Logout size={24} />, color: "gray", label: "Oturumu Kapat", link:"login"},
];

function MainLinks(props: {onClick: any }) {
  const links = data.map((link) => <MenuLink {...link} key={link.label} onClick={props.onClick} />);
  return <div>{links}</div>;
}

export function NavMenuBar(props: {onClick: any }) {
  return (
    <>
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs" mb="lg">
        <MainLinks onClick={props.onClick}/>
      </Navbar.Section>
      <Navbar.Section>
        <User />
      </Navbar.Section>
    </>
  );
}
