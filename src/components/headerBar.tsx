import React from "react";
import {
  Group,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";

import Logo from "./logo";
import ColorSchemeButton from "./buttons/colorSchemeButton";

export function HeaderBar(props: { opened: boolean; onClick: any }) {
  const theme = useMantineTheme();
  return (
    <Group sx={{ height: "100%" }} px={10} position="apart">
      <Group position="left">
        <Logo width={35}/>
        <Text weight={700} size="sm">
          Cihaz Yönetim Sistemi
        </Text>
      </Group>
      <Group>
        <ColorSchemeButton />
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
