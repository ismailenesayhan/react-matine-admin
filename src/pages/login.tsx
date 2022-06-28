import React from "react";
import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  Group,
  Center,
  Code,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import ColorSchemeButton from "../components/buttons/colorSchemeButton";
import Logo from "../components/logo";
import LoginBG from "../assets/login-bg.png";

export default function Login() {
  const { classes } = useStyles();
  let navigate = useNavigate();

  function handleOnClick() {
    navigate("/");
  }

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <div style={{ width: 55, marginLeft: "auto", marginRight: "auto" }}>
          <Logo mt={30} />
        </div>

        <Title order={3} align="center" mt="md" mb={50}>
          Cihaz Yönetim Sistemi
        </Title>

        <TextInput
          label="E-Posta Adresi"
          placeholder="isimsoyisim@email.com"
          size="md"
          autoFocus
        />
        <PasswordInput label="Şifre" mt="md" size="md" />

        <Group position="apart" mt="xl">
          <Checkbox label="Beni hatırla" size="md" />
          <Anchor component={Link} weight={600} to="/forgot-password">
            Şifremi Unuttum
          </Anchor>
        </Group>

        <Button fullWidth mt="xl" size="md" onClick={() => handleOnClick()}>
          Giriş Yap
        </Button>

        <Text align="center" size="sm" mt="md" color="dimmed">
          Devam edebilmek için giriş yapmanız gerekmektedir.
        </Text>

        <Center mt={50}>
          <ColorSchemeButton />
          <Code mx="xl">v1.0.0</Code>
        </Center>

        <Text align="center" size="xs" mt={50} color="dimmed">
          ©2022 Tüm Hakları Saklıdır. İsmail Enes Ayhan
        </Text>
      </Paper>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: [`url(${LoginBG})`],
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    maxWidth: 450,
    paddingTop: 80,
    height: "100vh",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },
}));
