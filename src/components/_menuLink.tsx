import React from "react";
import { ThemeIcon, UnstyledButton, Group, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";

interface MenuLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  link: string;
}

export function MenuLink({ icon, color, label, link }: MenuLinkProps) {

  return (
    <NavLink to={link} style={{ color: "red", textDecoration: "none" }}>
      <UnstyledButton
        sx={(theme) => ({
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.xs,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>

          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </NavLink>
  );
}

