import React from "react";
import {
  createStyles,
  Paper,
  Title,
  PasswordInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
} from "@mantine/core";
import { ArrowLeft } from "tabler-icons-react";
import { Link } from "react-router-dom";
import Logo from "../components/logo";

const useStyles = createStyles((theme) => ({
  controls: {
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column-reverse",
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
      textAlign: "center",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
  paper: {
    borderColor: `${
      theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[4]
    }`,
  },
}));

export default function ResetPassword() {
  const { classes } = useStyles();

  return (
    <Container size={460} my={30}>
      <Center>
        <Logo mt={30} width={55} />
      </Center>

      <Title mb={50} mt="md" align="center" order={3}>
        Cihaz Yönetim Sistemi
      </Title>

      <Paper withBorder className={classes.paper} p={30} radius="md" mt="xl">
        <Title mb="lg" align="center" order={3} className={classes.title}>
          Şifre Sıfırlama
        </Title>

        <PasswordInput
          label="Yeni Şifre"
          autoFocus
          mt="md"
          size="md"
          required
          description="
          Şifreniz büyük harf, küçük harf, sayı ve özel karakter içermelidir."
        />
        <PasswordInput
          label="Yeni Şifre (Tekrar)"
          mt="md"
          size="md"
          required
          error="Şifreler aynı değil"
        />
        <Group position="apart" mt="lg" className={classes.controls}>
          <Anchor
            color="dimmed"
            size="sm"
            className={classes.control}
            component={Link}
            to="/login"
          >
            <Center inline>
              <ArrowLeft size={12} />
              <Box ml={5}>Giriş sayfası</Box>
            </Center>
          </Anchor>
          <Button className={classes.control}>Şifremi Sıfırla</Button>
        </Group>
      </Paper>
    </Container>
  );
}
