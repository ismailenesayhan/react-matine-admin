import React from "react";
import {
  createStyles,
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
} from "@mantine/core";
import { ArrowLeft } from "tabler-icons-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/logo";

export default function ForgotPassword() {
  const { classes } = useStyles();
  let navigate = useNavigate();

  function handleOnClick() {
    navigate("/reset-password");
  }

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
        Şifremi Unuttum
      </Title>

      <Text color="dimmed" size="sm" align="center" mb="lg">
        E-Posta adresinize şifre sıfırlama
        <br /> bağlantısı gönderilecektir.
      </Text>

        <TextInput
          label="E-Posta Adresi"
          placeholder="isimsoyisim@email.com"
          required
          size="md"
          autoFocus
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
          <Button className={classes.control} onClick={()=> handleOnClick()}>Şifremi Sıfırla</Button>
        </Group>
      </Paper>
    </Container>
  );
}


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