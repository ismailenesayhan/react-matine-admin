import React from "react";
import {
  Group,
  ActionIcon,
  useMantineColorScheme,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme
} from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";

import IeaLogo from "../assets/iea.svg";
import IeaLogoLight from "../assets/iea-light.svg";

export function HeaderBar(props: { opened: boolean, onClick: any }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Group sx={{ height: "100%" }} px={10} position="apart">
       <Group position="left">
      <img
        src={colorScheme === "dark" ? IeaLogoLight : IeaLogo}
        alt="logo"
        width={35}
      />
        <Text weight={700} size="sm">
          Cihaz Yönetim Sistemi
        </Text>
    </Group>
    <Group>
      <ActionIcon
        variant="default"
        onClick={() => toggleColorScheme()}
        size={30}
      >
        {colorScheme === "dark" ? <Sun size={16} /> : <MoonStars size={16} />}
      </ActionIcon>
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Burger
          opened={props.opened}
          size="md"
          color={theme.colors.gray[6]}
        onClick={props.onClick}

        />
      </MediaQuery>
    </Group>
    </Group>
  );
}
