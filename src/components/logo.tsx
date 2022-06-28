import React from "react";
import {
  useMantineColorScheme,
  Image,
} from "@mantine/core";
import IeaLogo from "../assets/iea.svg";
import IeaLogoLight from "../assets/iea-light.svg";

export default function Logo(props:any) {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Image
      src={colorScheme === "dark" ? IeaLogoLight : IeaLogo}
      alt="Logo"
      {...props}
    />
  );
}
